import { withBase } from '../utils';

export function ServiceEmoji({ kind }) {
  return <img className="service-emoji" src={withBase(`images/service-icons/${kind}.svg`)} alt="" width="200" height="190" loading="lazy" decoding="async" />;
}
