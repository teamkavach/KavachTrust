import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AppLayout } from '../components/layout/AppLayout';
import HomeNew from '../pages/HomeNew';

// Pages - lazy load for better performance (HomeNew is static for instant first load)
const ProgramsNew = React.lazy(() => import('../pages/ProgramsNew'));
const GetInvolvedNew = React.lazy(() => import('../pages/GetInvolvedNew'));
const AboutNew = React.lazy(() => import('../pages/AboutNew'));
const ImpactNew = React.lazy(() => import('../pages/ImpactNew'));
const Gallery = React.lazy(() => import('../pages/Gallery'));
const Donate = React.lazy(() => import('../pages/Donate'));
const Stories = React.lazy(() => import('../pages/Stories'));
const StoryDetail = React.lazy(() => import('../pages/StoryDetail'));
const FAQ = React.lazy(() => import('../pages/FAQ'));
const Contact = React.lazy(() => import('../pages/Contact'));

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { path: '/', element: <HomeNew /> },
      { path: '/programs', element: <ProgramsNew /> },
      { path: '/get-involved', element: <GetInvolvedNew /> },
      { path: '/about', element: <AboutNew /> },
      { path: '/impact', element: <ImpactNew /> },
      { path: '/gallery', element: <Gallery /> },
      { path: '/donate', element: <Donate /> },
      { path: '/stories', element: <Stories /> },
      { path: '/stories/:slug', element: <StoryDetail /> },
      { path: '/faq', element: <FAQ /> },
      { path: '/contact', element: <Contact /> },
    ],
  },
]);

export const AppRouter: React.FC = () => {
  return (
    <React.Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-background">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
            <p className="text-secondary-600">Loading...</p>
          </div>
        </div>
      }
    >
      <RouterProvider router={router} />
    </React.Suspense>
  );
};
