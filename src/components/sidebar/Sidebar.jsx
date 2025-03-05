import Twitter from "../../assets/twitter-6.svg";
import MenuItem from "./MenuItem";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
///import PostAddIcon from "@mui/icons-material/PostAdd";
import { Avatar } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ onSignout, user }) => {
  const [selectedMenu, setSelectedMenu] = useState("Home");
  const navigate = useNavigate();

  const menuItems = [
    { Icon: HomeIcon, content: "Home", path: "/" },
    { Icon: SearchIcon, content: "Explore", path: "/explore" },
    {
      Icon: NotificationsNoneIcon,
      content: "Notifications",
      path: "/notifications",
    },
    { Icon: MailOutlineIcon, content: "Messages", path: "/messages" },
    { Icon: BookmarkBorderIcon, content: "Bookmarks", path: "/bookmarks" },
    { Icon: FormatListBulletedIcon, content: "Lists", path: "/lists" },
    { Icon: PermIdentityIcon, content: "Profile", path: "/profile" },
    { Icon: MoreHorizIcon, content: "More", path: "/more" },
  ];

  const handleMenuItemClick = (content, path) => {
    setSelectedMenu(content);
    navigate(path);
  };

  return (
    <div className="sidebar-container h-screen w-1/4 border-solid border-r border-neutral-100 hidden md:block">
      <div className="sidebar-header w-100 h-16 flex items-center justify-start ">
        <img src={Twitter} alt="twitter" className="logo w-1/5 h-1/3" />
        <h2 className="font-black hidden md:block">Twitter</h2>
      </div>

      <div className="sidebar-content w-full flex flex-col items-center justify-start">
        {menuItems.map((item, index) => (
          <MenuItem
            key={index}
            Icon={item.Icon}
            content={item.content}
            isSelected={selectedMenu === item.content}
            onClick={() => handleMenuItemClick(item.content, item.path)}
          />
        ))}
        {/* tweet button */}
        <button className="bg-sky-400 text-white w-4/5 outline-none rounded-3xl mt-3 hidden md:block">
          Tweet
        </button>
        <button className="signout-button" onClick={onSignout}>
          sign out
        </button>
        {/* <div className="tweet-button-mobile-container">
          <button className="bg-sky-400 text-white rounded-full">
            <PostAddIcon />
          </button>
        </div> */}
      </div>

      <div className="sidebar-footer flex items-center justify-start ">
        <div className="sidebar-footer-user flex items-center mt-4">
          <Avatar src={user.avatarUrl} className="m-3" />
          <div className="sidebar-footer-user p-3">
            <div className="sidebar-footer-username font-black text-lg">
              {user.userName}
            </div>
            <div className="sidebar-footer-handle text-gray-500">
              @{user.handleName}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
