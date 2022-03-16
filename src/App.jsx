import { Routes, Route } from "react-router-dom";
import Badges from "pages/badges";
import BadgeNew from "pages/BadgeNew";
import BadgeEdit from "pages/BadgeEdit";
import BadgeLayout from "layout/BadgeLayout";
import NotFound from "pages/NotFound";
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
          <Route path="/badges/:badgeId/edit" element={<BadgeEdit />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
