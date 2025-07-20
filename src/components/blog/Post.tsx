"use client";

import React from 'react';
import { Column, Flex, Text, SmartLink, RevealFx, Badge, Media } from "@once-ui-system/core";
import styles from './Post.module.scss';

interface PostProps {
    post: {
        title: string;
        description: string;
        link: string;
        date: string;
        image: string | null;
        platform: string;
    };
    direction?: "row" | "column";
    hasImage: boolean;
}

export const Post: React.FC<PostProps> = ({ post, direction = "row", hasImage }) => {
    const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return (
        <RevealFx fillWidth>
            <SmartLink
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.postCard} ${direction === "column" ? styles.columnLayout : ''} ${hasImage ? styles.withImage : styles.withoutImage}`}
            >
                <Column gap="m" fillWidth>
                    {hasImage && post.image && (
                        <div className={styles.imageContainer}>
                            <Media
                                src={post.image}
                                alt={post.title}
                                radius="m"
                                className={styles.postImage}
                            />
                        </div>
                    )}
                    <Column gap="s" paddingX="m" paddingY={hasImage ? undefined : "m"}>
                        <Badge
                            background="brand-alpha-weak"
                            paddingX="12"
                            paddingY="4"
                            onBackground="brand-strong"
                            textVariant="label-default-s"
                            icon="book"
                        >
                            {post.platform}
                        </Badge>
                        <Text variant="heading-strong-m" wrap="balance" className={styles.title}>
                            {post.title}
                        </Text>
                        <Text 
                            variant="body-default-s"
                            onBackground="neutral-weak"
                            wrap="balance"
                            className={styles.description}
                        >
                            {post.description}
                        </Text>
                        <Text variant="body-default-xs" onBackground="neutral-weak" className={styles.date}>
                            {formattedDate}
                        </Text>
                    </Column>
                </Column>
            </SmartLink>
        </RevealFx>
    );
};