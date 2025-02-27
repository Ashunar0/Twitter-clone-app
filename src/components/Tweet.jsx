import {
  ChatBubbleOutline,
  FavoriteBorder,
  PublishOutlined,
  Repeat,
} from "@mui/icons-material";
import { Avatar } from "@mui/material";

const Tweet = () => {
  return (
    <div className="tweet w-full flex ">
      <div className="tweet-avatar p-3 pl-4">
        <Avatar />
      </div>
      <div className="tweet-content w-full">
        <div className="tweet-header w-full p-4 pl-2 flex items-center">
          <div className="tweet-header-user flex align-center">
            <div className="tweet-header-username font-2xl font-black">
              Ashunar0
            </div>
            <div className="tweet-header-handle ml-2 mt-1 text-sm text-gray-500 ">
              @ashunar0
            </div>
          </div>
        </div>
        <div className="tweet-content">
          <div className="tweet-text w-full p-4 pt-1 ">Hello World!</div>
        </div>
        <div className="tweet-footer w-2/3 flex justify-between p-1 ">
          <ChatBubbleOutline fontSize="small" color="action" />
          <Repeat fontSize="small" color="action" />
          <FavoriteBorder fontSize="small" color="action" />
          <PublishOutlined fontSize="small" color="action" />
        </div>
      </div>
    </div>
  );
};

export default Tweet;
