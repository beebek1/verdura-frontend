import React from 'react';
import BlogCard from '../components/BlogCard';

const Blogs = () => {
  const blogs = [
    {
      id: 1,
      author: "Greenorc Unite",
      authorImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix",
      badge: "Spotlight",
      badgeColor: "bg-slate-600",
      title: "Importance of Evolution",
      excerpt: "A blog is a website or a part of a website that is updated regularly with new content, known as posts, displayed in reverse chronological order with the newest articles appearing first. It is a platform for sharing information, thoughts. With over 600 million on the internet, you've likely encountered one or two blogs you've even on one right now ......",
      date: "31th Dec",
      views: "670"
    },
    {
      id: 2,
      author: "Greenorc Unite",
      authorImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix",
      badge: "News",
      badgeColor: "bg-gray-500",
      title: "Importance of Evolution",
      excerpt: "A blog is a website or a part of a website that is updated regularly with new content, known as posts, displayed in reverse chronological order with the newest articles appearing first. It is a platform for sharing information, thoughts. With over 600 million on the internet, you've likely encountered one or two blogs you've even on one right now ......",
      date: "31th Dec",
      views: "670"
    },
    {
      id: 3,
      author: "Greenorc Unite",
      authorImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix",
      badge: "News",
      badgeColor: "bg-gray-500",
      title: "Importance of Evolution",
      excerpt: "A blog is a website or a part of a website that is updated regularly with new content, known as posts, displayed in reverse chronological order with the newest articles appearing first. It is a platform for sharing information, thoughts. With over 600 million on the internet, you've likely encountered one or two blogs you've even on one right now ......",
      date: "31th Dec",
      views: "670"
    },
    {
      id: 4,
      author: "Greenorc Unite",
      authorImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix",
      badge: "Blog",
      badgeColor: "bg-gray-600",
      title: "Importance of Evolution",
      excerpt: "A blog is a website or a part of a website that is updated regularly with new content, known as posts, displayed in reverse chronological order with the newest articles appearing first. It is a platform for sharing information, thoughts. With over 600 million on the internet, you've likely encountered one or two blogs you've even on one right now ......",
      date: "31th Dec",
      views: "670"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 text-center mb-8">
          Blogs, Spotlights & News
        </h1>
        
        <div className="space-y-4">
          {blogs.map((blog) => (
            <BlogCard
              key={blog.id}
              author={blog.author}
              authorImage={blog.authorImage}
              badge={blog.badge}
              badgeColor={blog.badgeColor}
              title={blog.title}
              excerpt={blog.excerpt}
              date={blog.date}
              views={blog.views}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;