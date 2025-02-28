import {
  ChatBubbleOutline,
  FavoriteBorder,
  PublishOutlined,
  Repeat,
} from "@mui/icons-material";
import { Avatar } from "@mui/material";

const Tweet = ({ tweet }) => {
  return (
    <div className="tweet w-full flex ">
      {/* avatar */}
      <div className="tweet-avatar p-3 pl-4">
        <Avatar />
      </div>

      <div className="tweet-content w-full">
        {/* header */}
        <div className="tweet-header w-full p-4 pl-2 flex items-center ">
          <div className="tweet-header-info w-full flex items-center justify-between">
            {/* username & handle */}
            <div className="tweet-header-user flex align-center">
              <div className="tweet-header-username font-2xl font-black">
                {tweet.userName}
              </div>
              <div className="tweet-header-handle ml-2 mt-1 text-sm text-gray-500 ">
                @{tweet.handleName}
              </div>
            </div>

            {/* date */}
            <div className="tweet-header-date text-sm mr-3 text-gray-500">
              {tweet.createdAt}
            </div>
          </div>
        </div>

        {/* content */}
        <div className="tweet-content">
          <div className="tweet-text w-full p-4 pt-1 ">{tweet.text}</div>
        </div>

        {/* footer */}
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
