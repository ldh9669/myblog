"use client";

import React, { useEffect, useState } from "react";

const PreviewPage = () => {
  const [post, setPost] = useState<{
    title: string;
    content: string;
    tags: string[];
    image: string;
    date: string;
  } | null>(null);

  useEffect(() => {
    // 로컬 스토리지에서 데이터 가져오기
    const storedPost = localStorage.getItem("previewPost");
    if (storedPost) {
      setPost(JSON.parse(storedPost));
    }
  }, []);

  if (!post) {
    return <div>미리보기 데이터를 불러올 수 없습니다.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-4">{post.title}</h1>
      <div className="text-sm text-gray-500 mb-4">{post.date}</div>
      <div className="flex gap-2 mb-4">
        {post.tags.map((tag, index) => (
          <span
            key={index}
            className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
      <img
        src={post.image}
        alt={post.title}
        className="w-full max-w-2xl h-auto rounded-lg shadow-md"
      />
      <div
        className="prose max-w-none mt-6"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </div>
  );
};

export default PreviewPage;
