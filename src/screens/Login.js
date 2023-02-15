import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const CommonButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText("#f4c427"),
  backgroundColor: "#f4c427",
  "&:hover": {
    backgroundColor: "#f4c427",
  },
}));

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("username");

    if (user) {
      navigate("/admin");
    }
  }, []);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [changePassword, setChangePassword] = useState(false);
  const [newPassword, setNewPassword] = useState("");

  const login = () => {
    axios
      .post("https://prateekabbi-backend.herokuapp.com/loginApi/logIn", {
        username,
        password,
      })
      .then((data) => {
        console.log(data.data);
        if (data.data.username) {
          localStorage.setItem("username", data.data.username);
          navigate("/admin");
        }
      });
  };

  const resetPassword = () => {
    axios
      .post(
        "https://prateekabbi-backend.herokuapp.com/changePasswordApi/changePassword",
        { password: newPassword }
      )
      .then((data) => {
        toast(data.data, {
          position: "top-right",
          autoClose: 10000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          type: "success",
        });
        setChangePassword(false);
      });
  };

  return (
    <>
      {/* <Box size={420} my={40}>
        <Typography
          align="center"
          color={"#f4c427"}
        >
          PLEASE LOGIN
        </Typography>
        
        <Paper
          // shadow="md"
          // p={30}
          // mt={30}
          // radius="md"
          // style={{ backgroundColor: "#2a3748" }}
        >
        <TextInput
            label="Email"
            placeholder="Your Email ID"
            onChange={(event) => setUsername(event.target.value)}
            styles={{
              defaultVariant: { backgroundColor: "#2a3748" },
              input: { color: "#fff" },
              label: { color: "#f4c427" },
            }}
            required
          />
        <TextField
            label="Email"
            placeholder="Your Email ID"
            onChange={(event) => setUsername(event.target.value)}
            id="outlined-basic"
            variant="outlined"
            
          />
          <TextField
            id="outlined-password-input"
            label="Password"
            placeholder="Your password"
            onChange={(event) => setPassword(event.target.value)}
            type="password"
            autoComplete="current-password"
          />
          <Button variant="outlined"  onClick={login}>Sign in</Button>
        <Button
            fullWidth
            mt="xl"
            variant="outline"
            style={{
              color: "#f4c427",
              border: "2px solid #1d2b3c",
            }}
            sx={() => ({
              "&:hover": {
                backgroundColor: "#1d2b3c",
              },
            })}
            onClick={login}
          >
            Sign in
          </Button>
        </Paper>
      </Box> */}
      {changePassword === true ? (
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            "& > :not(style)": {
              m: 1,
              width: 350,
              height: 300,
            },
          }}
        >
          <Paper
            elevation={3}
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              margin: "auto",
              backgroundColor: "#2a3748",
              textAlign: "center",
            }}
          >
            <Typography
              variant="h4"
              color={"#f4c427"}
              style={{ margin: "25px 0px 25px 0px" }}
            >
              CHANGE YOUR PASSWORD
            </Typography>

            <TextField
              id="outlined-basic"
              label="NEW PASSWORD"
              variant="outlined"
              style={{ marginBottom: "15px" }}
              InputLabelProps={{
                style: { color: "#f4c427" },
              }}
              inputProps={{
                style: {
                  color: "white",
                },
              }}
              onChange={(event) => setNewPassword(event.target.value)}
            />

            <CommonButton
              variant="contained"
              onClick={resetPassword}
              style={{ display: "block", margin: "0 auto 15px auto" }}
            >
              Change
            </CommonButton>
          </Paper>
        </Box>
      ) : (
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            "& > :not(style)": {
              m: 1,
              width: 350,
              height: 350,
            },
          }}
        >
          <Paper
            elevation={3}
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              margin: "auto",
              backgroundColor: "#2a3748",
              textAlign: "center",
            }}
          >
            <Typography
              variant="h4"
              color={"#f4c427"}
              style={{ margin: "25px 0px 25px 0px" }}
            >
              LOGIN
            </Typography>

            <TextField
              id="outlined-basic"
              label="EMAIL ID"
              variant="outlined"
              style={{ marginBottom: "15px" }}
              InputLabelProps={{
                style: { color: "#f4c427" },
              }}
              inputProps={{
                style: {
                  color: "white",
                },
              }}
              onChange={(event) => setUsername(event.target.value)}
            />

            <TextField
              id="outlined-basic"
              label="PASSWORD"
              variant="outlined"
              style={{ marginBottom: "15px" }}
              type={"password"}
              InputLabelProps={{
                style: { color: "#f4c427" },
              }}
              inputProps={{
                style: {
                  color: "white",
                },
              }}
              onChange={(event) => setPassword(event.target.value)}
            />

            <CommonButton
              variant="contained"
              onClick={login}
              style={{ display: "block", margin: "0 auto 15px auto" }}
            >
              Sign in
            </CommonButton>

            <CommonButton
              variant="contained"
              onClick={() => {
                setChangePassword(true);
              }}
              style={{ display: "block", margin: "auto" }}
            >
              Forgot Password
            </CommonButton>
          </Paper>
        </Box>
      )}
      <ToastContainer />
    </>
  );
};

export default Login;
