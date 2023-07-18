import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  InputAdornment,
  IconButton,
  useTheme,
  Container,
} from "@mui/material";
import styled from "@emotion/styled";
import { Visibility, VisibilityOff, Google } from "@mui/icons-material";

import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";

const NeedPadding = styled(Box)`
  padding-left: 80px;
  padding-right: 80px;

  @media (max-width: 600px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;
const GoogleButton = styled(Button)`
  background-color: #fff;
  color: #757575;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 16px;
  text-transform: none;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;

  &:hover {
    background-color: #f1f1f1;
  }
`;

function Register() {
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const theme = useTheme();

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
  };

  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <>
      <Helmet>
        <title> 👤 Registration | Online Aid </title>
      </Helmet>

      <Container>
        <Grid
          container
          spacing={2}
          justifyContent="center"
          alignItems="center"
          py={8}
        >
          <Grid item xs={12} sm={6}>
            <img
              src={`https://i.ibb.co/WPJFwCC/illustration-dashboard.png`}
              alt=""
              style={{ width: "100%", height: "auto" }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <NeedPadding marginTop={4}>
              <Box>
                <Typography variant="h5" mb={2} sx={{ fontWeight: "bold" }}>
                  Get started absolutely free
                </Typography>
                <Typography
                  variant="subtitle1"
                  display="flex"
                  mb={5}
                  sx={{ gap: "10px" }}
                >
                  Already have an account?
                  <Box
                    component={Link}
                    sx={{
                      textDecoration: "none",
                      color: theme.palette.primary.main,
                      fontWeight: "bold",
                    }}
                    to="/login"
                  >
                    Sign in
                  </Box>
                </Typography>
              </Box>
              <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
                <Box mb={3} display={"flex"} sx={{ gap: "15px" }}>
                  <TextField
                    label="Name"
                    type="text"
                    fullWidth
                    {...register("name", { required: true })}
                    name="name"
                  />
                </Box>
                <Box mb={3}>
                  <TextField
                    label="Email address"
                    type="email"
                    fullWidth
                    {...register("email", { required: true })}
                    name="email"
                  />
                  {errors.email && (
                    <Typography variant="body2" color="error">
                      Email is required
                    </Typography>
                  )}
                </Box>
                <Box mb={3}>
                  <TextField
                    label="Password"
                    type={showPassword ? "text" : "password"}
                    fullWidth
                    {...register("password", {
                      required: true,
                      minLength: 6,
                      maxLength: 20,
                      pattern:
                        /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                    })}
                  />
                </Box>
                <Box mb={3}>
                  <TextField
                    label="Confirm Password"
                    type={showPassword ? "text" : "password"}
                    fullWidth
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton onClick={handleTogglePassword}>
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />

                  {errors.password?.type === "required" && (
                    <Typography variant="body2" color="error">
                      Password is required
                    </Typography>
                  )}
                  {errors.password?.type === "minLength" && (
                    <Typography variant="body2" color="error">
                      Password must be at least 6 characters
                    </Typography>
                  )}
                  {errors.password?.type === "maxLength" && (
                    <Typography variant="body2" color="error">
                      Password must be less than 20 characters
                    </Typography>
                  )}
                  {errors.password?.type === "pattern" && (
                    <Typography variant="body2" color="error">
                      Password must have one uppercase letter, one lowercase
                      letter, one number, and one special character.
                    </Typography>
                  )}
                </Box>
                <Box mt={2}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{ padding: "16px" }}
                  >
                    Register
                  </Button>
                </Box>
              </form>
            </NeedPadding>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Register;