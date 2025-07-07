import { lazy } from 'react';

const websiteRoutes = [
  {
    key: 'home',
    index: true,
    path: '',
    Element: lazy(() => import('../views/website/Home')),
  },
  {
    key: 'about',
    path: 'about-us',
    Element: lazy(() => import('../views/website/about')),
  },
  {
    key: 'services',
    path: 'services',
    Element: lazy(() => import('../views/website/services')),
  },
  {
    key: 'service-detail',
    path: 'service/:id',
    Element: lazy(() => import('../views/website/services/ServiceDetail')),
  },
  {
    key: 'case-studies',
    path: 'case-studies',
    Element: lazy(() => import('../views/website/case-studies')),
  },
  {
    key: 'case-study-detail',
    path: 'case-studies/:id',
    Element: lazy(() => import('../views/website/case-studies/CaseStudyDetail')),
  },
  {
    key: 'case-study-detail-alt',
    path: 'case-study/:id',
    Element: lazy(() => import('../views/website/case-studies/CaseStudyDetail')),
  },
  {
    key: 'blogs',
    path: 'blogs',
    Element: lazy(() => import('../views/website/blogs')),
  },
  {
    key: 'blog-detail',
    path: 'blogs/:id',
    Element: lazy(() => import('../views/website/blogs/BlogDetail')),
  },
  {
    key: 'contact-us',
    path: 'contact-us',
    Element: lazy(() => import('../views/website/contact')),
  },
  {
    key: 'portfolio',
    path: 'portfolio',
    Element: lazy(() => import('../views/website/portfolio')),
  },
  {
    key: 'portfolio-detail',
    path: 'portfolio/:id',
    Element: lazy(() => import('../views/website/portfolio/ProjectDetail')),
  },
];

export default websiteRoutes;
