declare module "react-mapbox-autocomplete" {
  export interface MapboxAutocompleteProps {
    publicKey: string;
    onSuggestionSelect: (result: string) => void;
    placeholder?: string;
    language?: string;
    country?: string;
    types?: string[];
    className?: string;
  }

  export const MapboxAutocomplete: React.FC<MapboxAutocompleteProps>;
}
