import {Route, Routes} from "react-router-dom"
import { AboutUs } from "./pages/Aboutus";
import { Home } from "./pages/Home";
import { Practitioner } from "./pages/Practitioner";

function App() {
  return (

    <Routes>
      <Route path = "/" element={<Home />} />
      <Route path = "/aboutus" element={<AboutUs />} />
      <Route path = "/practitioner" element={<Practitioner />} />
    </Routes>
  );
}

export default App;
