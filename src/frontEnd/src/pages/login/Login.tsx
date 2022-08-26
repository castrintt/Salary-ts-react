import React from "react";
import styles from "./Login.module.css";
import Header from "../../components/header/Header";
import Form from "../../components/Form/Form";

type Props = {};

const Login = (props: Props) => {
  return (
    <React.Fragment>
      <Header />
      <div>
        <Form />
      </div>
    </React.Fragment>
  );
};

export default Login;
