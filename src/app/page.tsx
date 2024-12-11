// "use client";

// import { useState, useEffect } from "react";
// import Navbar from "@/components/Navbar";
// import PostList from "@/components/PostList";
// import Pagination from "@/components/Pagination";
// import PostPreview from "@/components/PostPreview";
// import LatestPosts from "@/components/LatestPosts";
// import CreatePostButton from "@/components/CreatePostButton";

// const Home = () => {
//   const mockPosts = [
//     {
//       id: 1,
//       title: "Next.js로 블로그 만들기",
//       description: "Next.js와 Tailwind CSS를 활용하여 멋진 블로그를 만들어보세요.",
//       author: "Admin",
//       date: "2024-11-22",
//       tags: ["Next.js", "React", "Blog"],
//       image: "https://via.placeholder.com/300",
//     },
//     {
//       id: 2,
//       title: "PostgreSQL 기본 사용법",
//       description: "PostgreSQL의 핵심 개념과 사용법을 간단히 알아봅시다.",
//       author: "Admin",
//       date: "2024-11-20",
//       tags: ["Database", "PostgreSQL"],
//       image: "https://via.placeholder.com/300",
//     },
//     {
//       id: 3,
//       title: "React 상태 관리 라이브러리 비교",
//       description: "Redux, MobX, Zustand 등 상태 관리 라이브러리를 비교합니다.",
//       author: "Admin",
//       date: "2024-11-18",
//       tags: ["React", "State Management"],
//       image: "https://via.placeholder.com/300",
//     },
//     {
//       id: 4,
//       title: "JavaScript 클로저 이해하기",
//       description: "JavaScript 클로저 개념과 실전 활용법을 알아봅니다.",
//       author: "Admin",
//       date: "2024-11-15",
//       tags: ["JavaScript", "Programming"],
//       image: "https://via.placeholder.com/300",
//     },
//     {
//       id: 5,
//       title: "CSS Flexbox 완벽 가이드",
//       description: "Flexbox를 사용해 레이아웃을 쉽게 구현하는 방법을 배워보세요.",
//       author: "Admin",
//       date: "2024-11-13",
//       tags: ["CSS", "Frontend"],
//       image: "https://via.placeholder.com/300",
//     },
//     {
//       id: 6,
//       title: "Webpack 기본 개념",
//       description: "Webpack의 기본 사용법과 주요 개념을 알아봅니다.",
//       author: "Admin",
//       date: "2024-11-10",
//       tags: ["Webpack", "Build Tools"],
//       image: "https://via.placeholder.com/300",
//     },
//     {
//       id: 7,
//       title: "Git 기본 명령어",
//       description: "Git의 기본적인 명령어를 학습하고 실전 활용법을 익혀보세요.",
//       author: "Admin",
//       date: "2024-11-08",
//       tags: ["Git", "Version Control"],
//       image: "https://via.placeholder.com/300",
//     },
//   ];

//   const [currentPage, setCurrentPage] = useState(1);
//   const postsPerPage = 5;
//   const startIndex = (currentPage - 1) * postsPerPage;
//   const endIndex = startIndex + postsPerPage;
//   const currentPosts = mockPosts.slice(startIndex, endIndex);

//   const totalPages = Math.ceil(mockPosts.length / postsPerPage);

//   const handlePageChange = (page: number) => {
//     setCurrentPage(page);
//   };

//   // 네비게이션 바 스크롤 감지
//   const [showNav, setShowNav] = useState(true);
//   const [lastScrollY, setLastScrollY] = useState(0);

//   const handleScroll = () => {
//     const currentScrollY = window.scrollY;
//     if (currentScrollY > lastScrollY) {
//       setShowNav(false);
//     } else {
//       setShowNav(true);
//     }
//     setLastScrollY(currentScrollY);
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [lastScrollY]);

//   return (
//     <div className="bg-gray-100 min-h-screen py-8">
//       <Navbar showNav={showNav} />
//       <div className="container mx-auto px-4 mt-16">
//         <PostList posts={currentPosts} />
//         <Pagination
//           currentPage={currentPage}
//           totalPages={totalPages}
//           onPageChange={handlePageChange}
//         />

//         {/* 추가된 버튼 */}
//         <CreatePostButton />
        
