import React, { useState } from 'react';
import appwriteService from "../appwrite/config";
import { Link } from 'react-router-dom';

function PostCard({ $id, title, featuredImage }) {
    const [imageError, setImageError] = useState(false);
    const [loading, setLoading] = useState(true);

    const handleImageError = () => {
        setImageError(true);
    };

    const imageUrl = featuredImage ? appwriteService.getFilePreview(featuredImage) : '';

    return (
        <Link to={`/post/${$id}`}>
            <div className='w-full bg-gray-100 rounded-xl p-4'>
                <div className='w-full justify-center mb-4'>
                    {loading && <div className="h-48 bg-gray-300 rounded-xl animate-pulse"></div>}
                    {!imageError && (
                        <img
                            src={imageUrl}
                            alt={title}
                            className='rounded-xl'
                            onLoad={() => setLoading(false)}
                            onError={handleImageError}
                            style={{ display: loading ? 'none' : 'block' }}
                        />
                    )}
                    {imageError && (
                        <div className="h-48 bg-gray-300 rounded-xl flex items-center justify-center">
                            <span className="text-gray-500">Image not available</span>
                        </div>
                    )}
                </div>
                <h2 className='text-xl font-bold'>{title}</h2>
            </div>
        </Link>
    );
}

export default PostCard;
