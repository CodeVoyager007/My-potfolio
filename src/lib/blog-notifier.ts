import { db } from './firebase';
import { collection, getDocs } from 'firebase/firestore';
import { sendNewPostEmail } from './resend';

interface BlogPost {
  title: string;
  url: string;
  platform: 'hashnode' | 'medium';
  publishedAt: string;
}

const HASHNODE_USERNAME = 'mughalsyntax';
const MEDIUM_USERNAME = 'ayeshamughal21';

export async function checkNewPosts(lastChecked: string): Promise<BlogPost[]> {
  // Fetch posts from Hashnode and Medium
  const hashnodePosts = await fetchHashnodePosts();
  const mediumPosts = await fetchMediumPosts();
  
  const allPosts = [...hashnodePosts, ...mediumPosts];
  
  // Filter posts published after lastChecked
  return allPosts.filter(post => new Date(post.publishedAt) > new Date(lastChecked));
}

export async function notifySubscribers(newPosts: BlogPost[]) {
  const subscribersRef = collection(db, 'subscribers');
  const subscribersSnapshot = await getDocs(subscribersRef);
  
  const subscribers = subscribersSnapshot.docs.map(doc => doc.data().email);
  
  for (const post of newPosts) {
    for (const email of subscribers) {
      await sendNewPostEmail(email, post.title, post.url);
    }
  }
}

async function fetchHashnodePosts(): Promise<BlogPost[]> {
  const response = await fetch('https://api.hashnode.com/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
        query {
          user(username: "ayeshamughal") {
            publication {
              posts(page: 0) {
                title
                slug
                dateAdded
              }
            }
          }
        }
      `,
    }),
  });

  const data = await response.json();
  return data.data.user.publication.posts.map((post: any) => ({
    title: post.title,
    url: `https://ayeshamughal.hashnode.dev/${post.slug}`,
    platform: 'hashnode',
    publishedAt: post.dateAdded,
  }));
}

async function fetchMediumPosts(): Promise<BlogPost[]> {
  // Medium RSS feed URL
  const response = await fetch('https://medium.com/feed/@ayeshamughal');
  const text = await response.text();
  
  // Parse RSS feed (you might want to use a proper RSS parser)
  const posts: BlogPost[] = [];
  const items = text.match(/<item>[\s\S]*?<\/item>/g) || [];
  
  for (const item of items) {
    const title = item.match(/<title>([\s\S]*?)<\/title>/)?.[1] || '';
    const link = item.match(/<link>([\s\S]*?)<\/link>/)?.[1] || '';
    const pubDate = item.match(/<pubDate>([\s\S]*?)<\/pubDate>/)?.[1] || '';
    
    posts.push({
      title,
      url: link,
      platform: 'medium',
      publishedAt: pubDate,
    });
  }
  
  return posts;
} 