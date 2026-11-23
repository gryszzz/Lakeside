import { business } from '../content/site';
import { withBase } from '../utils';

// Google is connected; social links remain placeholders until Ron supplies them.
export const brandProfiles = { google: business.googleProfile.profileUrl, instagram: null, facebook: null };

function SocialProfile({ name, asset, profile }) {
  const content = <><span className="social-profile__icon"><img src={withBase(`images/brands/${asset}.svg`)} alt="" width="24" height="24" /></span><span className="social-profile__copy"><strong>{name}</strong><small>{profile ? `Follow Lakeside on ${name}` : 'Profile link coming soon'}</small></span><span className="connection-status">{profile ? 'Visit profile' : 'Coming soon'}</span></>;
  return profile ? <a className="social-profile" href={profile} target="_blank" rel="noreferrer">{content}</a> : <div className="social-profile">{content}</div>;
}

export function ReviewsLocationMap() {
  const { rating, reviewCountLabel, readReviewsUrl, reviewsMapEmbedUrl } = business.googleProfile;
  const hasRating = Number.isFinite(rating);

  return (
    <div className="reviews-location">
      <iframe
        className="reviews-location__map"
        title={`${business.name} on Google Maps`}
        src={reviewsMapEmbedUrl}
        loading="lazy"
        tabIndex={-1}
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
      <div className="reviews-location__card">
        <h3>
          <a className="reviews-location__title-link" href={business.mapUrl} target="_blank" rel="noreferrer">
            {business.name}
          </a>
        </h3>
        <div className="reviews-location__rating">
          {hasRating && <span aria-label={`Google rating: ${rating} out of 5`}>{rating.toFixed(1)}</span>}
          <span className="reviews-location__star" aria-hidden="true">★</span>
          <a
            href={readReviewsUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={reviewCountLabel ? undefined : '0 Google reviews. View Google listing'}
          >
            {reviewCountLabel || '(0)'}
            <svg className="reviews-location__info-icon" aria-hidden="true" width="14" height="14" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="8" r="6.25" stroke="currentColor" strokeWidth="1.5" />
              <path d="M8 7.5v3.5" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="8" cy="5.25" r=".75" fill="currentColor" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export function GoogleReviewPreview({ showPageLink = false }) {
  return <div className="google-review-preview">
    <div className="google-review-preview__header"><h3 className="google-review-brand"><img src={withBase('images/brands/google.svg')} alt="Google" width="92" height="30" /><span>Reviews</span></h3></div>
    <ul className="review-placeholder-grid" aria-label="Customer review placeholders">
      <li>Customer review</li>
      <li>Customer review</li>
    </ul>
    <div className="google-review-actions">
      {business.googleProfile.writeReviewUrl && <a className="button google-review-primary" href={business.googleProfile.writeReviewUrl} target="_blank" rel="noreferrer">Leave a review</a>}
      {showPageLink && <a className="google-review-secondary" href={withBase('reviews/')}>Reviews page</a>}
    </div>
  </div>;
}

export function BrandConnections() {
  return <section className="section brand-connections" id="reviews" aria-labelledby="connections-title"><div className="container">
    <div className="connection-heading"><div><p className="eyebrow">Lakeside Kitchen & Bath LLC</p><h2 id="connections-title">Google Reviews & Social</h2></div><p>Find Lakeside on Google and leave a review.</p></div>
    <ReviewsLocationMap />
    <div className="connection-grid">
      <GoogleReviewPreview showPageLink />
      <div className="social-preview"><p className="eyebrow">Stay connected</p><h3>Instagram & Facebook</h3><p>Profile links coming soon.</p><div className="social-preview__profiles"><SocialProfile name="Instagram" asset="instagram" profile={brandProfiles.instagram} /><SocialProfile name="Facebook" asset="facebook" profile={brandProfiles.facebook} /></div><p className="social-preview__note">Lakeside’s social profiles will be linked here soon.</p></div>
    </div>
  </div></section>;
}
