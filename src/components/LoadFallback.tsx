// src/components/LoadFallback.tsx
import React from 'react';
import './LoadFallback.css'; // Assuming you have some basic CSS for the spinner

const LoadFallback = () => {
    return (
        <div className="load-fallback">
            <div className="spinner"></div>
            <p>Loading...</p>
        </div>
    );
};

export default LoadFallback;