//         {/* 미리보기 게시물 */}
//         <section className="mb-12">
//           <h2 className="text-2xl font-semibold mb-4">미리보기 게시물</h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//             {mockPosts.map((post) => (
//               <PostPreview key={post.id} post={post} />
//             ))}
//           </div>
//         </section>

//         {/* 최신 게시물 */}
//         <section className="mt-12">
//           <LatestPosts posts={mockPosts} />
//         </section>
//       </div>
//     </div>
//   );
// };

// export default Home;

"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import PostList from "@/components/PostList";
import Pagination from "@/components/Pagination";
import PostPreview from "@/components/PostPreview";
import LatestPosts from "@/components/LatestPosts";
import CreatePostButton from "@/components/CreatePostButton";

const Home = () => {
  const mockPosts = [
    {
      id: 1,
      title: "Next.js로 블로그 만들기",
      description: "Next.js와 Tailwind CSS를 활용하여 멋진 블로그를 만들어보세요.",
      author: "Admin",
      date: "2024-11-22",
      tags: ["Next.js", "React", "Blog"],
      image: "https://via.placeholder.com/300",
    },
    {
      id: 2,
      title: "PostgreSQL 기본 사용법",
      description: "PostgreSQL의 핵심 개념과 사용법을 간단히 알아봅시다.",
      author: "Admin",
      date: "2024-11-20",
      tags: ["Database", "PostgreSQL"],
      image: "https://via.placeholder.com/300",
    },
    {
      id: 3,
      title: "React 상태 관리 라이브러리 비교",
      description: "Redux, MobX, Zustand 등 상태 관리 라이브러리를 비교합니다.",
      author: "Admin",
      date: "2024-11-18",
      tags: ["React", "State Management"],
      image: "https://via.placeholder.com/300",
    },
    {
      id: 4,
      title: "JavaScript 클로저 이해하기",
      description: "JavaScript 클로저 개념과 실전 활용법을 알아봅니다.",
      author: "Admin",
      date: "2024-11-15",
      tags: ["JavaScript", "Programming"],
      image: "https://via.placeholder.com/300",
    },
    {
      id: 5,
      title: "CSS Flexbox 완벽 가이드",
      description: "Flexbox를 사용해 레이아웃을 쉽게 구현하는 방법을 배워보세요.",
      author: "Admin",
      date: "2024-11-13",
      tags: ["CSS", "Frontend"],
      image: "https://via.placeholder.com/300",
    },
    {
      id: 6,
      title: "Webpack 기본 개념",
      description: "Webpack의 기본 사용법과 주요 개념을 알아봅니다.",
      author: "Admin",
      date: "2024-11-10",
      tags: ["Webpack", "Build Tools"],
      image: "https://via.placeholder.com/300",
    },
    {
      id: 7,
      title: "Git 기본 명령어",
      description: "Git의 기본적인 명령어를 학습하고 실전 활용법을 익혀보세요.",
      author: "Admin",
      date: "2024-11-08",
      tags: ["Git", "Version Control"],
      image: "https://via.placeholder.com/300",
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // 검색 필터 적용
  const filteredPosts = mockPosts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const postsPerPage = 5;
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const currentPosts = filteredPosts.slice(startIndex, endIndex);

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // 네비게이션 바 스크롤 감지
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY) {
      setShowNav(false);
    } else {
      setShowNav(true);
    }
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <Navbar showNav={showNav} />

      {/* 검색 입력 필드 */}
      <div className="container mx-auto px-4 mt-16">
        <input
          type="text"
          placeholder="게시물 제목 검색..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1); // 검색 시 페이지 초기화
          }}
          className="w-full p-2 mb-4 border border-gray-300 rounded-md"
        />

        <PostList posts={currentPosts} />

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />

        {/* 추가된 버튼 */}
        <CreatePostButton />
        
        {/* 미리보기 게시물 */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">미리보기 게시물</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {mockPosts.map((post) => (
              <PostPreview key={post.id} post={post} />
            ))}
          </div>
        </section>

        {/* 최신 게시물 */}
        <section className="mt-12">
          <LatestPosts posts={mockPosts} />
        </section>
      </div>
    </div>
  );
};

export default Home;
