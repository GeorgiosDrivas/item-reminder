export type mapControlInterface = {
  address: string | null;
};

export type mapInterface = {
  setAddress: React.Dispatch<React.SetStateAction<string | null>>;
  marker: { latitude: number; longitude: number } | null;
  setMarker: React.Dispatch<
    React.SetStateAction<{ latitude: number; longitude: number } | null>
  >;
};
