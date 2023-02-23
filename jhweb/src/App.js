import { Route, Routes } from "react-router-dom";
import { AboutUs } from "./pages/Aboutus";
import { Home } from "./pages/Home";
import { Event } from "./pages/Event";
import { Resources } from "./pages/Resources";
import { Sign_Up } from "./pages/Sign_Up";
import { Helmet } from "react-helmet";

function App() {
  return (
    <div>
      <Helmet>
        <title>JoeyHelps</title>
      </Helmet>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/event" element={<Event />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/sign_up" element={<Sign_Up />} />
      </Routes>
    </div>
  );
}

export default App;
