// "use client";

// import { useState } from "react";

// const CreatePostPage = () => {
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [tags, setTags] = useState("");
//   const [image, setImage] = useState("");
//   const [content, setContent] = useState("");

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     const newPost = {
//       title,
//       description,
//       tags: tags.split(",").map((tag) => tag.trim()),
//       image,
//       content,
//       date: new Date().toISOString().split("T")[0],
//       author: "Admin",
//     };

//     console.log("새로운 글 작성:", newPost);

//     // 여기에서 API 요청을 보내거나 상태를 업데이트하여 새 글을 저장하세요.
//     alert("글이 성공적으로 작성되었습니다!");
//   };

//   return (
//     <div className="container mx-auto px-4 py-8 max-w-2xl">
//       <h1 className="text-3xl font-bold mb-6">새로운 글 작성</h1>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <label htmlFor="title" className="block text-lg font-medium mb-2">
//             제목
//           </label>
//           <input
//             type="text"
//             id="title"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             className="w-full border rounded-lg px-4 py-2"
//             required
//           />
//         </div>
//         <div>
//           <label
//             htmlFor="description"
//             className="block text-lg font-medium mb-2"
//           >
//             설명
//           </label>
//           <textarea
//             id="description"
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             className="w-full border rounded-lg px-4 py-2"
//             rows={3}
//             required
//           ></textarea>
//         </div>
//         <div>
//           <label htmlFor="tags" className="block text-lg font-medium mb-2">
//             태그 (쉼표로 구분)
//           </label>
//           <input
//             type="text"
//             id="tags"
//             value={tags}
//             onChange={(e) => setTags(e.target.value)}
//             className="w-full border rounded-lg px-4 py-2"
//           />
//         </div>
//         <div>
//           <label htmlFor="image" className="block text-lg font-medium mb-2">
//             이미지 URL
//           </label>
//           <input
//             type="text"
//             id="image"
//             value={image}
//             onChange={(e) => setImage(e.target.value)}
//             className="w-full border rounded-lg px-4 py-2"
//           />
//         </div>
//         <div>
//           <label htmlFor="content" className="block text-lg font-medium mb-2">
//             내용
//           </label>
//           <textarea
//             id="content"
//             value={content}
//             onChange={(e) => setContent(e.target.value)}
//             className="w-full border rounded-lg px-4 py-2"
//             rows={6}
//             required
//           ></textarea>
//         </div>
//         <button
//           type="submit"
//           className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition"
//         >
//           작성하기
//         </button>
//       </form>
//     </div>
//   );
// };

// export default CreatePostPage;

// "use client";

// import React, { useState } from "react";
// import { marked } from "marked";

// const CreatePostPage = () => {
//   const [title, setTitle] = useState<string>("");
//   const [content, setContent] = useState<string>("");
//   const [showPreview, setShowPreview] = useState<boolean>(false);

//   const handlePreviewToggle = () => setShowPreview(!showPreview);

//   return (
//     <div className="min-h-screen bg-gray-100 py-8">
//       <div className="container mx-auto px-4">
//         <h1 className="text-3xl font-bold mb-6 text-gray-800">
//           새로운 글 작성
//         </h1>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//           {/* 글 작성 섹션 */}
//           <div>
//             <div className="mb-4">
//               <label htmlFor="title" className="block text-gray-700 font-medium">
//                 제목
//               </label>
//               <input
//                 id="title"
//                 type="text"
//                 className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 placeholder="제목을 입력하세요..."
//                 value={title}
//                 onChange={(e) => setTitle(e.target.value)}
//               />
//             </div>

//             <div className="mb-4">
//               <label
//                 htmlFor="content"
//                 className="block text-gray-700 font-medium"
//               >
//                 내용
//               </label>
//               <textarea
//                 id="content"
//                 className="w-full h-48 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 placeholder="Markdown 문법으로 내용을 작성하세요..."
//                 value={content}
//                 onChange={(e) => setContent(e.target.value)}
//               />
//             </div>

//             <button
//               className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700"
//               onClick={handlePreviewToggle}
//             >
//               {showPreview ? "작성 모드로 돌아가기" : "미리보기"}
//             </button>
//           </div>

//           {/* 실시간 미리보기 섹션 */}
//           <div className="bg-white p-6 rounded-lg shadow-lg">
//             <h2 className="text-xl font-bold text-gray-800 mb-4">미리보기</h2>

//             {showPreview ? (
//               <div>
//                 <h3 className="text-2xl font-semibold text-gray-900 mb-4">
//                   {title || "제목 없음"}
//                 </h3>
//                 <div
//                   className="prose max-w-none"
//                   dangerouslySetInnerHTML={{
//                     __html: marked(content || "내용이 비어 있습니다."),
//                   }}
//                 />
//               </div>
//             ) : (
//               <p className="text-gray-500 italic">
//                 "미리보기 버튼을 눌러 작성한 글을 확인하세요."
//               </p>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CreatePostPage;

"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { marked } from "marked";

const CreatePostPage = () => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [tags, setTags] = useState<string>("");
  const [image, setImage] = useState<string>("https://via.placeholder.com/300");
  const [date] = useState<string>(new Date().toISOString().split("T")[0]); // 현재 날짜
  const router = useRouter();

  const handlePreview = () => {
    const previewData = {
      title,
      content,
      tags: tags.split(",").map((tag) => tag.trim()), // 콤마로 태그 분리
      image,
      date,
    };

    // 로컬 스토리지에 데이터 저장 후 미리보기 페이지로 이동
    localStorage.setItem("previewPost", JSON.stringify(previewData));
    router.push("/preview");
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">
          새로운 글 작성
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* 글 작성 섹션 */}
          <div>
            <div className="mb-4">
              <label htmlFor="title" className="block text-gray-700 font-medium">
                제목
              </label>
              <input
                id="title"
                type="text"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="제목을 입력하세요..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="content"
                className="block text-gray-700 font-medium"
              >
                내용
              </label>
              <textarea
                id="content"
                className="w-full h-48 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Markdown 문법으로 내용을 작성하세요..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="tags" className="block text-gray-700 font-medium">
                태그 (콤마로 구분)
              </label>
              <input
                id="tags"
                type="text"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="예: React, Next.js, Blog"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="image" className="block text-gray-700 font-medium">
                이미지 URL
              </label>
              <input
                id="image"
                type="text"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="이미지 URL을 입력하세요..."
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
            </div>

            <button
              className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700"
              onClick={handlePreview}
            >
              미리보기
            </button>
          </div>

          {/* 실시간 미리보기 섹션 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold text-gray-800 mb-4">미리보기</h2>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              {title || "제목 없음"}
            </h3>
            <div
              className="prose max-w-none"
              dangerouslySetInnerHTML={{
                __html: marked(content || "내용이 비어 있습니다."),
              }}
            />
            <div className="flex gap-2 mt-4">
              {tags
                .split(",")
                .filter((tag) => tag.trim())
                .map((tag, index) => (
                  <span
                    key={index}
                    className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePostPage;
