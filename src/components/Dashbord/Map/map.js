import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken =
  "pk.eyJ1IjoicmF2aS0xMjMiLCJhIjoiY2wxamIxZ3RpMG1tNTNybGQ0bGljenRseCJ9.peW8EX_OYEZd_x8C96pi4w";

export default function App() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      attributionControl: false,
      center: [lng, lat],
      zoom: zoom,
    });
  });

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on("move", () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });

  return (
    <div style={{ borderRadius: "15px", overflow: "hidden" }}>
      <div style={{ borderRadius: "15px" }} className="sidebar"></div>
      <div
        ref={mapContainer}
        style={{ borderRadius: "15px", height: "383px" }}
        className="map-container"
      />
    </div>
  );
}
