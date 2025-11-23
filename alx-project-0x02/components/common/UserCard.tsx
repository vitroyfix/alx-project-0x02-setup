import { UserProps } from '@/interfaces';
import React from 'react';

const UserCard: React.FC<UserProps> = ({ name, email, address }) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-6 mb-4 hover:shadow-lg transition-shadow duration-300 border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">{name}</h2>
            <p className="text-gray-600 mb-2">Email: {email}</p>
            <div className="text-sm text-gray-500">
                <p>Address:</p>
                <p>{address.street}, {address.suite}</p>
                <p>{address.city}, {address.zipcode}</p>
            </div>
        </div>
    );
};

export default UserCard;
