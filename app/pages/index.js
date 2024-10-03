import Navbar from "../components/Navbar";

const blogs = [
  {
    id: 1,
    title: "First Blog Post",
    excerpt: "This is the first blog post...",
  },
  {
    id: 2,
    title: "Second Blog Post",
    excerpt: "This is the second blog post...",
  },
  {
    id: 3,
    title: "Third Blog Post",
    excerpt: "This is the third blog post...",
  },
];

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-6">Blog Posts</h1>
        <div className="grid grid-cols-1 gap-6">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition"
            >
              <h2 className="text-2xl font-semibold mb-2">{blog.title}</h2>
              <p className="text-gray-600">{blog.excerpt}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
