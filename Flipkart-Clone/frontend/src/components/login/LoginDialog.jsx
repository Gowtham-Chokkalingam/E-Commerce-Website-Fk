import { Box, Button, Dialog, styled, TextField, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import { DataContext } from "../../context/DataProvider";
import { authenticateLogin, authenticateSignup } from "../../service/api";

const Component = styled(Box)`
  height: 70vh;
  width: 90vh;
`;

const Error = styled(Typography)`
  font-size: 10px;
  color: #ff6161;
  line-height: 0;
  margin-top: 10px;
  font-weight: 600;
`;

const LoginButton = styled(Button)`
  text-transform: none;
  background: #fb641b;
  color: #fff;
  height: 48px;
  border-radius: 2px;
`;

const ReuestOTP = styled(Button)`
  text-transform: none;
  background: #fff;
  color: #2874f0;
  height: 48px;
  border-radius: 2px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0/20%);
`;
const Image = styled(Box)`
  background: #2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
  height: 85%;
  width: 28%;

  padding: 45px 35px;
  & > P,
  & > h5 {
    color: #ffff;
    font-weight: 600;
  }
`;

const Wrapper = styled(Box)`
  display: flex;
  height: 85%;
  flex-direction: column;
  padding: 25px 35px;
  flex: 1;
  & > div,
  & > button,
  & > p {
    margin-top: 16px;
  }
`;

const Text = styled(Typography)`
  font-size: 12px;
  color: #8787;
`;

const CreateAccount = styled(Typography)`
  margin: auto 0 5px 0;
  text-align: center;
  color: #2874f0;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
`;

const accountInitialValues = {
  login: {
    view: "login",
    heading: "Login",
    subHeading: "Get access to your Orders, Wishlist and Recommendations",
  },
  signup: {
    view: "signup",
    heading: "Looks like you're new here",
    subHeading: "Signup to get started",
  },
};

const signupInitialValues = {
  firstname: "",
  lastname: "",
  username: "",
  email: "",
  password: "",
  phone: "",
};

const loginInitialValues = {
  username: "",
  password: "",
};
const LoginDialog = ({ open, setOpen }) => {
  const [account, toggleAccount] = useState(accountInitialValues.login);
  const [signup, setSignup] = useState(signupInitialValues);
  const [login, setLogin] = useState(loginInitialValues);
  const [error, showError] = useState(false);

  const { setAccount } = useContext(DataContext);

  const toggleSignup = () => {
    toggleAccount(accountInitialValues.signup);
  };

  const handleClose = () => {
    setOpen(false);
    toggleAccount(accountInitialValues.login);
  };

  const onInputChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
  };

  const onValueChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const loginUser = async () => {
    let response = await authenticateLogin(login);
    console.log("response:", response);
    if (!response) {
      showError(true);
    } else {
      showError(false);
      handleClose();
      setAccount(login.username);
    }
  };

  const signupUser = async () => {
    let response = await authenticateSignup(signup);
    if (!response) return;
    handleClose();
    setAccount(signup.username);
  };

  return (
    <Dialog open={open} onClose={handleClose} PaperProps={{ sx: { maxWidth: "unset" } }}>
      <Component>
        <Box style={{ display: "flex", height: "100%" }}>
          <Image>
            <Typography variant="h5">{account.heading}</Typography>
            <Typography style={{ marginTop: 20 }}>{account.subHeading}</Typography>
          </Image>
          {account.view === "login" ? (
            <Wrapper>
              <TextField variant="standard" onChange={(e) => onValueChange(e)} name="username" label="Enter Email / Mobile Number"></TextField>
              {error && <Error>Please enter valid Email ID/Mobile number</Error>}

              <TextField variant="standard" label="Enter Password" onChange={(e) => onValueChange(e)} name="password"></TextField>

              <Text>By Continuing, You agree to filpkart terms of use and privacy policy.</Text>

              <LoginButton onClick={() => loginUser()}>Login</LoginButton>
              <Typography style={{ textAlign: "center" }}>OR</Typography>

              <ReuestOTP>Request OTP</ReuestOTP>

              <CreateAccount onClick={() => toggleSignup()}>New to Flipkart? Create an account</CreateAccount>
            </Wrapper>
          ) : (
            <Wrapper>
              <TextField variant="standard" onChange={(e) => onInputChange(e)} name="firstname" label="Enter Firstname" />
              <TextField variant="standard" onChange={(e) => onInputChange(e)} name="lastname" label="Enter Lastname" />
              <TextField variant="standard" onChange={(e) => onInputChange(e)} name="username" label="Enter Username" />
              <TextField variant="standard" onChange={(e) => onInputChange(e)} name="email" label="Enter Email" />
              <TextField variant="standard" onChange={(e) => onInputChange(e)} name="password" label="Enter Password" />
              <TextField variant="standard" onChange={(e) => onInputChange(e)} name="phone" label="Enter Phone" />
              <LoginButton onClick={() => signupUser()}>Continue</LoginButton>
            </Wrapper>
          )}
        </Box>
      </Component>
    </Dialog>
  );
};

export default LoginDialog;
