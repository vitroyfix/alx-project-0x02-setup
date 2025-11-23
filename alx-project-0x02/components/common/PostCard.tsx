import { PostProps } from '@/interfaces';
import React from 'react';

const PostCard: React.FC<PostProps> = ({ title, content, userId }) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-6 mb-4 hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
            <p className="text-gray-600 mb-4">{content}</p>
            <div className="text-sm text-gray-500">User ID: {userId}</div>
        </div>
    );
};

export default PostCard;
