import PostCard from '@/components/common/PostCard';
import Header from '@/components/layout/Header';
import { PostProps } from '@/interfaces';
import { GetStaticProps } from 'next';
import React from 'react';

interface PostsPageProps {
    posts: PostProps[];
}

const Posts: React.FC<PostsPageProps> = ({ posts }) => {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <Header />
            <main className="grow container mx-auto p-4">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">Posts</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {posts.map((post, index) => (
                        <PostCard
                            key={index}
                            title={post.title}
                            content={post.content}
                            userId={post.userId}
                        />
                    ))}
                </div>
            </main>
        </div>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();

    // Map API data to our interface (API returns 'body' instead of 'content')
    const posts = data.map((post: any) => ({
        title: post.title,
        content: post.body,
        userId: post.userId,
    }));

    return {
        props: {
            posts,
        },
    };
};

export default Posts;
