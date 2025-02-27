import Twitter from "../assets/twitter-6.svg";
import MenuItem from "./MenuItem";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Avatar } from "@mui/material";

const Sidebar = () => {
  const menuItems = [
    { Icon: HomeIcon, content: "Home" },
    { Icon: SearchIcon, content: "Explore" },
    { Icon: NotificationsNoneIcon, content: "Notifications" },
    { Icon: MailOutlineIcon, content: "Messages" },
    { Icon: BookmarkBorderIcon, content: "Bookmarks" },
    { Icon: FormatListBulletedIcon, content: "Lists" },
    { Icon: PermIdentityIcon, content: "Profile" },
    { Icon: MoreHorizIcon, content: "More" },
  ];

  return (
    <div className="sidebar-container h-screen w-1/4 border-solid border-r border-neutral-100">
      <div className="sidebar-header w-100 h-16 flex items-center justify-start ">
        <img src={Twitter} alt="twitter" className="logo w-1/5 h-1/3" />
        <h2 className="font-black">Twitter</h2>
      </div>

      <div className="sidebar-content w-full  flex flex-col items-center justify-start">
        {menuItems.map((item, index) => (
          <MenuItem key={index} Icon={item.Icon} content={item.content} />
        ))}
      </div>

      <div className="sidebar-footer flex flex-col items-center justify-center">
        <button className="bg-sky-400 text-white w-1/2 rounded-3xl">
          Tweet
        </button>
        <div className="sidebar-footer-user flex items-center mt-4">
          <Avatar />
          <div className="ml-3 font-black text-lg">Ashunar0</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
