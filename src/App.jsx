import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserLayout from "./layouts/UserLayout";
import HomePage from "./pages/Homepage";
import SchedulePage from "./pages/SchedulePage";
import SearchTicketPage from "./pages/SearchTicketPage";
import NewsPage from "./pages/NewsPage";
import ReceiptPage from "./pages/ReceiptPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";
import PolicyPage from "./pages/PolicyPage";
import QnAPage from "./pages/QnAPage";
import LoginPage from "./pages/LoginPage";
import GuideRechargePage from "./pages/GuideRechargePage";
import GuideBuyPage from "./pages/GuideBuyPage";


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
          <Route path="dieu-khoan-su-dung" element={<PolicyPage/>} />
          <Route path="hoi-dap" element={<QnAPage/>} />
          <Route path="dang-nhap" element={<LoginPage />} />
          <Route path="huong-dan-dat-ve-tren-web" element={<GuideBuyPage />} />
          <Route path="huong-dan-nap-tien-tren-app" element={<GuideRechargePage />} />
          <Route path="*" element={<NotFoundPage />} />


        </Route>
      </Routes>
    </Router>
  );
}

export default App;
