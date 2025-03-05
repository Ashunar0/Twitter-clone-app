import {
  Box,
  Button,
  Container,
  Grid2,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../firebase";
import { Navigate } from "react-router-dom";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");

  //ログイン処理
  const handleSignin = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("ログインしました");
      console.log("You have logged in");
    } catch (error) {
      alert("メールアドレスまたはパスワードが違います");
      console.error("Error logging in", error);
    }
  };

  //ログイン状態かどうかを確認
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  if (user) {
    return <Navigate to="/" />;
  }

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          height: "100vh", // 画面全体の高さを設定
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center", // 縦方向中央寄せ
        }}
      >
        <Typography component="h1" variant="h4">
          サインイン
        </Typography>

        <Box component="form" noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="メールアドレス"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="パスワード"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleSignin}
          >
            ログイン
          </Button>

          <Grid2 container>
            <Grid2>
              <Link href="#" variant="body2">
                パスワードを忘れた
              </Link>
            </Grid2>

            <Grid2>
              <Link href="#" variant="body2" sx={{ ml: 2 }}>
                新規登録
              </Link>
            </Grid2>
          </Grid2>
        </Box>
      </Box>
    </Container>
  );
};

export default Signin;
