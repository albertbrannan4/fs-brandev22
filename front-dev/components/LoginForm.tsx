import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import styled from "styled-components";
import Page from "./Page";
import HandleSubmissions from "./Utils/HandleSubmissions";
interface LoginInterface {
  Email: string;
  Password: string;
}
interface Props {
  handleSubmissions: (action: any, url: string, data: any) => void;
}
const InitialState: LoginInterface = {
  Email: "",
  Password: "",
};

export default function LoginForm(props: Props) {
  const [input, setInput] = useState<LoginInterface>(InitialState);

  const HandleChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const Submit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const { Email, Password } = input;
    const cleanData = {
      Email: Email.trim(),
      Password: Password.trim(),
    };
    HandleSubmissions(
      "post",
      "http://localhost:5000/api/auth/login",
      cleanData
    );
    console.log(cleanData);
  };

  return (
    <Page>
      <StyledForm onSubmit={Submit}>
        <TextField
          fullWidth
          label="Email"
          name="Email"
          required
          onChange={HandleChanges}
          style={InputStyle}
        />

        <TextField
          fullWidth
          label="Password"
          name="Password"
          required
          onChange={HandleChanges}
          style={InputStyle}
        />

        <Button variant="contained" type="submit" size="large">
          Create Account
        </Button>
      </StyledForm>
    </Page>
  );
}
const InputStyle = {
  backgroundColor: "white",
};
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  height: 40vh;
  justify-content: space-evenly;
  width: 30%;
  padding: 2%;
  border: 1px solid green;
  border-radius: 10px;
  background-color: gray;
  border-shaow
  box-shadow: 3px 4px 5px #000;
`;
