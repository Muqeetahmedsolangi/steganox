import { useEffect } from 'react';

const SEOHead = ({ 
  title, 
  description, 
  keywords, 
  image, 
  url,
  type = 'website',
  author = 'Q HUB INFORMATION'
}) => {
  useEffect(() => {
    // Update document title
    document.title = title ? `${title} | Q HUB INFORMATION` : 'Q HUB INFORMATION - Enterprise Software Solutions';

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description || 'Transform your business with cutting-edge software solutions from Q HUB INFORMATION. Expert development in web, mobile, cloud, AI/ML, and enterprise applications.');
    }

    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords || 'software development, web development, mobile apps, cloud solutions, AI ML, enterprise software, custom development');
    }

    // Open Graph tags
    const updateOrCreateMeta = (property, content) => {
      let meta = document.querySelector(`meta[property="${property}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    updateOrCreateMeta('og:title', title || 'Q HUB INFORMATION - Enterprise Software Solutions');
    updateOrCreateMeta('og:description', description || 'Transform your business with cutting-edge software solutions');
    updateOrCreateMeta('og:type', type);
    updateOrCreateMeta('og:url', url || window.location.href);
    updateOrCreateMeta('og:image', image || '/favicon.png');
    updateOrCreateMeta('og:site_name', 'Q HUB INFORMATION');

    // Twitter Card tags
    const updateOrCreateTwitterMeta = (name, content) => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    updateOrCreateTwitterMeta('twitter:card', 'summary_large_image');
    updateOrCreateTwitterMeta('twitter:title', title || 'Q HUB INFORMATION');
    updateOrCreateTwitterMeta('twitter:description', description || 'Enterprise Software Solutions');
    updateOrCreateTwitterMeta('twitter:image', image || '/favicon.png');
    updateOrCreateTwitterMeta('twitter:creator', '@qhubinformation');

    // Additional meta tags
    updateOrCreateTwitterMeta('author', author);
    updateOrCreateTwitterMeta('robots', 'index, follow');

  }, [title, description, keywords, image, url, type, author]);

  return null; // This component doesn't render anything
};

export default SEOHead; 