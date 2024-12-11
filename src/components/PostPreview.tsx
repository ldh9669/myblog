// components/PostPreview.tsx
import Link from "next/link";

type Post = {
  id: number;
  title: string;
  date: string;
  image: string;
  tags: string[];
};

const PostPreview = ({ post }: { post: Post }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <Link href={`/posts/${post.id}`}>
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-48 object-cover"
      />
    </Link>
    <div className="p-4">
      <Link
        href={`/posts/${post.id}`}
        className="text-lg font-semibold hover:underline block mb-2"
      >
        {post.title}
      </Link>
      <div className="text-sm text-gray-500 mb-2">{post.date}</div>
      <div className="mt-2">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="inline-block bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full mr-2"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  </div>
);

export default PostPreview;
