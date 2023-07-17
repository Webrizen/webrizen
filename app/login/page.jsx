"use client";
import React, { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
  TextField,
  Button,
  IconButton,
  InputAdornment,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import styles from "@/app/styles/login.module.css";
import LoginHero from "@/app/assets/image/3.png";
import Image from "next/image";
import Link from "next/link";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export default function Page() {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <>
      <div className={styles.Home}>
        <div className={styles.leftHome}>
          <Container maxWidth="sm">
            <Paper elevation={3} sx={{ p: 4 }}>
              <Typography variant="h2" gutterBottom>
                Welcome Back!
              </Typography>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Email"
                      variant="outlined"
                      name="email"
                      type="email"
                      autoComplete="off"
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Password"
                      variant="outlined"
                      autoComplete="none"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      required
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton onClick={handleShowPassword}>
                              {showPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={<Checkbox color="primary" />}
                      label="Remember me"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button className={styles.Button}>Login</Button>
                  </Grid>
                </Grid>
              </form>
              <Box
                mt={2}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Typography variant="body2" color="textSecondary">
                  <Link href="#">Forgot password?</Link>
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Don't have an account?{" "}
                  <Link href="#" style={{ color: "lightblue" }}>
                    Create new account
                  </Link>
                </Typography>
              </Box>
            </Paper>
          </Container>
        </div>
        <div className={styles.rightHome}>
          <Image
            src={LoginHero}
            alt="Login Hero Image"
            loading="lazy"
          />
        </div>
      </div>
    </>
  );
}
