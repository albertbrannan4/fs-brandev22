import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import styled from "styled-components";
import Page from "./Page";

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

export default function Login(props: Props) {
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
        />

        <TextField
          fullWidth
          label="Password"
          name="Password"
          required
          onChange={HandleChanges}
        />

        <Button variant="contained" type="submit" size="large">
          Create Account
        </Button>
      </StyledForm>
    </Page>
  );
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  height: 40vh;
  justify-content: space-evenly;
  width: 30%;
`;
