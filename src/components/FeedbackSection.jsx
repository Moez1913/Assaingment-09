import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

const FeedbackSection = () =>{
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !comment) return;

    const newComment = { name, comment };
    setComments([newComment, ...comments]);
    setName('');
    setComment('');
  };

  return(
    <>
    <Helmet>
      <title>CareerGuidePro|Feedback</title>
    </Helmet>
    <div className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-semibold mb-4">📝 Feedback Section</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border border-gray-300 p-2 rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          placeholder="Write your comment..."
          className="w-full border border-gray-300 p-2 rounded"
          rows="4"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></textarea>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>

      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-2">📢 Recent Comments:</h3>
        {comments.length === 0 && <p className="text-gray-500">No comments yet.</p>}
        <ul className="space-y-4">
          {comments.map((c, index) => (
            <li key={index} className="bg-gray-100 p-3 rounded shadow-sm">
              <p className="font-bold">{c.name}</p>
              <p className="text-gray-700">{c.comment}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
    </>
    );
   };

export default FeedbackSection;
