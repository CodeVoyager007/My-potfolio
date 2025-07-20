import { NextResponse } from 'next/server';
import { checkNewPosts, notifySubscribers } from '@/lib/blog-notifier';

export async function POST(request: Request) {
  try {
    const { lastChecked } = await request.json();
    
    if (!lastChecked) {
      return NextResponse.json(
        { error: 'lastChecked date is required' },
        { status: 400 }
      );
    }

    const newPosts = await checkNewPosts(lastChecked);
    
    if (newPosts.length > 0) {
      await notifySubscribers(newPosts);
    }

    return NextResponse.json({
      message: 'Successfully checked for new posts',
      newPostsCount: newPosts.length,
    });
  } catch (error) {
    console.error('Error checking for new posts:', error);
    return NextResponse.json(
      { error: 'Failed to check for new posts' },
      { status: 500 }
    );
  }
} 