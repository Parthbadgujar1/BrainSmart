import { Link, useParams } from 'react-router-dom';
import { news, formatDate } from '../data/news.js';
import PageShell from '../components/PageShell.jsx';

export default function NewsArticle() {
  const { slug } = useParams();
  const item = news.find((n) => n.slug === slug);

  if (!item) {
    return (
      <PageShell path="/news" title="Story not found" trail={[]}>
        <Link to="/news" className="btn btn-primary">
          Back to all news
        </Link>
      </PageShell>
    );
  }

  return (
    <PageShell path={`/news/${slug}`} title={item.title} art={item.art} trail={[{ label: 'News', to: '/news' }, { label: item.title, to: `/news/${slug}` }]}>
      <time className="article-date" dateTime={item.date}>
        {formatDate(item.date)}
      </time>
      <div className="blocks">
        {item.body.map((para) => (
          <p key={para}>{para}</p>
        ))}
      </div>
      <Link to="/news" className="btn btn-outline">
        ← Back to all news
      </Link>
    </PageShell>
  );
}
