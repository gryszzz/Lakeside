import { withBase } from '../utils';

// Add Ron's verified profile URLs here when he supplies them.
export const brandProfiles = { google: null, instagram: null, facebook: null };

function SocialProfile({ name, asset, profile }) {
  const content = <><span className="social-profile__icon"><img src={withBase(`images/brands/${asset}.svg`)} alt="" width="24" height="24" /></span><span className="social-profile__copy"><strong>{name}</strong><small>{profile ? `Follow Lakeside on ${name}` : 'Profile link coming soon'}</small></span><span className="connection-status">{profile ? 'Visit profile' : 'Coming soon'}</span></>;
  return profile ? <a className="social-profile" href={profile} target="_blank" rel="noreferrer">{content}</a> : <div className="social-profile">{content}</div>;
}

export function GoogleReviewPreview({ showPageLink = false }) {
  return (<div className="google-review-preview">
        <div className="google-review-preview__header"><div className="google-review-brand"><img src={withBase('images/brands/google.svg')} alt="Google" width="92" height="30" /><span>Reviews</span></div><span className="connection-status">Coming soon</span></div>
        <h3>Google Reviews</h3><p>Customer reviews will be added here.</p>
        <div className="review-placeholder-grid" aria-label="Customer review placeholders"><div className="review-placeholder"><span>Customer review</span><small>Coming soon</small></div><div className="review-placeholder"><span>Customer review</span><small>Coming soon</small></div></div>
        {showPageLink && <a className="text-link" href={withBase('reviews/')}>Reviews</a>}
        {brandProfiles.google && <a className="text-link" href={brandProfiles.google} target="_blank" rel="noreferrer">Read reviews on Google</a>}
      </div>);
}

export function BrandConnections() {
  return <section className="section brand-connections" id="reviews" aria-labelledby="connections-title"><div className="container">
    <div className="connection-heading"><div><p className="eyebrow">Lakeside Kitchen & Bath LLC</p><h2 id="connections-title">Google Reviews & Social</h2></div><p>Reviews and social profile links coming soon.</p></div>
    <div className="connection-grid">
      <GoogleReviewPreview showPageLink />
      <div className="social-preview"><p className="eyebrow">Stay connected</p><h3>Instagram & Facebook</h3><p>Profile links coming soon.</p><div className="social-preview__profiles"><SocialProfile name="Instagram" asset="instagram" profile={brandProfiles.instagram} /><SocialProfile name="Facebook" asset="facebook" profile={brandProfiles.facebook} /></div><p className="social-preview__note">Lakeside’s social profiles will be linked here soon.</p></div>
    </div>
  </div></section>;
}
