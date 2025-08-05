import "./App.css";
import Hader from "./Component/Hader/Hader";
import Fotter from "./Component/FOTTER/Fotter";
import { Route, Routes } from "react-router";
import Main from "./Component/Main/Main";
import Mac from "./Component/Pages/Mac";
import Iphone from "./Component/Pages/Iphone";
import Ipad from "./Component/Pages/Ipad";
import Watch from "./Component/Pages/Watch";
import Tv from "./Component/Pages/Tv";
import Music from "./Component/Pages/Music";
import Support from "./Component/Pages/Support";
import Cart from "./Component/Pages/Cart";
import Four04 from "./Component/Pages/Four04";
import SharedLay from "./Component/Shared/SharedLay";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SharedLay />}>
          <Route path="/" element={<Main />} />
          <Route path="/mac" element={<Mac />} />
          <Route path="/iphone" element={<Iphone />} />
          <Route path="/Watch" element={<Watch />} />
          <Route path="/tv" element={<Tv />} />
          <Route path="/Music" element={<Music />} />
          <Route path="/Support" element={<Support />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/ipad" element={<Ipad />} />
          <Route path="*" element={<Four04 />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
