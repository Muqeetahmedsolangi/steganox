import { useParams, useNavigate, Link } from 'react-router-dom';
import { Icon } from "@iconify/react";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { blogPostsData, blogAuthors, blogCategories, featuredBlogTopics } from '../../../constant/data';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

function BlogDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [author, setAuthor] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const [readingProgress, setReadingProgress] = useState(0);
  const contentRef = useRef(null);
  const heroRef = useRef(null);

  useEffect(() => {
    // Find the blog post
    const foundBlog = blogPostsData.find(post => post.id === parseInt(id));
    if (foundBlog) {
      setBlog(foundBlog);
      
      // Find author
      const foundAuthor = blogAuthors.find(author => author.id === foundBlog.authorId);
      setAuthor(foundAuthor);
      
      // Find related blogs (same category, excluding current)
      const related = blogPostsData
        .filter(post => post.category === foundBlog.category && post.id !== foundBlog.id)
        .slice(0, 3);
      setRelatedBlogs(related);
    }
  }, [id]);

  useEffect(() => {
    // Animate hero section
    if (heroRef.current && blog) {
      gsap.fromTo(
        heroRef.current.children,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out"
        }
      );
    }

    // Reading progress tracking
    const handleScroll = () => {
      if (contentRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
        const progress = (scrollTop / (scrollHeight - clientHeight)) * 100;
        setReadingProgress(Math.min(100, Math.max(0, progress)));
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [blog]);

  if (!blog) {
    return (
      <div className="min-h-screen bg-void-950 flex items-center justify-center">
        <div className="text-center">
          <Icon icon="mdi:loading" className="text-4xl text-neon-500 animate-spin mx-auto mb-4" />
          <p className="text-white">Loading blog post...</p>
        </div>
      </div>
    );
  }

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "Beginner": return "bg-neon-500/20 text-neon-500";
      case "Intermediate": return "bg-cyber-500/20 text-cyber-500";
      case "Advanced": return "bg-orange-500/20 text-orange-500";
      case "Expert": return "bg-red-500/20 text-red-500";
      default: return "bg-gray-500/20 text-gray-500";
    }
  };

  const categoryInfo = blogCategories.find(cat => cat.id === blog.category);

  return (
    <div className="bg-void-950 text-white min-h-screen">
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-void-800 z-50">
        <div 
          className="h-full bg-gradient-to-r from-neon-500 to-cyber-500 transition-all duration-300"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      {/* Navigation */}
      <div className="sticky top-0 bg-void-950/95 backdrop-blur-xl border-b border-void-700/50 z-40">
        <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate('/blogs')}
              className="flex items-center gap-2 text-gray-400 hover:text-neon-500 transition-colors"
            >
              <Icon icon="mdi:arrow-left" className="text-lg" />
              <span className="hidden sm:inline">Back to Blog</span>
              <span className="sm:hidden">Back</span>
            </button>
            
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="hidden md:flex items-center gap-2 text-sm text-gray-400">
                <Icon icon="mdi:clock-outline" className="text-neon-500" />
                <span>{blog.readTime}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Icon icon="mdi:eye" className="text-cyber-500" />
                <span>{blog.views}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={blog.image} 
            alt={blog.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-void-950 via-void-950/80 to-void-950/60" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 py-16 sm:py-20 lg:py-24">
          <div ref={heroRef} className="max-w-4xl mx-auto text-center">
            {/* Breadcrumb */}
            <div className="flex items-center justify-center gap-2 text-sm text-gray-400 mb-6">
              <Link to="/" className="hover:text-neon-500 transition-colors">Home</Link>
              <Icon icon="mdi:chevron-right" className="text-xs" />
              <Link to="/blogs" className="hover:text-neon-500 transition-colors">Blog</Link>
              <Icon icon="mdi:chevron-right" className="text-xs" />
              <span className="text-neon-500">{categoryInfo?.name}</span>
            </div>

            {/* Category Badge */}
            <div className="flex justify-center mb-6">
              <span className="inline-flex items-center gap-2 bg-neon-500/20 backdrop-blur-sm text-neon-500 px-4 py-2 rounded-full text-sm font-medium border border-neon-500/30">
                <Icon icon={categoryInfo?.icon || "mdi:folder"} />
                {categoryInfo?.name}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
              {blog.title}
            </h1>

            {/* Excerpt */}
            <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              {blog.excerpt}
            </p>

            {/* Meta Information */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-8">
              {/* Author */}
              <div className="flex items-center gap-3">
                <img 
                  src={author?.avatar} 
                  alt={author?.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-neon-500/30"
                />
                <div className="text-left">
                  <p className="text-white font-semibold">{author?.name}</p>
                  <p className="text-gray-400 text-sm">{author?.role}</p>
                </div>
              </div>

              {/* Divider */}
              <div className="hidden sm:block w-px h-12 bg-void-700/50" />

              {/* Date & Stats */}
              <div className="text-center sm:text-left">
                <p className="text-gray-300 font-medium">
                  {blog.date.day} {blog.date.month}, {blog.date.year}
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-400 mt-1">
                  <span className={`px-2 py-1 rounded text-xs font-semibold ${getDifficultyColor(blog.difficulty)}`}>
                    {blog.difficulty}
                  </span>
                  <span>• {blog.readTime}</span>
                </div>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {blog.tags.map((tag, index) => (
                <span 
                  key={index}
                  className="bg-void-800/50 text-gray-300 px-3 py-1 rounded-full text-sm border border-void-600/50 hover:border-neon-500/30 transition-colors"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section ref={contentRef} className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            {/* Article Content */}
            <div className="prose prose-lg prose-invert max-w-none">
              <div className="bg-gradient-to-br from-void-900/60 to-void-800/60 backdrop-blur-xl rounded-2xl p-6 sm:p-8 lg:p-12 border border-void-700/50">
                {/* Featured Image */}
                <div className="mb-8 rounded-xl overflow-hidden">
                  <img 
                    src={blog.image} 
                    alt={blog.title}
                    className="w-full h-64 sm:h-80 lg:h-96 object-cover"
                  />
                </div>

                {/* Article Body */}
                <div className="space-y-6 text-gray-300 leading-relaxed">
                  <p className="text-lg first-letter:text-6xl first-letter:font-bold first-letter:text-neon-500 first-letter:float-left first-letter:mr-3 first-letter:mt-1">
                    {blog.excerpt}
                  </p>
                  
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>

                  <h2 className="text-2xl font-bold text-white mt-8 mb-4">Key Technologies</h2>
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>

                  <div className="bg-void-800/50 rounded-xl p-6 border border-void-600/50 my-8">
                    <h3 className="text-xl font-semibold text-neon-500 mb-3">💡 Pro Tip</h3>
                    <p className="text-gray-300">
                      This is a highlighted section with important information that readers should pay attention to.
                    </p>
                  </div>

                  <h2 className="text-2xl font-bold text-white mt-8 mb-4">Implementation Details</h2>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                  </p>

                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    <li>Advanced mechanical design principles</li>
                    <li>CAD modeling and simulation</li>
                    <li>Material selection and optimization</li>
                    <li>Manufacturing process planning</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Article Footer */}
            <div className="mt-12 p-6 bg-gradient-to-br from-void-900/60 to-void-800/60 backdrop-blur-xl rounded-2xl border border-void-700/50">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <img 
                    src={author?.avatar} 
                    alt={author?.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-neon-500/30"
                  />
                  <div>
                    <h4 className="text-white font-semibold text-lg">{author?.name}</h4>
                    <p className="text-gray-400">{author?.role}</p>
                    <p className="text-gray-500 text-sm">{author?.bio}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 text-gray-400">
                  <div className="flex items-center gap-1">
                    <Icon icon="mdi:heart" className="text-red-500" />
                    <span>{blog.likes || '124'}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Icon icon="mdi:comment" className="text-blue-500" />
                    <span>{blog.comments}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Icon icon="mdi:share" className="text-green-500" />
                    <span>Share</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedBlogs.length > 0 && (
        <section className="py-12 sm:py-16 bg-gradient-to-b from-void-950 to-void-900">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
                Related Articles
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedBlogs.map((relatedBlog) => {
                  const relatedAuthor = blogAuthors.find(a => a.id === relatedBlog.authorId);
                  return (
                    <Link
                      key={relatedBlog.id}
                      to={`/blogs/${relatedBlog.id}`}
                      className="group bg-gradient-to-br from-void-800/50 to-void-900/50 backdrop-blur-xl border border-void-700/50 rounded-2xl overflow-hidden hover:border-neon-500/30 transition-all duration-700 shadow-lg hover:shadow-neon-500/10 hover:-translate-y-2"
                    >
                      <div className="aspect-video overflow-hidden">
                        <img 
                          src={relatedBlog.image} 
                          alt={relatedBlog.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                      </div>
                      
                      <div className="p-6">
                        <h3 className="text-lg font-bold text-white mb-3 group-hover:text-neon-500 transition-colors line-clamp-2">
                          {relatedBlog.title}
                        </h3>
                        <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                          {relatedBlog.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <span>{relatedAuthor?.name}</span>
                          <span>{relatedBlog.readTime}</span>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

export default BlogDetail; 