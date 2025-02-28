import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useRef, useState } from "react";
import { db } from "../firebase";

const TweetInput = ({ onNewTweet }) => {
  const [text, setText] = useState("");
  const textareaRef = useRef(null);

  //textarea auto resize
  const adjustTextareaHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto"; // 一度リセット
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`; // 必要な高さに調整
    }
  };

  const handleTextareaChange = (e) => {
    setText(e.target.value);
    adjustTextareaHeight();
  };

  //tweetする処理
  const handleTweet = async () => {
    // 空のツイートを防止
    if (!text.trim()) return;

    try {
      const newTweet = {
        userId: "DgKIE3ESxrfEM30pqyeV",
        text: text,
        createdAt: serverTimestamp(), // formatDateではなくserverTimestampを使用
      };
      //console.log(newTweet);

      await addDoc(collection(db, "tweets"), newTweet);
      console.log("tweeted"); // 成功メッセージを表示
      setText("");
      if (onNewTweet) onNewTweet(); //コールバック
    } catch (error) {
      console.error("Error adding tweet: ", error); // エラーメッセージをユーザーに表示
    }
  };

  return (
    <div className="tweet-input-container w-full">
      <div className="tweet-input-content w-full text-gray-500 ">
        <textarea
          ref={textareaRef}
          rows={1}
          placeholder="What's happening!?"
          value={text}
          onChange={handleTextareaChange}
          className="tweet-input-box w-full p-3 outline-none overflow-hidden break-words resize-none border-b border-neutral-100"
        />
        <input
          type="text"
          placeholder="Input image url"
          className="tweet-input-img-url w-full outline-none p-1 pt-0 pl-3"
        />

        <div className="tweet-input-button-containet w-full flex justify-end">
          <button
            onClick={handleTweet}
            className="tweet-input-tweet-button w-28 text-white rounded-3xl m-2 mr-5 outline-none bg-sky-400"
          >
            Tweet
          </button>
        </div>
      </div>
    </div>
  );
};

export default TweetInput;
