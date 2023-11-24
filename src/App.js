import { BrowserRouter, Route, Routes } from "react-router-dom";
import loadable from "@loadable/component";

const Home = loadable(() =>
  import(/* webpackChunkName: "Home" */ "./component/Home")
);
const Test = loadable(() =>
  import(/* webpackChunkName: "Test" */ "./component/Test")
);
const AppServer = loadable(() =>
  import(/* webpackChunkName: "AppServer" */ "./AppServer")
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
        <Route path="/server" element={<AppServer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
