import Tweet from "./Tweet";
import { Avatar } from "@mui/material";
import TweetInput from "./TweetInput";
import { useEffect, useState } from "react";
import { getAllTweets } from "../utils/utils";

const Timeline = () => {
  const [tweets, setTweets] = useState([]);

  //test用のtweet
  const testTweet = {
    handleName: "jhondoe000",
    userId: "jhondoe",
    userName: "Jhon Doe",
    text: "Hello World!",
    createdAt: "2025.02.28 13:00",
  };

  useEffect(() => {
    //tweetを取得
    const fetchTweets = async () => {
      const tweetsSnapshot = await getAllTweets();
      setTweets(tweetsSnapshot);
      console.log(tweetsSnapshot); // 変更後のデータをログに出力
    };

    fetchTweets();
  }, []);

  // 新しいツイートを取得して状態を更新
  const handleNewTweet = async () => {
    const tweetsSnapshot = await getAllTweets();
    setTweets(tweetsSnapshot);
  };

  return (
    <div className="timeline-container flex flex-col h-screen w-3/4 border-solid border-r border-neutral-100">
      {/* header */}
      <div className="timeline-header w-full h-24 flex items-center justify-start border-solid border border-neutral-100">
        <div className="timeline-title ml-4 text-lg font-black">Timeline</div>
      </div>

      {/* tweet input */}
      <div className="tweet-input-container w-full flex border border-solid border-neutral-100">
        {/* avatar */}
        <div className="tweet-input-avatar p-3 pl-4">
          <Avatar />
        </div>

        <TweetInput onNewTweet={handleNewTweet} />
      </div>

      {/* timeline */}
      <div className="tweet-container w-full flex-grow overflow-y-scroll ">
        {tweets.map((tweet, index) => (
          <Tweet key={index} tweet={tweet} />
        ))}
        <Tweet tweet={testTweet} />
        <Tweet tweet={testTweet} />
        <Tweet tweet={testTweet} />
        <Tweet tweet={testTweet} />
        <Tweet tweet={testTweet} />
        <Tweet tweet={testTweet} />
        <Tweet tweet={testTweet} />
      </div>
    </div>
  );
};

export default Timeline;
