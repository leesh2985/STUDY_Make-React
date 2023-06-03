import { useEffect, useLayoutEffect, useMemo } from "react";
import { PlaceType } from "./mapTypes";
import { useMap } from "../hooks/useMap";

interface MapMarkerProps {
  place: PlaceType;
  showInfo?: boolean;
}

const MapMarker = (props: MapMarkerProps) => {
  const map = useMap();

  const marker = useMemo(() => {
    const marker = new kakao.maps.Marker({
      position: props.place.position,
    });
    marker.setMap(map);
    return marker;
  }, []);

  useLayoutEffect(() => {
    marker.setMap(map); //지도 위 마커를표시

    return () => {
      marker.setMap(null);
    };
  }, [map]);

  useEffect(() => {
    // useLayoutEffect(() => {marker.setMap(map); 밑에 적어서 오류 생겼었음
    if (props.showInfo) {
      console.log("props.place.title");
      return;
    }

    // 선택 해제
  }, [props.showInfo]);

  return <></>;
};

export default MapMarker;
