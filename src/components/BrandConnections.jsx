import { business } from '../content/site';
import { withBase } from '../utils';

// Google is connected; social links remain placeholders until Ron supplies them.
export const brandProfiles = { google: business.googleProfile.profileUrl, instagram: null, facebook: null };

function SocialProfile({ name, asset, profile }) {
  const content = <><span className="social-profile__icon"><img src={withBase(`images/brands/${asset}.svg`)} alt="" width="24" height="24" /></span><span className="social-profile__copy"><strong>{name}</strong><small>{profile ? `Follow Lakeside on ${name}` : 'Profile link coming soon'}</small></span><span className="connection-status">{profile ? 'Visit profile' : 'Coming soon'}</span></>;
  return profile ? <a className="social-profile" href={profile} target="_blank" rel="noreferrer">{content}</a> : <div className="social-profile">{content}</div>;
}

export function ReviewsLocationMap() {
  return (
    <div className="reviews-location">
      <iframe
        className="reviews-location__map"
        title={`${business.name} on Google Maps`}
        src={business.googleProfile.reviewsMapEmbedUrl}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  );
}

export function GoogleReviewPreview({ showPageLink = false }) {
  return <div className="google-review-preview">
    <div className="google-review-preview__header"><h3 className="google-review-brand"><img src={withBase('images/brands/google.svg')} alt="Google" width="92" height="30" /><span>Reviews</span></h3><span className="connection-status">Coming soon</span></div>
    <p>Customer reviews will be added here.</p>
    <div className="review-placeholder-grid" aria-label="Customer review placeholders"><div className="review-placeholder"><span>Customer review</span><small>Coming soon</small></div><div className="review-placeholder"><span>Customer review</span><small>Coming soon</small></div></div>
    <div className="google-review-actions">
      {business.googleProfile.writeReviewUrl && <a className="button google-review-primary" href={business.googleProfile.writeReviewUrl} target="_blank" rel="noreferrer">Leave a review</a>}
      {showPageLink && <a className="google-review-secondary" href={withBase('reviews/')}>Reviews page</a>}
    </div>
  </div>;
}

export function BrandConnections() {
  return <section className="section brand-connections" id="reviews" aria-labelledby="connections-title"><div className="container">
    <div className="connection-heading"><div><p className="eyebrow">Lakeside Kitchen & Bath LLC</p><h2 id="connections-title">Google Reviews & Social</h2></div><p>Find Lakeside on Google. Customer reviews and social profile links coming soon.</p></div>
    <ReviewsLocationMap />
    <div className="connection-grid">
      <GoogleReviewPreview showPageLink />
      <div className="social-preview"><p className="eyebrow">Stay connected</p><h3>Instagram & Facebook</h3><p>Profile links coming soon.</p><div className="social-preview__profiles"><SocialProfile name="Instagram" asset="instagram" profile={brandProfiles.instagram} /><SocialProfile name="Facebook" asset="facebook" profile={brandProfiles.facebook} /></div><p className="social-preview__note">Lakeside’s social profiles will be linked here soon.</p></div>
    </div>
  </div></section>;
}
