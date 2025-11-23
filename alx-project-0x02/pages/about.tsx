import Button from '@/components/common/Button';
import Header from '@/components/layout/Header';
import React from 'react';

const About: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <Header />
            <main className="grow container mx-auto p-4">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">About Page</h1>
                <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                        <span className="w-32 text-gray-600">Small / Rounded-sm:</span>
                        <Button size="small" shape="rounded-sm" label="Click Me" />
                    </div>
                    <div className="flex items-center space-x-4">
                        <span className="w-32 text-gray-600">Medium / Rounded-md:</span>
                        <Button size="medium" shape="rounded-md" label="Click Me" />
                    </div>
                    <div className="flex items-center space-x-4">
                        <span className="w-32 text-gray-600">Large / Rounded-full:</span>
                        <Button size="large" shape="rounded-full" label="Click Me" />
                    </div>
                </div>
            </main>
        </div>
    );
};

export default About;
