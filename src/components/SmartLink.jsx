import { Link } from 'react-router-dom';

/** Internal paths use the router; http(s)/mailto/tel links render a normal anchor (external ones open in a new tab). */
export default function SmartLink({ to, children, ...rest }) {
  if (/^(https?:|mailto:|tel:)/.test(to)) {
    const external = to.startsWith('http');
    return (
      <a
        href={to}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...rest}
      >
        {children}
        {external && <span className="sr-only"> (opens in a new tab)</span>}
      </a>
    );
  }
  return (
    <Link to={to} {...rest}>
      {children}
    </Link>
  );
}
