import DynamicMap from "./Map/DynamicMap";
import KakaoMapScriptLoader from "./Map/KakaoMapScriptLoader";
import SearchLocation from "./Map/SearchLocation";

const App = () => {
  return (
    <KakaoMapScriptLoader>
      <DynamicMap>
        <SearchLocation />
      </DynamicMap>
      {/* <SearchLocation />한개 더 넣어줬음;; */}
    </KakaoMapScriptLoader>
  );
};

export default App;
