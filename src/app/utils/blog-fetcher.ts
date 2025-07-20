import { Post } from '@/types/blog';

const HASHNODE_USERNAME = 'mughalsyntax';
const MEDIUM_USERNAME = 'ayeshamughal21';

async function fetchHashnodePosts(): Promise<Post[]> {
  try {
    const response = await fetch('https://api.hashnode.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
          query {
            user(username: "${HASHNODE_USERNAME}") {
              publication {
                posts(page: 0) {
                  title
                  slug
                  dateAdded
                  brief
                  coverImage
                }
              }
            }
          }
        `,
      }),
    });

    const data = await response.json();
    
    if (!data.data?.user?.publication?.posts) {
      console.error('Invalid Hashnode response structure:', data);
      return [];
    }

    return data.data.user.publication.posts.map((post: any) => ({
      title: post.title,
      link: `https://${HASHNODE_USERNAME}.hashnode.dev/${post.slug}`,
      date: new Date(post.dateAdded).toISOString(),
      description: post.brief,
      image: post.coverImage,
      platform: 'hashnode'
    }));
  } catch (error) {
    console.error('Error fetching Hashnode posts:', error);
    return [];
  }
}

async function fetchMediumPosts(): Promise<Post[]> {
  try {
    const response = await fetch(
      `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${MEDIUM_USERNAME}`
    );

    const data = await response.json();
    
    if (!data.items) {
      console.error('No Medium posts found or invalid response:', data);
      return [];
    }

    return data.items.map((post: any) => ({
      title: post.title,
      link: post.link,
      date: post.pubDate,
      description: post.description,
      image: post.thumbnail || '',
      platform: 'medium'
    }));
  } catch (error) {
    console.error('Error fetching Medium posts:', error);
    return [];
  }
}

export async function getAllPosts(): Promise<Post[]> {
  try {
    const [hashnodePosts, mediumPosts] = await Promise.all([
      fetchHashnodePosts(),
      fetchMediumPosts()
    ]);

    const allPosts = [...hashnodePosts, ...mediumPosts];
    
    // Sort posts by date (newest first)
    return allPosts.sort((a, b) => 
      new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  } catch (error) {
    console.error('Error fetching all posts:', error);
    return [];
  }
} 