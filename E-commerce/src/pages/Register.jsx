import { LockOutlined } from "@mui/icons-material";

import {
  Container,
  CssBaseline,
  Box,
  Avatar,
  Typography,
  Grid,
  TextField,
  Button,
  Link,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import React from "react";
import { useAuth } from "../firebase/Auth";
import { Form, useNavigate } from "react-router-dom";

export default function Register() {
  const { signUp } = useAuth();
  const navigate = useNavigate();
  async function registerUser(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    await signUp(data.get("email"), data.get("password"), data.get("name"));
    navigate("/login");
  }
  return (
    <Container component={"main"} maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          mt: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar
          sx={{
            m: 1,
            bgcolor: "secondary.main",
          }}
        >
          <LockOutlined />
        </Avatar>
        <Typography component={"h1"} variant="h5">
          Sign Up
        </Typography>
        <Box
          component={"form"}
          sx={{
            mt: 3,
          }}
          onSubmit={registerUser}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                name="name"
                id="name"
                autoFocus
                label="Name"
                fullWidth
                required
                autoComplete="given-name"
              ></TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="email"
                id="email"
                label="Email"
                fullWidth
                required
                autoComplete="email"
              ></TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="password"
                id="password"
                label="Password"
                type="password"
                fullWidth
                required
                autoComplete="new-password"
              ></TextField>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              mb: 2,
            }}
          >
            Register
          </Button>
          <Grid container justifyContent={"flex-end"}>
            <Grid item>
              <Link variant="body2" href="/login">
                Already have an account? Sign In
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
