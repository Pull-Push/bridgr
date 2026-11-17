import { useEffect, useRef } from "react";
import "maplibre-gl/dist/maplibre-gl.css";
import { MapLibreMap, setWorkerUrl, NavigationControl } from "maplibre-gl";
import workerUrl from "maplibre-gl/dist/maplibre-gl-worker.mjs?worker&url";
setWorkerUrl(workerUrl);

function MapView() {
	const mapContainer = useRef<HTMLDivElement | null>(null);
	const map = useRef<MapLibreMap | null>(null);
	useEffect(() => {
		if (map.current || !mapContainer.current) return;
		map.current = new MapLibreMap({
			container: mapContainer.current,
			style: "https://tiles.openfreemap.org/styles/liberty",
			center: [-74.292, 40.992],
			zoom: 11,
		});
		map.current.addControl(
			new NavigationControl({
				visualizePitch: true,
			}),
			"top-right",
		);

		return () => {
			map.current?.remove();
			map.current = null;
		};
	}, []);
	return <div ref={mapContainer} className="map-container"></div>;
}

export default MapView;
