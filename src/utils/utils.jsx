import { format } from "date-fns";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "../firebase";

/**
 * Firestore Timestamp を yyyy.mm.dd hh:mm にフォーマット
 * @param timestamp Firestore Timestamp
 * @returns string (yyyy.mm.dd hh:mm)
 */

export const formatDate = (date) => {
  if (!date) return "";
  const d = date.toDate();
  return format(d, "yyyy.MM.dd HH:mm");
};

/**
 * tweetsコレクションのすべてのツイートとそれに関連するユーザー情報を取得する関数
 * @returns {Promise<Array>} ツイートとユーザー情報が結合されたオブジェクトの配列
 */
export const getAllTweets = async () => {
  try {
    // tweetsコレクションの参照を取得し、作成日時の降順でソート
    const tweetsRef = collection(db, "tweets");
    const q = query(tweetsRef, orderBy("createdAt", "desc"));
    const tweetSnapshot = await getDocs(q);

    // tweetsデータを取得
    const tweets = tweetSnapshot.docs.map((doc) => ({
      id: doc.id,
      userId: doc.data().userId,
      text: doc.data().text,
      createdAt: formatDate(doc.data().createdAt),
      imageUrl: doc.data().imageUrl,
    }));

    // ユーザーIDを抽出して重複を排除
    const userIds = [...new Set(tweets.map((tweet) => tweet.userId))];

    // usersコレクションからユーザー情報を取得
    const usersRef = collection(db, "users");
    const userSnapshot = await getDocs(usersRef);

    // ユーザーIDをキーとしたユーザー情報のマップを作成
    const userMap = {};
    userSnapshot.docs.forEach((doc) => {
      const userData = doc.data();
      if (userIds.includes(doc.id)) {
        userMap[doc.id] = {
          id: doc.id,
          userName: userData.userName,
          handleName: userData.handleName,
        };
      }
    });

    // ツイートデータとユーザー情報を結合
    const tweetsWithUserInfo = tweets.map((tweet) => ({
      ...tweet,
      ...userMap[tweet.userId],
    }));

    return tweetsWithUserInfo;
  } catch (error) {
    console.error("Error getting tweets: ", error);
    throw error;
  }
};
