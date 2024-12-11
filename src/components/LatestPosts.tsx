// LatestPosts.js
import Link from "next/link";

const LatestPosts = ({ posts }) => {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-4">최신 게시물</h2>
      {posts.slice(0, 3).map((post) => (
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
};

export default LatestPosts;
