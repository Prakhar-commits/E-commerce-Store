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
} from "@mui/material";
import React from "react";

export default function Register() {
  return ( <Container component={"main"} maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          mt: 8,
          display: "flex",
          flexDirection: "column",
          alignItems:'center'
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
                fullWidth
                required
                autoComplete="new-password"
              ></TextField>
            </Grid>
            </Grid>
           <Button type="submit" fullWidth variant='contained' sx={{
            mt:3, mb:2
           }}>Register</Button>
           <Grid container justifyContent={"center"}>
            <Grid item>
             <Link variant="body2" href="/login">Already have an account? Sign In</Link>
            </Grid>
           </Grid>
        </Box>
      </Box>
    </Container>
  
)}
