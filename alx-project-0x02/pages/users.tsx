import UserCard from '@/components/common/UserCard';
import Header from '@/components/layout/Header';
import { UserProps } from '@/interfaces';
import React from 'react';

interface UsersPageProps {
    users: UserProps[];
}

const Users: React.FC<UsersPageProps> = ({ users }) => {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <Header />
            <main className="grow container mx-auto p-4">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">Users</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {users.map((user) => (
                        <UserCard
                            key={user.id}
                            id={user.id}
                            name={user.name}
                            email={user.email}
                            address={user.address}
                        />
                    ))}
                </div>
            </main>
        </div>
    );
};

export async function getStaticProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();

    return {
        props: {
            users,
        },
    };
}

export default Users;
