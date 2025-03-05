import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase";
import { Navigate } from "react-router-dom";

const Siginup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [user, setUser] = useState("");

  // サインアップ処理
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("アカウントを作成しました");
      console.log("The account has been created");
    } catch (error) {
      setError("アカウントの作成に失敗しました");
      console.error("Error creating account", error);
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
          サインアップ
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

          {error && (
            <Typography color="error" variant="body2">
              {error}
            </Typography>
          )}

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleSubmit}
          >
            アカウントを作成
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Siginup;
