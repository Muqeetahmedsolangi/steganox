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
    index: true,
    path: 'about-us',
    Element: lazy(() => import('../views/website/about')),
  },
  {
    key: 'services',
    index: true,
    path: 'services',
    Element: lazy(() => import('../views/website/services')),
  },
  {
    key: 'service-detail',
    index: false,
    path: 'service/:id',
    Element: lazy(() => import('../views/website/services/ServiceDetail')),
  },
  {
    key: 'case-studies',
    index: true,
    path: 'case-studies',
    Element: lazy(() => import('../views/website/case-studies')),
  },
  {
    key: 'case-study-detail',
    index: false,
    path: 'case-studies/:id',
    Element: lazy(() => import('../views/website/case-studies/CaseStudyDetail')),
  },
  {
    key: 'case-study-detail-alt',
    index: false,
    path: 'case-study/:id',
    Element: lazy(() => import('../views/website/case-studies/CaseStudyDetail')),
  },
  {
    key: 'blogs',
    index: true,
    path: 'blogs',
    Element: lazy(() => import('../views/website/blogs')),
  },
  {
    key: 'blog-detail',
    index: false,
    path: 'blogs/:id',
    Element: lazy(() => import('../views/website/blogs/BlogDetail')),
  },
  {
    key: 'contact-us',
    index: true,
    path: 'contact-us',
    Element: lazy(() => import('../views/website/contact')),
  },
  {
    key: 'portfolio',
    index: true,
    path: 'portfolio',
    Element: lazy(() => import('../views/website/portfolio')),
  },
];

export default websiteRoutes;
