import Sidebar from "../components/sidebar/Sidebar";
import Timeline from "../components/home/Timeline";
import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth, db } from "../firebase";
import { useNavigate } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";

const Home = () => {
  const [user, setUser] = useState("");
  const navigate = useNavigate();

  //ログイン状態かどうかを確認
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      const key = currentUser.email;
      getUserInfo(key);
    });
  }, []);
  console.log(user);

  //ユーザー情報を照会
  const getUserInfo = async (emailKey) => {
    const userRef = doc(db, "users", emailKey);
    const userSnapshot = await getDoc(userRef);
    const userInfo = userSnapshot.data();

    //console.log(userInfo);

    if (userSnapshot.exists()) {
      setUser(userInfo);
    } else {
      console.error("No such document");
    }
  };

  //ログアウト処理
  const handleSignout = async () => {
    try {
      await signOut(auth);
      alert("ログアウトしました");
      console.log("You have logged out");
      navigate("/signin");
    } catch (error) {
      console.error("Error logging out", error);
    }
  };

  return (
    <div className="home-container w-full max-w-4xl mx-auto flex">
      <Sidebar onSignout={handleSignout} user={user} />
      <Timeline user={user} />
    </div>
  );
};

export default Home;
