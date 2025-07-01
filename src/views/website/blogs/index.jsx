import { Icon } from "@iconify/react";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { blogCategories, blogPostsData, blogAuthors, blogStats, featuredBlogTopics } from '../../../constant/data';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

function index() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const sectionRef = useRef(null);
  const blogRefs = useRef([]);
  
  // Using imported data from data.js
  const categories = blogCategories;
  const blogPosts = blogPostsData;
  const authors = blogAuthors;

  // Filter blogs based on active category and search query
  const filteredBlogs = blogPosts.filter(blog => {
    const matchesCategory = activeCategory === "all" || blog.category === activeCategory;
    const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         blog.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  // Get author info by authorId
  const getAuthor = (authorId) => {
    return authors.find(author => author.id === authorId) || {
      name: "Unknown Author",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    };
  };

  useEffect(() => {
    // Animate blog cards
    blogRefs.current.forEach((blog, index) => {
      if (blog) {
        gsap.fromTo(
          blog,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: index * 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: blog,
              start: "top 85%",
              once: true
            }
          }
        );
      }
    });
  }, [filteredBlogs]);

  // Get difficulty badge color
  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "Beginner": return "bg-neon-500/20 text-neon-500";
      case "Intermediate": return "bg-cyber-500/20 text-cyber-500";
      case "Advanced": return "bg-orange-500/20 text-orange-500";
      case "Expert": return "bg-red-500/20 text-red-500";
      default: return "bg-gray-500/20 text-gray-500";
    }
  };

  return (
    <div className="bg-void-950 text-white">
      {/* Hero Banner */}
      <div className="w-full">
        <div className="relative h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] overflow-hidden">
          {/* Dark overlay with mechanical pattern */}
          <div className="absolute inset-0 bg-void-900 bg-opacity-90 z-10">
            <div className="absolute inset-0 bg-tech-grid opacity-10"></div>
          </div>
          
          {/* Floating mechanical elements */}
          <div className="absolute inset-0 z-10 overflow-hidden">
            <Icon 
              icon="mdi:cog" 
              className="absolute top-10 sm:top-20 left-10 sm:left-20 text-neon-500/10 w-20 h-20 sm:w-32 sm:h-32 md:w-40 md:h-40 animate-spin-slow"
            />
            <Icon 
              icon="mdi:cog-outline" 
              className="absolute bottom-5 sm:bottom-10 right-20 sm:right-40 text-neon-500/10 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 animate-spin-slow-reverse"
            />
          </div>

          {/* Content */}
          <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-neon-500 via-primary to-primary-600 bg-clip-text text-transparent leading-tight">
              Engineering Insights
            </h1>
            <div className="flex items-center gap-2 text-xs sm:text-sm md:text-base text-gray-300">
              <span>Home</span>
              <Icon icon="mdi:chevron-right" className="w-4 h-4 sm:w-5 sm:h-5 text-neon-500" />
              <span className="text-neon-500">Blog</span>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Stats Section */}
      <div className="py-12 sm:py-14 md:py-16 bg-gradient-to-b from-void-900 to-void-950">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            <div className="text-center p-4 sm:p-6 bg-void-800/30 rounded-xl border border-void-700/50">
              <Icon icon="mdi:post" className="text-neon-500 text-2xl sm:text-3xl mx-auto mb-2 sm:mb-3" />
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-neon-500">{blogStats.totalPosts}</h3>
              <p className="text-xs sm:text-sm text-gray-400">Total Posts</p>
            </div>
            <div className="text-center p-4 sm:p-6 bg-void-800/30 rounded-xl border border-void-700/50">
              <Icon icon="mdi:eye" className="text-cyber-500 text-2xl sm:text-3xl mx-auto mb-2 sm:mb-3" />
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-cyber-500">{blogStats.totalViews.toLocaleString()}</h3>
              <p className="text-xs sm:text-sm text-gray-400">Total Views</p>
            </div>
            <div className="text-center p-4 sm:p-6 bg-void-800/30 rounded-xl border border-void-700/50">
              <Icon icon="mdi:comment" className="text-quantum-500 text-2xl sm:text-3xl mx-auto mb-2 sm:mb-3" />
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-quantum-500">{blogStats.totalComments}</h3>
              <p className="text-xs sm:text-sm text-gray-400">Comments</p>
            </div>
            <div className="text-center p-4 sm:p-6 bg-void-800/30 rounded-xl border border-void-700/50">
              <Icon icon="mdi:clock" className="text-plasma-500 text-2xl sm:text-3xl mx-auto mb-2 sm:mb-3" />
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-plasma-500">{blogStats.averageReadTime}</h3>
              <p className="text-xs sm:text-sm text-gray-400">Avg Read Time</p>
            </div>
          </div>
        </div>
      </div>

      {/* Filter and Search Section */}
      <div className="py-8 sm:py-10 md:py-12 bg-void-950">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
          {/* Search Bar */}
          <div className="mb-6 sm:mb-8">
            <div className="relative max-w-xs sm:max-w-sm md:max-w-lg mx-auto">
              <Icon 
                icon="mdi:magnify" 
                className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-neon-500 text-lg sm:text-xl"
              />
              <input
                type="text"
                placeholder="Search articles, topics, technologies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-3 sm:py-4 bg-void-800/50 border border-void-700/50 rounded-xl text-sm sm:text-base text-white placeholder-gray-400 focus:outline-none focus:border-neon-500/50 focus:bg-void-800/70 transition-all duration-300"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 flex items-center gap-1.5 sm:gap-2 ${activeCategory === category.id
                    ? "bg-neon-500 text-white shadow-lg shadow-neon-500/30"
                    : "bg-void-800/30 text-gray-400 hover:bg-neon-500/20 hover:text-neon-500 border border-void-700/50"
                  }`}
              >
                <Icon icon={category.icon} className="text-sm sm:text-lg" />
                <span className="hidden sm:inline">{category.name}</span>
                <span className="sm:hidden">{category.name.split(' ')[0]}</span>
                <span className="bg-white/20 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full text-xs">
                  {category.count}
                </span>
              </button>
            ))}
          </div>

          {/* Results Count */}
          <div className="text-center mb-6 sm:mb-8">
            <p className="text-sm sm:text-base text-gray-400">
              Showing <span className="text-neon-500 font-semibold">{filteredBlogs.length}</span> articles
              {searchQuery && (
                <span> for "<span className="text-neon-500">{searchQuery}</span>"</span>
              )}
            </p>
          </div>
        </div>
      </div>

      {/* Enhanced Blog Grid */}
      <div className="py-12 sm:py-14 md:py-16 bg-gradient-to-b from-void-950 via-void-900 to-void-950">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredBlogs.map((blog, index) => {
              const author = getAuthor(blog.authorId);
              return (
                <Link
                  key={blog.id}
                  to={`/blogs/${blog.id}`}
                  ref={el => blogRefs.current[index] = el}
                  className="group block bg-gradient-to-br from-void-800/50 to-void-900/50 backdrop-blur-xl border border-void-700/50 rounded-2xl sm:rounded-3xl overflow-hidden hover:border-neon-500/30 transition-all duration-700 shadow-lg hover:shadow-neon-500/10 hover:-translate-y-2"
                >
                  {/* Featured Badge */}
                  {blog.isFeatured && (
                    <div className="absolute top-3 sm:top-4 left-3 sm:left-4 z-20 bg-neon-500 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
                      Featured
                    </div>
                  )}

                  {/* Image */}
                  <div className="relative overflow-hidden h-40 sm:h-44 md:h-48">
                    <img 
                      src={blog.image} 
                      alt={blog.title}
                      className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-void-950/80 via-transparent to-transparent" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                      <span className="bg-neon-500/20 backdrop-blur-sm text-neon-500 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium border border-neon-500/30">
                        {categories.find(cat => cat.id === blog.category)?.name}
                      </span>
                    </div>

                    {/* Reading Stats */}
                    <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 flex items-center gap-3 sm:gap-4">
                      <div className="flex items-center gap-1 text-white/80">
                        <Icon icon="mdi:clock-outline" className="text-xs sm:text-sm" />
                        <span className="text-xs sm:text-sm">{blog.readTime}</span>
                      </div>
                      <div className="flex items-center gap-1 text-white/80">
                        <Icon icon="mdi:eye-outline" className="text-xs sm:text-sm" />
                        <span className="text-xs sm:text-sm">{blog.views}</span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4 sm:p-6">
                    {/* Difficulty & Date */}
                    <div className="flex items-center justify-between mb-2 sm:mb-3">
                      <span className={`px-2 sm:px-3 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(blog.difficulty)}`}>
                        {blog.difficulty}
                      </span>
                      <span className="text-gray-400 text-xs sm:text-sm">
                        {blog.date.day} {blog.date.month}, {blog.date.year}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 group-hover:text-neon-500 transition-colors duration-300 line-clamp-2">
                      {blog.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-sm sm:text-base text-gray-400 mb-3 sm:mb-4 line-clamp-3 leading-relaxed">
                      {blog.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                      {blog.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span 
                          key={tagIndex}
                          className="bg-void-700/50 text-gray-300 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded text-xs border border-void-600/50"
                        >
                          {tag}
                        </span>
                      ))}
                      {blog.tags.length > 3 && (
                        <span className="bg-neon-500/20 text-neon-500 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded text-xs">
                          +{blog.tags.length - 3} more
                        </span>
                      )}
                    </div>

                    {/* Author & Stats */}
                    <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-void-700/50">
                      <div className="flex items-center gap-2 sm:gap-3">
                        <img 
                          src={author.avatar} 
                          alt={author.name}
                          className="w-7 h-7 sm:w-8 sm:h-8 rounded-full object-cover"
                        />
                        <div>
                          <p className="text-white font-medium text-xs sm:text-sm">{author.name}</p>
                          <p className="text-gray-400 text-xs hidden sm:block">{author.role}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2 sm:gap-3 text-gray-400">
                        <div className="flex items-center gap-1">
                          <Icon icon="mdi:comment-outline" className="text-xs sm:text-sm" />
                          <span className="text-xs sm:text-sm">{blog.comments}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Icon icon="mdi:star" className="text-xs sm:text-sm text-yellow-500" />
                          <span className="text-xs sm:text-sm">{blog.rating}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* No Results */}
          {filteredBlogs.length === 0 && (
            <div className="text-center py-12 sm:py-16">
              <Icon icon="mdi:magnify" className="text-4xl sm:text-5xl md:text-6xl text-gray-600 mx-auto mb-3 sm:mb-4" />
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-400 mb-1 sm:mb-2">No articles found</h3>
              <p className="text-sm sm:text-base text-gray-500">Try adjusting your search terms or category filter</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default index;
