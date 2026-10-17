import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import CalendarPage from './pages/CalendarPage.jsx';
import Directory from './pages/Directory.jsx';
import NewsList from './pages/NewsList.jsx';
import NewsArticle from './pages/NewsArticle.jsx';
import SearchPage from './pages/SearchPage.jsx';
import SiteMapPage from './pages/SiteMapPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import ContentPage from './pages/ContentPage.jsx';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="calendar" element={<CalendarPage />} />
        <Route path="directory" element={<Directory />} />
        <Route path="news" element={<NewsList />} />
        <Route path="news/:slug" element={<NewsArticle />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="site-map" element={<SiteMapPage />} />
        <Route path="contact" element={<ContactPage />} />
        {/* Every other page is data-driven from src/data/pages.js; unknown paths show the 404 view */}
        <Route path="*" element={<ContentPage />} />
      </Route>
    </Routes>
  );
}
