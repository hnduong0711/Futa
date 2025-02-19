import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserLayout from "./layouts/UserLayout";
import HomePage from "./pages/Homepage";
import SchedulePage from "./pages/SchedulePage";
import SearchTicketPage from "./pages/SearchTicketPage";
import NewsPage from "./pages/NewsPage";
import ReceiptPage from "./pages/ReceiptPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route index element={<HomePage />} />
          <Route path="lich-trinh" element={<SchedulePage />} />
          <Route path="tra-cuu-ve" element={<SearchTicketPage/>} />
          <Route path="tin-tuc" element={<NewsPage/>} />
          <Route path="hoa-don" element={<ReceiptPage/>} />
          <Route path="lien-he" element={<ContactPage/>} />
          <Route path="ve-chung-toi" element={<AboutPage/>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
