import { Routes, Route } from "react-router-dom";
import Badges from "pages/badges";
import BadgeNew from "pages/BadgeNew";
import BadgeLayout from "layout/BadgeLayout";
import NotFound from "components/NotFound";
import Home from "pages/Home";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<BadgeLayout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/badges" element={<Badges />} />
          <Route path="/badges/new" element={<BadgeNew />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
