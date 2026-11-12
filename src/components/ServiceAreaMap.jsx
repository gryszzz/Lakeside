import { useState } from 'react';
import boundaries from '../content/service-counties.json';
import { serviceCounties } from '../content/service-areas';
import { business } from '../content/site';
import { withBase } from '../utils';

// Project the supplied Census county geometry into a local Mercator map.
const mercator = ([lon, lat]) => [lon * Math.PI / 180, -Math.log(Math.tan(Math.PI / 4 + lat * Math.PI / 360))];
const points = boundaries.features.flatMap(feature => feature.geometry.coordinates.flat()).map(mercator);
const xs = points.map(point => point[0]);
const ys = points.map(point => point[1]);
const extent = [Math.min(...xs), Math.min(...ys), Math.max(...xs), Math.max(...ys)];
const scale = Math.min(530 / (extent[2] - extent[0]), 420 / (extent[3] - extent[1]));
function project(coordinate) {
  const [x, y] = mercator(coordinate);
  return [300 + (x - (extent[0] + extent[2]) / 2) * scale, 240 + (y - (extent[1] + extent[3]) / 2) * scale];
}
const labelLocations = { Sussex: [-74.675, 41.18], Passaic: [-74.325, 41.055], Morris: [-74.57, 40.865], Warren: [-75.005, 40.79] };

export function ServiceAreaMap({ full = false }) {
  const [selected, setSelected] = useState('Sussex County');
  const countyEntries = Object.entries(serviceCounties);
  return (
    <section className={`section coverage-section ${full ? 'coverage-section--full' : ''}`} id="coverage">
      <div className="container">
        <div className="coverage-heading">
          <div><p className="eyebrow">{full ? 'Service Directory' : 'Local Service Area'}</p><h2>{full ? 'Explore Our Service Counties' : 'Remodeling Across Northern New Jersey'}</h2></div>
          <p>{full ? 'Lakeside Kitchen & Bath serves homeowners throughout Sussex, Morris, Passaic, and Warren Counties.' : 'Based in Sparta, we bring dependable kitchen and bathroom remodeling to nearby communities across four counties.'}</p>
        </div>
        <div className="coverage-layout">
          <div className="coverage-map">
            <div className="coverage-map__meta"><span>Northwest New Jersey</span><span>Service coverage</span></div>
            <svg viewBox="0 0 600 480" role="group" aria-label="Interactive map of Lakeside’s four New Jersey service counties" aria-describedby="coverage-map-description">
              <desc id="coverage-map-description">Select Sussex, Morris, Passaic, or Warren County to highlight the area. County outlines show Lakeside’s service region.</desc>
              {boundaries.features.map(feature => {
                const county = `${feature.properties.NAME} County`;
                const d = feature.geometry.coordinates.map(ring => ring.map((coordinate, index) => `${index ? 'L' : 'M'}${project(coordinate).map(value => value.toFixed(2)).join(' ')}`).join(' ') + ' Z').join(' ');
                const [x, y] = project(labelLocations[feature.properties.NAME]);
                return <g key={county}>
                  <path d={d} className={`coverage-map__county ${selected === county ? 'is-selected' : ''}`} role="button" tabIndex={0} aria-label={`Show towns in ${county}`} aria-pressed={selected === county} onClick={() => setSelected(county)} onKeyDown={event => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); setSelected(county); } }} />
                  <circle className="coverage-map__pin" cx={x} cy={y - 30} r="3.2" aria-hidden="true" />
                  <text x={x} y={y} textAnchor="middle" className="coverage-map__label" aria-hidden="true">{feature.properties.NAME}</text>
                </g>;
              })}
            </svg>
            <p className="coverage-map__hint"><span aria-hidden="true" />Select a county to highlight its service area</p>
          </div>
          <div className="coverage-details">
            <div className="coverage-tabs" aria-label="Choose a service county">
              {Object.keys(serviceCounties).map(county => <button key={county} type="button" aria-pressed={selected === county} className={selected === county ? 'is-selected' : ''} onClick={() => setSelected(county)}>{county.replace(' County', '')}</button>)}
            </div>
            <div className="coverage-town-panel" aria-live="polite" aria-atomic="true">
              <div className="coverage-town-panel__swap" key={selected}>
                <h3>{selected}</h3>
                <p className="coverage-town-label">Communities we serve</p>
                <ul>{serviceCounties[selected].map(town => <li key={town}>{town}</li>)}</ul>
              </div>
            </div>

            <div className="coverage-actions"><a className="button" href={business.phoneHref}>Call Ron · {business.phone}</a><a className="text-link" href={full ? '#coverage-directory' : withBase('service-area/')}>View all towns</a></div>
          </div>
        </div>
        {full && <div className="coverage-directory" id="coverage-directory" aria-label="Service area towns">{countyEntries.map(([county, towns]) => <article key={county} className={`coverage-directory__county ${selected === county ? 'is-selected' : ''}`}>
          <button type="button" className="coverage-directory__heading" aria-pressed={selected === county} onClick={() => setSelected(county)}><span>{county}</span></button>
          <ul>{towns.map(town => <li key={town}>{town}</li>)}</ul>
        </article>)}</div>}
      </div>
    </section>
  );
}
