import { BrowserRouter, Route, Routes } from "react-router";

import HomePage from "./pages/HomePage";
import Speakers from "./pages/Speakers";
import HeadphonesPage from "./pages/HeadphonesPage";
import Earphones from "./pages/Earphones";
import AppLayout from "./pages/AppLayout";
import PageNotFound from "./pages/PageNotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route element={<AppLayout />} />
        <Route path="headphones" element={<HeadphonesPage />} />
        <Route path="speakers" element={<Speakers />} />
        <Route path="earphones" element={<Earphones />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
