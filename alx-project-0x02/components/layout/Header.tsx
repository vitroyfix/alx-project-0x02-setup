import Link from 'next/link';
import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="bg-gray-800 text-white p-4">
            <nav className="container mx-auto flex justify-between items-center">
                <h1 className="text-xl font-bold">My App</h1>
                <ul className="flex space-x-4">
                    <li>
                        <Link href="/home" className="hover:text-gray-300">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" className="hover:text-gray-300">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href="/posts" className="hover:text-gray-300">
                            Posts
                        </Link>
                    </li>
                    <li>
                        <Link href="/users" className="hover:text-gray-300">
                            Users
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
