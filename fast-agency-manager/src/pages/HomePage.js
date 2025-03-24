import React from "react";

const HomePage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-3xl font-bold mb-6">FastAgency</h1>
            <p className="text-lg text-gray-700 mb-4">
                AI-powered Managers for your Fantasy Team.
            </p>
            <a href="/login">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl shadow-lg transition">
                    Login with Yahoo Fantasy
                </button>
            </a>
        </div>
    );
};

export default HomePage;
