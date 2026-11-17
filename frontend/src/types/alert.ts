import type {
	Feature,
	FeatureCollection,
	Point,
	LineString,
	Polygon,
} from "geojson";

export type Severity = "notice" | "advisory" | "caution" | "warning" | "danger";

export type AlertCategory =
	| "traffic"
	| "weather"
	| "public_safety"
	| "utilities"
	| "community_event"
	| "general";

export interface AlertProperties {
	id: number;
	title: string;
	description: string;
	issuer: string;
	category: AlertCategory;
	severity: Severity;
	instructions: string;
	starts_at: string;
	ends_at: string | null;
}

export type AlertGeometry = Point | LineString | Polygon;
export type AlertFeature = Feature<AlertGeometry, AlertProperties>;
export type AlertCollection = FeatureCollection<AlertGeometry, AlertProperties>;
