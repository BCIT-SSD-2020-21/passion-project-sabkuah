import React, { useEffect, useState, useRef } from 'react';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl-csp';

const Map = (community) => {
  const mapContainer = useRef();
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(12);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: community ? community?.geometry.coordinates : [lng, lat],
      zoom: zoom,
    });

    // map.on('move', () => {
    //   setLng(map.getCenter().lng.toFixed(4));
    //   setLat(map.getCenter().lat.toFixed(4));
    //   setZoom(map.getZoom().toFixed(2));
    // });

    // Add pin to the map
    new mapboxgl.Marker()
      .setLngLat(community ? community?.geometry.coordinates : [lng, lat]) // community.geometry.coordinates
      .setPopup(
        new mapboxgl.Popup({ offset: 25 }).setHTML(
          `<h3>${community.title}</h3><p>${community.location}</p>`
        )
      )
      .addTo(map);

    return () => map.remove();
  }, []);

  return (
    <div>
      <div className='map-container' ref={mapContainer} />
    </div>
  );
};

const CommunityScreen = ({ community }) => {
  return (
    <div>
      <h1>{community?.title}</h1>
      <p>Description: {community?.description}</p>
      <p>Location: {community?.location}</p>

      {community && Map(community)}
    </div>
  );
};

export default CommunityScreen;
