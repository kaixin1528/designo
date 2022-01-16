import Homepage from "./pages/Homepage";
import WebDesignPage from "./pages/WebDesignPage";
import AppDesignPage from "./pages/AppDesignPage";
import GraphicDesignPage from "./pages/GraphicDesignPage";
import AboutPage from "./pages/AboutPage";
import LocationPage from "./pages/LocationPage";
import ContactPage from "./pages/ContactPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [dropMenu, setDropMenu] = useState(false);

  const handleDropMenu = () => {
    setDropMenu(!dropMenu);
  };

  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={<Homepage dropMenu={dropMenu} onDropMenu={handleDropMenu} />}
        ></Route>
        <Route
          path='/web-design'
          element={
            <WebDesignPage dropMenu={dropMenu} onDropMenu={handleDropMenu} />
          }
        ></Route>
        <Route
          path='/app-design'
          element={
            <AppDesignPage dropMenu={dropMenu} onDropMenu={handleDropMenu} />
          }
        ></Route>
        <Route
          path='/graphic-design'
          element={
            <GraphicDesignPage
              dropMenu={dropMenu}
              onDropMenu={handleDropMenu}
            />
          }
        ></Route>
        <Route
          path='/about-us'
          element={
            <AboutPage dropMenu={dropMenu} onDropMenu={handleDropMenu} />
          }
        ></Route>
        <Route
          path='/locations'
          element={
            <LocationPage dropMenu={dropMenu} onDropMenu={handleDropMenu} />
          }
        ></Route>
        <Route
          path='/contact'
          element={
            <ContactPage dropMenu={dropMenu} onDropMenu={handleDropMenu} />
          }
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
