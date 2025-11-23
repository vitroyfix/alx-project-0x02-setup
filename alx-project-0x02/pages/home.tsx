import Card from '@/components/common/Card';
import PostModal from '@/components/common/PostModal';
import Header from '@/components/layout/Header';
import { CardProps } from '@/interfaces';
import React, { useState } from 'react';

const Home: React.FC = () => {
    const [posts, setPosts] = useState<CardProps[]>([
        { title: 'First Card', content: 'This is the content of the first card.' },
        { title: 'Second Card', content: 'This is the content of the second card.' },
    ]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleAddPost = (title: string, content: string) => {
        setPosts([...posts, { title, content }]);
    };

    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <Header />
            <main className="grow container mx-auto p-4">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-3xl font-bold text-gray-800">Home Page</h1>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                    >
                        Add Post
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {posts.map((post, index) => (
                        <Card key={index} title={post.title} content={post.content} />
                    ))}
                </div>

                <PostModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    onSave={handleAddPost}
                />
            </main>
        </div>
    );
};

export default Home;
