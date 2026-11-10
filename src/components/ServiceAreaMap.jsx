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
const sparta = project([-74.63849, 41.03343]);

export function ServiceAreaMap({ full = false }) {
  const [selected, setSelected] = useState('Sussex County');
  return (
    <section className={`section coverage-section ${full ? 'coverage-section--full' : ''}`} id="coverage">
      <div className="container">
        <div className="coverage-heading">
          <div><p className="eyebrow">Areas We Serve</p><h2>Proudly Serving Northern New Jersey</h2></div>
          <p>Proudly serving homeowners throughout Sussex County, Morris County, Passaic County, and Warren County. Select a county to view its towns.</p>
        </div>
        <div className="coverage-layout">
          <div className="coverage-map">
            <div className="coverage-map__meta"><span>Northern New Jersey</span><span>Service area</span></div>
            <svg viewBox="0 0 600 480" role="group" aria-label="Interactive map of Lakeside’s four New Jersey service counties" aria-describedby="coverage-map-description">
              <desc id="coverage-map-description">Select Sussex, Morris, Passaic, or Warren County to see its towns. County outlines use the geographic boundary data supplied with this website. Sparta marks the business’s home town.</desc>
              {boundaries.features.map(feature => {
                const county = `${feature.properties.NAME} County`;
                const d = feature.geometry.coordinates.map(ring => ring.map((coordinate, index) => `${index ? 'L' : 'M'}${project(coordinate).map(value => value.toFixed(2)).join(' ')}`).join(' ') + ' Z').join(' ');
                const [x, y] = project(labelLocations[feature.properties.NAME]);
                return <g key={county}>
                  <path d={d} className={`coverage-map__county ${selected === county ? 'is-selected' : ''}`} role="button" tabIndex={0} aria-label={`Show towns in ${county}`} aria-pressed={selected === county} onClick={() => setSelected(county)} onKeyDown={event => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); setSelected(county); } }} />
                  <text x={x} y={y} textAnchor="middle" className="coverage-map__label" aria-hidden="true">{feature.properties.NAME}</text>
                </g>;
              })}
              <g className="coverage-map__home" aria-hidden="true"><circle cx={sparta[0]} cy={sparta[1]} r="5" /><text x={sparta[0] + 10} y={sparta[1] + 4}>Sparta</text></g>
            </svg>
            <p className="coverage-map__hint">Select a county on the map or use the county buttons.</p>
          </div>
          <div className="coverage-details">
            <div className="coverage-tabs" aria-label="Choose a service county">
              {Object.keys(serviceCounties).map(county => <button key={county} type="button" aria-pressed={selected === county} className={selected === county ? 'is-selected' : ''} onClick={() => setSelected(county)}>{county.replace(' County', '')}</button>)}
            </div>
            <div className="coverage-town-panel" aria-live="polite" aria-atomic="true">
              <p className="eyebrow">Kitchen & bath remodeling</p><h3>{selected}</h3>
              <ul>{serviceCounties[selected].map(town => <li key={town}>{town}</li>)}</ul>
            </div>
            <p className="coverage-note">Have a project nearby? Share your town and renovation plans with Ron.</p>
            <div className="coverage-actions"><a className="button" href={business.phoneHref}>Call Ron · {business.phone}</a>{!full && <a className="text-link" href={withBase('service-area/')}>View all service areas</a>}</div>
          </div>
        </div>
        {full && <div className="coverage-all-towns">{Object.entries(serviceCounties).map(([county, towns]) => <details key={county}><summary>{county} <span>{towns.length} towns</span></summary><ul>{towns.map(town => <li key={town}>{town}</li>)}</ul></details>)}</div>}
      </div>
    </section>
  );
}
