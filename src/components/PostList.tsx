// components/PostList.tsx
import Link from "next/link";

type Post = {
  id: number;
  title: string;
  description: string;
  date: string;
};

const PostList = ({ posts }: { posts: Post[] }) => (
  <section className="mb-12">
    <h2 className="text-2xl font-semibold mb-4">전체 게시물</h2>
    {posts.map((post) => (
      <div
        key={post.id}
        className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md mb-4 hover:shadow-lg transition-shadow"
      >
        <div>
          <Link
            href={`/posts/${post.id}`}
            className="text-lg font-semibold hover:underline"
          >
            {post.title}
          </Link>
          <p className="text-sm text-gray-600">{post.description}</p>
        </div>
        <div className="text-sm text-gray-500">{post.date}</div>
      </div>
    ))}
  </section>
);

export default PostList;
