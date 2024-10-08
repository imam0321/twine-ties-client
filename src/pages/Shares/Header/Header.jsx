import { Link, useNavigate } from "react-router-dom";
import Logo from "../../../assets/images/logo.png";
import HomeIcon from "../../../assets/icons/home.svg";
import NotificationIcon from "../../../assets/icons/notification.svg";
import LogoutIcon from "../../../assets/icons/logout.svg";
import Avatar from "../../../assets/images/avatars/avatar_1.png";
import useAuth from "../../../hooks/useAuth";
import useProfile from "../../../hooks/useProfile";

const Header = () => {
  const navigate = useNavigate();
  const {auth, setAuth} = useAuth();
  const {state} = useProfile();

  const user = state?.user ?? auth?.user;

  // logOut
  const handleLogOut = () => {
    setAuth({});
    navigate("/login");
  };
  return (
    <nav className="sticky top-0 z-50 border-b border-[#3F3F3F] bg-[#1E1F24] py-4">
      <div className="container flex flex-col items-center justify-between gap-6 sm:flex-row">
        <Link to="#">
          <img
            className="max-w-[100px] rounded-sm lg:max-w-[130px]"
            src={Logo}
            alt="Logo"
          />
        </Link>
        <div className="flex items-center space-x-4">
          <Link to="/" className="btn-primary">
            <img src={HomeIcon} alt="Home" />
            Home
          </Link>
          <button className="icon-btn">
            <img src={NotificationIcon} alt="Notification" />
          </button>
          <button onClick={handleLogOut} className="icon-btn">
            <img src={LogoutIcon} alt="Logout" />
          </button>
          <Link to="/profile" className="flex-center !ml-8 gap-3">
            <span className="text-lg font-medium lg:text-xl">{user?.firstName} {user?.lastName}</span>
            <img
              className="max-h-[32px] max-w-[32px] lg:max-h-[44px] lg:max-w-[44px] rounded-full"
              src={`${import.meta.env.VITE_SERVER_BASE_URL}/${user?.avatar}`}
              alt="Avatar"
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
