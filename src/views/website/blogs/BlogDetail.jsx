import { useParams, useNavigate, Link } from 'react-router-dom';
import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";
import { blogPostsData, blogAuthors, blogCategories } from '../../../constant/data';

function BlogDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [author, setAuthor] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const [readingProgress, setReadingProgress] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadBlogData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Simulate a small delay for better UX
        await new Promise(resolve => setTimeout(resolve, 300));
        
        // Find the blog post
        const foundBlog = blogPostsData.find(post => post.id === parseInt(id));
        if (!foundBlog) {
          throw new Error('Blog post not found');
        }
        
        setBlog(foundBlog);
        
        // Find author
        const foundAuthor = blogAuthors.find(author => author.id === foundBlog.authorId);
        setAuthor(foundAuthor);
        
        // Find related blogs (same category, excluding current)
        const related = blogPostsData
          .filter(post => post.category === foundBlog.category && post.id !== foundBlog.id)
          .slice(0, 3);
        setRelatedBlogs(related);
        
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      loadBlogData();
    }
  }, [id]);

  useEffect(() => {
    // Reading progress tracking
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      const progress = (scrollTop / (scrollHeight - clientHeight)) * 100;
      setReadingProgress(Math.min(100, Math.max(0, progress)));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [blog]);

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-primary-900 to-black flex items-center justify-center">
        <div className="text-center">
          <div className="relative">
            <div className="w-16 h-16 border-4 border-primary-500/30 rounded-full animate-spin border-t-primary-500 mx-auto mb-4"></div>
            <div className="absolute inset-0 w-16 h-16 border-2 border-accent-500/20 rounded-full animate-pulse mx-auto"></div>
          </div>
          <div className="inline-flex items-center px-4 py-2 bg-blue-800/30 backdrop-blur-sm border border-blue-500/30 rounded-full mb-4">
            <Icon icon="carbon:blog" className="w-4 h-4 text-blue-400 mr-2" />
            <span className="text-sm font-medium text-blue-100/90 tracking-wide">QUEST HUB BLOG</span>
          </div>
          <p className="text-blue-100 text-lg">Loading article...</p>
          <p className="text-gray-400 text-sm mt-2">Please wait while we fetch the content</p>
        </div>
      </div>
    );
  }

  // Error state
  if (error || !blog) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-primary-900 to-black flex items-center justify-center">
        <div className="text-center max-w-md">
          <Icon icon="carbon:warning" className="w-20 h-20 text-red-400 mx-auto mb-6" />
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-6">
            <span className="text-sm font-medium text-white/90 tracking-wide">Q HUB BLOG</span>
          </div>
          <h1 className="text-2xl font-bold text-white mb-4">Article Not Found</h1>
          <p className="text-gray-400 mb-8">
            {error || "The article you're looking for doesn't exist or has been removed."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/blogs')}
              className="px-6 py-3 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-lg hover:from-primary-600 hover:to-accent-600 transition-all duration-300 hover:scale-105"
            >
              <Icon icon="carbon:arrow-left" className="w-5 h-5 mr-2 inline" />
              Back to Blog
            </button>
            <button
              onClick={() => navigate('/')}
              className="px-6 py-3 bg-white/10 border border-white/20 text-white rounded-lg hover:bg-white/20 transition-all duration-300"
            >
              Go Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "Beginner": return "bg-green-500/20 text-green-500";
      case "Intermediate": return "bg-primary-500/20 text-primary-500";
      case "Advanced": return "bg-orange-500/20 text-orange-500";
      case "Expert": return "bg-red-500/20 text-red-500";
      default: return "bg-gray-500/20 text-gray-500";
    }
  };

  const categoryInfo = blogCategories.find(cat => cat.id === blog.category);

  return (
    <div className="bg-gradient-to-b from-slate-900 via-blue-900 to-slate-800 text-blue-100 min-h-screen">
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-800 z-50">
        <div 
          className="h-full bg-gradient-to-r from-primary-500 to-accent-500 transition-all duration-300"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      {/* Navigation */}
      <div className="sticky top-0 bg-black/95 backdrop-blur-xl border-b border-white/10 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate('/blogs')}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              <Icon icon="carbon:arrow-left" className="text-lg" />
              <span className="hidden sm:inline font-medium">Back to Blog</span>
              <span className="sm:hidden font-medium">Back</span>
            </button>
            
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="hidden md:flex items-center px-3 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full">
                <span className="text-sm font-medium text-white/90 tracking-wide">Q HUB BLOG</span>
              </div>
              <div className="hidden md:flex items-center gap-2 text-sm text-gray-400">
                <Icon icon="carbon:time" className="text-primary-500" />
                <span>{blog.readTime}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Icon icon="carbon:view" className="text-accent-500" />
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
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/60" />
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="absolute top-20 left-20 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-accent-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20 lg:py-24">
          <div className="max-w-4xl mx-auto text-center">
            {/* Breadcrumb */}
            <div className="flex items-center justify-center gap-2 text-sm text-gray-400 mb-6">
              <Link to="/" className="hover:text-primary-500 transition-colors">Home</Link>
              <Icon icon="carbon:chevron-right" className="text-xs" />
              <Link to="/blogs" className="hover:text-primary-500 transition-colors">Q HUB Blog</Link>
              <Icon icon="carbon:chevron-right" className="text-xs" />
              <span className="text-accent-400">{categoryInfo?.name}</span>
            </div>

            {/* Category Badge */}
            <div className="flex justify-center mb-6">
              <div className="inline-flex items-center px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full">
                <Icon icon={categoryInfo?.icon || "carbon:folder"} className="w-5 h-5 text-accent-400 mr-3" />
                <span className="text-sm font-medium text-white/90 tracking-wide uppercase">{categoryInfo?.name}</span>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-primary-200 to-accent-300 bg-clip-text text-transparent">
                {blog.title}
              </span>
            </h1>

            {/* Excerpt */}
            <p className="text-lg sm:text-xl text-white/70 mb-8 leading-relaxed max-w-3xl mx-auto">
              {blog.excerpt}
            </p>

            {/* Meta Information */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-8">
              {/* Author */}
              <div className="flex items-center gap-3">
                <img 
                  src={author?.avatar} 
                  alt={author?.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-primary-500/30"
                />
                <div className="text-left">
                  <p className="text-white font-semibold">{author?.name}</p>
                  <p className="text-gray-400 text-sm">{author?.role}</p>
                </div>
              </div>

              {/* Divider */}
              <div className="hidden sm:block w-px h-12 bg-white/20" />

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
                  className="bg-black/50 text-gray-300 px-3 py-1 rounded-full text-sm border border-white/20 hover:border-primary-500/30 transition-colors"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            {/* Article Content */}
            <div className="prose prose-lg prose-invert max-w-none">
              <div className="bg-black/40 backdrop-blur-xl rounded-2xl p-6 sm:p-8 lg:p-12 border border-white/10">
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
                  <p className="text-lg first-letter:text-6xl first-letter:font-bold first-letter:text-primary-500 first-letter:float-left first-letter:mr-3 first-letter:mt-1">
                    {blog.excerpt}
                  </p>
                  
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>

                  <h2 className="text-2xl font-bold text-white mt-8 mb-4">Key Technologies</h2>
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>

                  <div className="bg-black/50 rounded-xl p-6 border border-white/20 my-8">
                    <h3 className="text-xl font-semibold text-primary-500 mb-3 flex items-center gap-2">
                      <Icon icon="carbon:idea" className="text-primary-500" />
                      Pro Tip
                    </h3>
                    <p className="text-gray-300">
                      This is a highlighted section with important information that readers should pay attention to.
                    </p>
                  </div>

                  <h2 className="text-2xl font-bold text-white mt-8 mb-4">Implementation Details</h2>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                  </p>

                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    <li>Advanced software development principles</li>
                    <li>Modern frameworks and libraries</li>
                    <li>Cloud-native architecture patterns</li>
                    <li>DevOps and CI/CD best practices</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Article Footer */}
            <div className="mt-12 p-6 bg-black/40 backdrop-blur-xl rounded-2xl border border-white/10">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <img 
                    src={author?.avatar} 
                    alt={author?.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-primary-500/30"
                  />
                  <div>
                    <h4 className="text-white font-semibold text-lg">{author?.name}</h4>
                    <p className="text-gray-400">{author?.role}</p>
                    <p className="text-gray-500 text-sm">{author?.bio}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 text-gray-400">
                  <div className="flex items-center gap-1">
                    <Icon icon="carbon:favorite" className="text-red-500" />
                    <span>{blog.likes || '124'}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Icon icon="carbon:chat" className="text-blue-500" />
                    <span>{blog.comments}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Icon icon="carbon:share" className="text-green-500" />
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
        <section className="py-12 sm:py-16 bg-gradient-to-b from-black to-primary-900/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
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
                      className="group bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-primary-500/30 transition-all duration-700 shadow-lg hover:shadow-primary-500/10 hover:-translate-y-2"
                    >
                      <div className="aspect-video overflow-hidden">
                        <img 
                          src={relatedBlog.image} 
                          alt={relatedBlog.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                      </div>
                      
                      <div className="p-6">
                        <h3 className="text-lg font-bold text-white mb-3 group-hover:text-primary-500 transition-colors line-clamp-2">
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