import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';
import { blogPostsData, blogCategories } from '../../../constant/data';

const Blog = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPosts = blogPostsData.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-slate-800">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-blue-500/8 rounded-full blur-3xl"></div>
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-8">
              <Icon icon="carbon:blog" className="w-5 h-5 text-accent-400 mr-3" />
              <span className="text-sm font-medium text-blue-100/90 tracking-wide uppercase">QUEST INFORMATION HUB Tech Blog</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-blue-100 mb-8 leading-tight">
              <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-500 bg-clip-text text-transparent">
                Latest
              </span>
              <br />
              <span className="text-blue-100/90">Insights</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100/70 leading-relaxed mb-8 max-w-3xl mx-auto">
              Explore the latest trends, technologies, and best practices in software development from Quest Information Hub experts
            </p>
            
            {/* Blog Stats */}
            <div className="flex items-center justify-center gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">50+</div>
                <div className="text-sm text-blue-200/60">Articles</div>
              </div>
              <div className="w-px h-12 bg-blue-500/20"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-400">12+</div>
                <div className="text-sm text-blue-200/60">Categories</div>
              </div>
              <div className="w-px h-12 bg-blue-500/20"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-100">10K+</div>
                <div className="text-sm text-blue-200/60">Readers</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="relative py-16">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 right-20 w-64 h-64 bg-primary-500/5 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-100 mb-4">Discover Articles</h2>
              <p className="text-lg text-blue-100/70">Search and filter through our comprehensive knowledge base</p>
            </div>
            
            {/* Search Bar */}
            <div className="relative mb-8">
              <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
                <Icon icon="carbon:search" className="w-5 h-5 text-white/60" />
              </div>
              <input
                type="text"
                placeholder="Search articles, topics, or technologies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-14 pr-6 py-4 bg-blue-900/20 backdrop-blur-sm border border-blue-500/20 rounded-xl text-blue-100 placeholder-blue-200/60 focus:outline-none focus:border-blue-400 transition-colors hover:bg-blue-800/20"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-3 justify-center mb-8">
              {blogCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-lg shadow-primary-500/25'
                      : 'bg-white/5 backdrop-blur-sm border border-white/10 text-white/80 hover:bg-white/10'
                  }`}
                >
                  <span className="flex items-center">
                    <Icon icon={category.icon} className="w-4 h-4 mr-2" />
                    {category.name}
                    <span className="ml-2 text-xs opacity-60">({category.count})</span>
                  </span>
                </button>
              ))}
            </div>
            
            {/* Results Count */}
            <div className="text-center">
              <p className="text-white/60">
                Showing <span className="text-primary-400 font-semibold">{filteredPosts.length}</span> articles
                {selectedCategory !== 'all' && <span> in <span className="text-accent-400 font-semibold">{blogCategories.find(cat => cat.id === selectedCategory)?.name}</span></span>}
                {searchTerm && <span> matching "<span className="text-accent-400 font-semibold">{searchTerm}</span>"</span>}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="relative py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <article
                key={post.id}
                className="group relative rounded-xl overflow-hidden transition-all duration-500 hover:scale-105 hover:-translate-y-2 cursor-pointer"
                style={{
                  background: 'linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255,255,255,0.1)'
                }}
                onClick={() => navigate(`/blogs/${post.id}`)}
              >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-accent-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Featured Badge */}
                {post.isFeatured && (
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 bg-accent-500 text-white text-xs font-bold rounded-full">
                      FEATURED
                    </span>
                  </div>
                )}

                {/* Content */}
                <div className="relative p-6">
                  {/* Date and Category */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-accent-400 font-medium">
                        {post.date.day} {post.date.month} {post.date.year}
                      </span>
                    </div>
                    <span className="px-3 py-1 bg-primary-500/10 text-primary-300 text-xs rounded-full border border-primary-500/20">
                      {post.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-xl font-bold text-white mb-4 group-hover:text-primary-200 transition-colors line-clamp-2">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-white/70 mb-6 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Author and Meta */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center">
                        <span className="text-xs font-bold text-white">
                          {post.author.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-white">{post.author}</div>
                        <div className="text-xs text-white/60">{post.readTime} read</div>
                      </div>
                    </div>
                    
                    <Icon 
                      icon="carbon:arrow-right" 
                      className="w-5 h-5 text-white/40 group-hover:text-accent-400 group-hover:translate-x-1 transition-all" 
                    />
                  </div>

                  {/* Tags */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {post.tags.slice(0, 2).map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="px-2 py-1 bg-white/5 text-white/60 text-xs rounded border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More */}
          {filteredPosts.length > 9 && (
            <div className="text-center mt-16">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-lg hover:from-primary-600 hover:to-primary-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl">
                <span className="relative z-10 flex items-center justify-center">
                  <Icon icon="carbon:add" className="w-5 h-5 mr-2" />
                  Load More Articles
                </span>
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="relative py-20 bg-gradient-to-b from-black via-primary-900/20 to-black">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-20 left-20 w-64 h-64 bg-accent-500/8 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-secondary-500/8 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-8">
              <Icon icon="carbon:email" className="w-5 h-5 text-accent-400 mr-3" />
              <span className="text-sm font-medium text-blue-100/90 tracking-wide">QUEST HUB NEWSLETTER</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Stay Updated with Tech Insights
            </h2>
            <p className="text-xl text-blue-100/70 mb-12 leading-relaxed">
              Subscribe to our newsletter for the latest insights, tutorials, and industry updates from Quest Information Hub experts
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto mb-12">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl text-white placeholder-white/60 focus:outline-none focus:border-primary-400 transition-colors hover:bg-white/10"
              />
              <button className="px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-bold rounded-xl hover:from-primary-600 hover:to-accent-600 transition-all duration-300 hover:scale-105 shadow-lg shadow-primary-500/25">
                <span className="flex items-center justify-center">
                  <Icon icon="carbon:send" className="w-5 h-5 mr-2" />
                  Subscribe
                </span>
              </button>
            </div>
            
            {/* Newsletter Benefits */}
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl">
                <Icon icon="carbon:idea" className="w-8 h-8 text-primary-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Weekly Insights</h3>
                <p className="text-white/60 text-sm">Latest trends and technologies</p>
              </div>
              <div className="p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl">
                <Icon icon="carbon:code" className="w-8 h-8 text-accent-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Expert Tutorials</h3>
                <p className="text-white/60 text-sm">Step-by-step guides and tips</p>
              </div>
              <div className="p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl">
                <Icon icon="carbon:rocket" className="w-8 h-8 text-secondary-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Industry Updates</h3>
                <p className="text-white/60 text-sm">News from software development</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
