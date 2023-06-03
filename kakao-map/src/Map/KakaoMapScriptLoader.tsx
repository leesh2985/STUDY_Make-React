import { ReactNode, useEffect, useState } from "react";

const KAKAO_MAP_SCRIPT_ID = "kakao-map-script";
const KAKAO_MAP_APP_KEY_ID = "34c81e1240129e3e4834f3d7ec5e7752";

interface KakaoMapScriptLoaderProps {
  children: ReactNode;
}

const KakaoMapScriptLoader = (props: KakaoMapScriptLoaderProps) => {
  const [mapScriptLoaded, setMapScriptLoaded] = useState(false);
  useEffect(() => {
    const mapScript = document.getElementById(KAKAO_MAP_SCRIPT_ID);

    if (mapScript && !window.kakao) {
      return;
    }

    // <script>
    const script = document.createElement("script");
    script.id = KAKAO_MAP_SCRIPT_ID;
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_MAP_APP_KEY_ID}&libraries=services&autoload=false`;
    script.onload = () => {
      window.kakao.maps.load(() => {
        // TODO: 성공
        setMapScriptLoaded(true);
      });
    };
    script.onerror = () => {
      // TODO: 실패
      setMapScriptLoaded(false);
    };

    document.getElementById("root")?.appendChild(script);
  }, []);

  return (
    <>
      {mapScriptLoaded ? props.children : <div>지도를 가져오는 중입니다.</div>}
    </>
  );
};

export default KakaoMapScriptLoader;
