export const displayMap = (locations) => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoiZ293dGhhbTEzIiwiYSI6ImNsMnB1M2FmeDA1emgzanBiMnlycjAxcGgifQ.nPQCFHtsZoeZ2OCXSc3MTg';

  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/gowtham13/cl2pu6s2w006i14lp4ivlfa6m',
    scrollZoom: false,
    // center: [-118.113491, 34.111745],
    // zoom: 10,
    // interactive: false
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach((loc) => {
    // Create marker
    const el = document.createElement('div');
    el.className = 'marker';

    // Add marker
    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom',
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    // Add popup
    new mapboxgl.Popup({
      offset: 30,
    })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
      .addTo(map);

    // Extend map bounds to include current location
    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 100,
      right: 100,
    },
  });
};
