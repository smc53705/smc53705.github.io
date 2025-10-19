export type Collectible = {
  id: number;
  created_at: number;
  media_type: "show" | "movie" | "mini-series" | "book" | "video game";
  format: "digital" | "dvd" | "vhs" | "bluray" | "snes";
  number_of_seasons_owned: number | null;
  country_of_origin: string | null;
  complete: boolean | null;
  image_source: string | null;
  title: string;
  release_year: number;
  region: string | null;
  number_of_physical_media_components: number | null;
  digital_source_location: "Amazon" | "Vudu" | "Google Play" | "Unknown" | null;
  notes: string | null;
};
