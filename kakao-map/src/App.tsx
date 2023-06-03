import { useState } from "react";
import DynamicMap from "./Map/DynamicMap";
import KakaoMapScriptLoader from "./Map/KakaoMapScriptLoader";
import SearchLocation from "./Map/SearchLocation";
import { PlaceType } from "./Map/mapTypes";
import MapMarkerController from "./Map/MapMarkerController";

const App = () => {
  const [places, setPlaces] = useState<PlaceType[]>([]);
  const [selectedPlaceId, setSelectedPlaceId] = useState("");

  return (
    <KakaoMapScriptLoader>
      <DynamicMap>
        <MapMarkerController
          places={places}
          selectedPlaceId={selectedPlaceId}
        />
        <SearchLocation
          onUpdatePlaces={(places) => {
            setPlaces(places);
          }}
          onSelect={(placeId) => {
            setSelectedPlaceId(placeId);
          }}
        />
      </DynamicMap>
      {/* <SearchLocation />한개 더 넣어줬음;; */}
    </KakaoMapScriptLoader>
  );
};

export default App;
