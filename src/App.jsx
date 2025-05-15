import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserLayout from "./layouts/UserLayout";
import AdminLayout from "./layouts/AdminLayout";
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
import BranchPage from "./pages/BranchPage";
import FoundedRoutePage from "./pages/FoundedRoutePage";
import BookingDetail from "./components/user/BookingDetail/BookingDetail";
import { Provider } from "react-redux";
import store from "./store/index";
import AdminDashboard from "./components/admin/Content/AdminDashboard/AdminDashboard";
import Receipt from "./components/admin/Content/Receipt/Receipt";
import Schedule from "./components/admin/Content/Schedule/Schedule";
import News from "./components/admin/Content/News/News";
import Trip from "./components/admin/Content/Trip/Trip";
import AdminLogin from "./components/admin/Login/AdminLogin";
import ProtectedAdmin from "./components/admin/ProtectAdmin/ProtectAdmin";
import PickupArea from "./components/admin/Content/PickupArea/PickupArea";
import TripInfo from "./components/admin/Content/TripInfo/TripInfo";
import Transportation from "./components/admin/Content/Transportation/Transportation";

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<UserLayout />}>
            <Route index element={<HomePage />} />
            <Route path="lich-trinh" element={<SchedulePage />} />
            <Route path="tra-cuu-ve" element={<SearchTicketPage />} />
            <Route path="tin-tuc" element={<NewsPage />} />
            <Route path="hoa-don" element={<ReceiptPage />} />
            <Route path="lien-he" element={<ContactPage />} />
            <Route path="ve-chung-toi" element={<AboutPage />} />
            <Route path="dieu-khoan-su-dung" element={<PolicyPage />} />
            <Route path="hoi-dap" element={<QnAPage />} />
            <Route path="dang-nhap" element={<LoginPage />} />
            <Route
              path="huong-dan-dat-ve-tren-web"
              element={<GuideBuyPage />}
            />
            <Route
              path="huong-dan-nap-tien-tren-app"
              element={<GuideRechargePage />}
            />
            <Route path="chi-nhanh" element={<BranchPage />} />
            <Route path="dat-ve" element={<FoundedRoutePage />} />
            <Route path="chi-tiet-dat-ve" element={<BookingDetail />} />

            <Route path="*" element={<NotFoundPage />} />
          </Route>

          <Route path="/admin/login" element={<AdminLogin />} />
          <Route element={<ProtectedAdmin />}>
            <Route path="/admin" element={<AdminLayout />}>
              <Route path="dashboard" element={<AdminDashboard />} />
              <Route path="hoa-don" element={<Receipt />} />
              <Route path="lich-trinh" element={<Schedule />} />
              <Route path="khoi-hanh" element={<PickupArea />} />
              <Route path="chuyen-xe" element={<Transportation />} />
              <Route path="tuyen-duong" element={<TripInfo />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Route>
        </Routes>
      </Provider>
    </Router>
  );
}

export default App;
