import React from 'react';
import { Helmet } from 'react-helmet';

const blogs = [
  {
    title: 'Top 5 Career Mistakes to Avoid in Your 20s',
    date: 'May 10, 2025',
    author: 'Dr. Sharmeen Reza',
    image: 'https://i.ibb.co/pf4rCFn/career-blog-1.jpg',
    summary: 'Learn about the most common career pitfalls and how to avoid them to stay on the path to success.',
  },
  {
    title: 'How to Write an Effective Resume in 2025',
    date: 'April 22, 2025',
    author: 'Imran Mahmud',
    image: 'https://i.ibb.co/sm38bWZ/career-blog-2.jpg',
    summary: 'From design to content, here’s how to write a resume that truly impresses employers.',
  },
  {
    title: 'The Importance of Soft Skills in Modern Jobs',
    date: 'March 30, 2025',
    author: 'Nazmun Nahar',
    image: 'https://i.ibb.co/NmfjZv7/career-blog-3.jpg',
    summary: 'Technical skills may get you the job, but soft skills will help you grow. Learn which ones matter most.',
  },
];

const BlogPage = () => {
  return (
    <>
      <Helmet>
        <title>CareerGuidePro|Blog</title>
      </Helmet>
      <section className="px-4 py-8 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-8">Career Blog Insights</h2>

        {/* Blog 1 */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-6">
          <h3 className="text-xl font-semibold text-blue-700">Career Counseling Sessions</h3>
          <p className="text-gray-700 mt-2">
            Personalized guidance to help you identify the right career path based on your interests and skills.
          </p>
          <details className="mt-3">
            <summary className="text-blue-600 cursor-pointer">About the Service</summary>
            <p className="mt-2 text-gray-600">
              This service connects you with experienced counselors who analyze your academic background, strengths,
              and aspirations to recommend suitable career paths. Ideal for students, graduates, or professionals
              seeking change.
            </p>
          </details>
        </div>

        {/* Blog 2 */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-6">
          <h3 className="text-xl font-semibold text-blue-700">Resume Review</h3>
          <p className="text-gray-700 mt-2">
            Get a detailed and personalized review of your resume by experts to improve job application success.
          </p>
          <details className="mt-3">
            <summary className="text-blue-600 cursor-pointer">About the Service</summary>
            <p className="mt-2 text-gray-600">
              Our resume specialists provide feedback on structure, keywords, and design to make your resume stand out.
              Whether you're applying for internships or full-time jobs, this service can greatly boost your chances.
            </p>
          </details>
        </div>

        {/* Blog 3 */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-6">
          <h3 className="text-xl font-semibold text-blue-700">Freelancing Kickstart Program</h3>
          <p className="text-gray-700 mt-2">
            Learn how to launch a successful freelancing career from scratch with our guided training.
          </p>
          <details className="mt-3">
            <summary className="text-blue-600 cursor-pointer">About the Service</summary>
            <p className="mt-2 text-gray-600">
              This program covers everything from setting up your profile on freelancing platforms, building your
              portfolio, to client communication and securing your first project. Best for beginners in freelancing.
            </p>
          </details>
        </div>

      </section>
    </>
  );
};

export default BlogPage;
