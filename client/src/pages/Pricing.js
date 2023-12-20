import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

import 'mapbox-gl/dist/mapbox-gl.css';

const Pricing = () => {
  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoiaGltYW50aGExMTY4MSIsImEiOiJjbHE2NTZtenUwcGw0MmpsbzBxNGFhY2xhIn0.byhwRJA8e5IAqtNL_-MYqQ'; // Replace with your Mapbox access token

    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/light-v11',
      center: [-96, 37.8],
      zoom: 3,
    });

    const geojson = {
      type: 'FeatureCollection',
      features: [
        {
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [-77.032, 38.913],
          },
          properties: {
            title: 'Mapbox',
            description: 'Washington, D.C.',
          },
        },
        {
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [-122.414, 37.776],
          },
          properties: {
            title: 'Mapbox',
            description: 'San Francisco, California',
          },
        },
      ],
    };

    // add markers to map
    geojson.features.forEach((feature) => {
      // create a HTML element for each feature
      const el = document.createElement('div');
      el.className = 'marker';

      // make a marker for each feature and add to the map
      new mapboxgl.Marker(el).setLngLat(feature.geometry.coordinates).addTo(map);
    });

    // Clean up the map on unmount
    return () => map.remove();
  }, []);

  return <div id="map" style={{ width: '100%', height: '100vh' }} />;
};

export default Pricing;
