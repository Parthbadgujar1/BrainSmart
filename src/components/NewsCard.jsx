import { Link } from 'react-router-dom';
import { formatDate } from '../data/news.js';
import Icon from './Icon.jsx';
import Art from './art/Art.jsx';

export default function NewsCard({ item }) {
  return (
    <article className="news-card">
      <Link to={`/news/${item.slug}`} className={`news-thumb tone-${item.tone}`} aria-hidden="true" tabIndex={-1}>
        {item.image ? <img src={item.image} alt="" loading="lazy" /> : <Art name={item.art} />}
      </Link>
      <div className="news-card-body">
        <time dateTime={item.date}>{formatDate(item.date)}</time>
        <h3>
          <Link to={`/news/${item.slug}`}>{item.title}</Link>
        </h3>
        <p>{item.teaser}</p>
        <Link to={`/news/${item.slug}`} className="read-more">
          Read More <span className="sr-only">about {item.title}</span> <Icon name="arrow" size={16} />
        </Link>
      </div>
    </article>
  );
}
