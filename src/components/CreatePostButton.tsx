import Link from "next/link";

const CreatePostButton = () => {
  return (
    <div className="fixed bottom-8 right-8">
      <Link href="/create-post" className="bg-blue-600 text-white py-3 px-6 rounded-full shadow-lg hover:bg-blue-700 transition">
        글 작성하기
      </Link>
    </div>
  );
};

export default CreatePostButton;
