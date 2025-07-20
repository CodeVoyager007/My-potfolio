"use client";

import React, { useState, useEffect } from 'react';
import { Grid, Column, Skeleton, Text } from "@once-ui-system/core";
import { Post } from "./Post";
import styles from './Posts.module.scss';

interface PostsProps {
  range?: [number, number?];
  direction?: "row" | "column";
  columns?: string | number;
}

export function Posts({ range, direction = "row", columns = "1" }: PostsProps) {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPosts() {
      try {
        setError(null);
        const response = await fetch('/api/blog');
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        let fetchedPosts = await response.json();
        // Sort posts by published date (latest first)
        fetchedPosts = fetchedPosts.sort((a: any, b: any) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
        setPosts(fetchedPosts);
      } catch (error) {
        console.error('Error fetching posts:', error);
        setError('Failed to load posts. Please try again later.');
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);

  const displayedPosts = range
    ? posts.slice(range[0] - 1, range[1] ?? posts.length)
    : posts;

  // Separate posts with and without images
  const postsWithImages = displayedPosts.filter(post => post.image);
  const postsWithoutImages = displayedPosts.filter(post => !post.image);

  const loadingCount = range ? (range[1] || range[0]) - range[0] + 1 : 3;
  const gridColumns = typeof columns === 'string' ? parseInt(columns, 10) : columns;

  if (loading) {
    return (
      <Grid columns={gridColumns as any} gap="l" className={direction === "column" ? styles.columnLayout : ""}>
        {Array.from({ length: loadingCount }).map((_, index) => (
          <Column key={`skeleton-${index}`} gap="s">
            <Column gap="xs">
              <Skeleton height="l" width="l" shape="block" />
              <Skeleton height="m" width="l" shape="block" />
              <Skeleton height="s" width="m" shape="block" />
              <Skeleton height="s" width="s" shape="block" />
            </Column>
          </Column>
        ))}
      </Grid>
    );
  }

  if (error) {
    return (
      <div className={styles.error}>
        <p>{error}</p>
      </div>
    );
  }

  if (!displayedPosts.length) {
    return null;
  }

  return (
    <Column gap="xl" fillWidth>
      {postsWithImages.length > 0 && (
        <Column gap="l">
          <Text variant="heading-strong-m" onBackground="neutral-strong">Featured Articles</Text>
          <Grid columns={gridColumns as any} gap="l" className={direction === "column" ? styles.columnLayout : ""}>
            {postsWithImages.map((post) => (
              <Post
                key={post.link}
                post={post}
                direction={direction}
                hasImage={true}
              />
            ))}
          </Grid>
        </Column>
      )}
      {postsWithoutImages.length > 0 && (
        <Column gap="l">
          <Text variant="heading-strong-m" onBackground="neutral-strong">More Articles</Text>
          <Grid columns={gridColumns as any} gap="l" className={direction === "column" ? styles.columnLayout : ""}>
            {postsWithoutImages.map((post) => (
              <Post
                key={post.link}
                post={post}
                direction={direction}
                hasImage={false}
              />
            ))}
          </Grid>
        </Column>
      )}
    </Column>
  );
}