import { news } from '../data/news.js';
import PageShell from '../components/PageShell.jsx';
import NewsCard from '../components/NewsCard.jsx';

export default function NewsList() {
  return (
    <PageShell path="/news" title="News & Announcements" intro="Stories, updates and announcements from around BrainSmart School." trail={[]} art="library">
      <div className="news-grid two">
        {news.map((n) => (
          <NewsCard key={n.slug} item={n} />
        ))}
      </div>
    </PageShell>
  );
}
