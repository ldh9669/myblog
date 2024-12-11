// "use client"
// import { useParams } from "next/navigation";

// const PostDetail = () => {
//   const params = useParams(); // 동적 라우팅에서 URL 파라미터 가져오기
//   const id = params.id;


//   // 예제 데이터
//   const mockPosts = [
//     {
//       id: "1",
//       title: "Next.js로 블로그 만들기",
//       date: "2024-11-22",
//       tags: ["Next.js", "React", "Blog"],
//       image: "https://via.placeholder.com/300",
//       content: "Next.js와 Tailwind CSS를 활용하여 멋진 블로그를 만들어보세요.",
//     },
//     {
//       id: "2",
//       title: "PostgreSQL 기본 사용법",
//       date: "2024-11-20",
//       tags: ["Database", "PostgreSQL"],
//       image: "https://via.placeholder.com/300",
//       content: "PostgreSQL의 핵심 개념과 사용법을 간단히 알아봅시다.",
//     },
//   ];

//   // 게시물 찾기
//   const post = mockPosts.find((post) => post.id === id);

//   // 게시물이 없을 경우
//   if (!post) {
//     return <div>게시물을 찾을 수 없습니다.</div>;
//   }

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-semibold mb-4">{post.title}</h1>
//       <div className="text-sm text-gray-500 mb-4">{post.date}</div>
//       <div className="flex gap-2 mb-4">
//         {post.tags.map((tag, index) => (
//           <span
//             key={index}
//             className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full"
//           >
//             {tag}
//           </span>
//         ))}
//       </div>
//       <img
//         src={post.image}
//         alt={post.title}
//         className="w-full max-w-2xl h-auto rounded-lg shadow-md"
//       />
//       <p className="text-lg text-gray-700">{post.content}</p>
//     </div>
//   );
// };

// export default PostDetail;

"use client";

import { useParams, useRouter } from "next/navigation";

const PostDetail = () => {
  const params = useParams(); // 동적 라우팅에서 URL 파라미터 가져오기
  const router = useRouter(); // 페이지 이동을 위한 라우터
  const id = params.id;

  // 예제 데이터
  const mockPosts = [
    {
      id: "1",
      title: "Next.js로 블로그 만들기",
      date: "2024-11-22",
      tags: ["Next.js", "React", "Blog"],
      image: "https://via.placeholder.com/300",
      content: "Next.js와 Tailwind CSS를 활용하여 멋진 블로그를 만들어보세요.",
    },
    {
      id: "2",
      title: "PostgreSQL 기본 사용법",
      date: "2024-11-20",
      tags: ["Database", "PostgreSQL"],
      image: "https://via.placeholder.com/300",
      content: "PostgreSQL의 핵심 개념과 사용법을 간단히 알아봅시다.",
    },
    {
      id: "3",
      title: "JavaScript의 비동기 처리 이해하기",
      date: "2024-11-18",
      tags: ["JavaScript", "Async", "Programming"],
      image: "https://via.placeholder.com/300",
      content: "JavaScript의 비동기 처리 방식을 깊이 이해해봅시다.",
    },
  ];

  // 현재 게시물 찾기
  const currentIndex = mockPosts.findIndex((post) => post.id === id);
  const post = mockPosts[currentIndex];

  // 게시물이 없을 경우
  if (!post) {
    return <div>게시물을 찾을 수 없습니다.</div>;
  }

  // 이전 게시물과 다음 게시물 계산
  const prevPost = mockPosts[currentIndex - 1];
  const nextPost = mockPosts[currentIndex + 1];

  // 버튼 클릭 핸들러
  const handleNavigation = (postId: string) => {
    router.push(`/posts/${postId}`); // 동적 라우팅
  };

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
      <p className="text-lg text-gray-700">{post.content}</p>

      {/* 이전/다음 버튼 */}
      <div className="flex justify-between mt-8">
        {prevPost ? (
          <button
            onClick={() => handleNavigation(prevPost.id)}
            className="px-4 py-2 bg-gray-200 text-gray-700 font-semibold rounded hover:bg-gray-300"
          >
            ← 이전 게시물
          </button>
        ) : (
          <div /> // 이전 게시물이 없을 경우 빈 공간
        )}
        {nextPost ? (
          <button
            onClick={() => handleNavigation(nextPost.id)}
            className="px-4 py-2 bg-gray-200 text-gray-700 font-semibold rounded hover:bg-gray-300"
          >
            다음 게시물 →
          </button>
        ) : (
          <div /> // 다음 게시물이 없을 경우 빈 공간
        )}
      </div>
    </div>
  );
};

export default PostDetail;
