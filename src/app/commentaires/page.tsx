'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';

interface Comment {
  id: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  userId: string;
  listingId: string;
  user: {
    name: string;
  };
}

const CommentsTable = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch all comments when the component is mounted
    const fetchComments = async () => {
      try {
        const response = await axios.get('/api/comments');
        setComments(response.data);
      } catch (error) {
        setError('Failed to fetch comments');
      }
    };

    fetchComments();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`/api/comments/delete?id=${id}`);
      setComments((prevComments) => prevComments.filter((comment) => comment.id !== id));
    } catch (error) {
      setError('Failed to delete comment');
    }
  };

  return (
    <div className="container mx-auto py-6">
      <h1 className="text-2xl font-bold mb-4">Comments Table</h1>
      {error && <p className="text-red-500">{error}</p>}
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="px-4 py-2 border">Content</th>
            <th className="px-4 py-2 border">User</th>
            <th className="px-4 py-2 border">Created At</th>
            <th className="px-4 py-2 border">Action</th>
          </tr>
        </thead>
        <tbody>
          {comments.map((comment) => (
            <tr key={comment.id} className="border-t">
              <td className="px-4 py-2 border">{comment.content}</td>
              <td className="px-4 py-2 border">{comment.user?.name || 'Unknown'}</td>
              <td className="px-4 py-2 border">{new Date(comment.createdAt).toLocaleDateString()}</td>
              <td className="px-4 py-2 border">
                <button
                  onClick={() => handleDelete(comment.id)}
                  className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                >
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CommentsTable;
