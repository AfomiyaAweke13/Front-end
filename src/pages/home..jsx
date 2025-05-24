import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="text-center mt-20">
      <h1 className="text-3xl font-bold mb-6">Welcome to the EMR Management System</h1>
      <Link
        to="/history"
        className="text-blue-600 underline text-lg hover:text-blue-800"
      >
        View Patient History
      </Link>
    </div>
  );
}

export default Home;
