import type { AlertCollection } from "../types/alert";

export const mockAlerts: AlertCollection = {
	type: "FeatureCollection",
	features: [
		{
			type: "Feature",
			geometry: {
				type: "Point",
				coordinates: [-74.2906094, 41.0019405],
			},
			properties: {
				id: 1,
				title: "Holiday Tree Lighting",
				description: "Holiday tree lighting at the library",
				issuer: "PLPD",
				category: "community_event",
				severity: "notice",
				instructions: "",
				starts_at: "2026-12-05T23:00:00-05:00",
				ends_at: "2026-12-06T00:00:00-05:00",
			},
		},
		{
			type: "Feature",
			geometry: {
				type: "LineString",
				coordinates: [
					[-74.290176, 41.0006878],
					[-74.2905112, 41.0016306],
					[-74.2911307, 41.0025044],
					[-74.2918011, 41.004068],
					[-74.2913797, 41.0064842],
				],
			},
			properties: {
				id: 2,
				title: "Holiday Stroll",
				description: "Holiday Stroll Celebration",
				issuer: "PLPD",
				category: "traffic",
				severity: "notice",
				instructions:
					"",
				starts_at: "2026-12-05T19:00:00-05:00",
				ends_at: "2026-12-06T00:00:00-05:00",
			},
		},
		{
			type: "Feature",
			geometry: {
				type: "Polygon",
				coordinates: [
					[
						[-74.287586, 40.9960487],
						[-74.2826538, 40.9973292],
						[-74.2789566, 40.9927548],
						[-74.2857565, 40.9908785],
						[-74.2906756, 40.9908785],
						[-74.287586, 40.9960487],
					],
				],
			},
			properties: {
				id: 3,
				title: "Boil Water Advisory",
				description: "Water main service for south end of town",
				issuer: "PLMUA",
				category: "utilities",
				severity: "advisory",
				instructions:
					"Due to water main service, please boil water before use. Avoid drinking water cooking, brushing teeth, and ice",
				starts_at: "2026-11-24T12:00:00-05:00",
				ends_at: null,
			},
		},
		{
			type: "Feature",
			geometry: {
				type: "Point",
				coordinates: [-74.2775736, 41.0066929],
			},
			properties: {
				id: 4,
				title: "Fire Alarm",
				description: "Fire alarm activation",
				issuer: "PLFD",
				category: "public_safety",
				severity: "caution",
				instructions:
					"Avoid area. Allow emergency operations to continue",
				starts_at: "2026-11-15T12:00:00-05:00",
				ends_at: "2026-11-16T00:00:00-05:00",
			},
		},
	],
};
