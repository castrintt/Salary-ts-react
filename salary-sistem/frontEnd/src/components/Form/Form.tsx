import React, { ChangeEvent } from "react";
import styles from "./Form.module.css";
import { useSelector, useDispatch } from "react-redux";
import { registerUserInputs } from "../../redux/reducers/registerSlice";
import { RootState } from "../../redux/store";
import { loginInputFields } from "../../redux/reducers/loginSlice";

interface ChildrenProp {
  children?: React.ReactNode;
}
type EventChanger = ChangeEvent<HTMLInputElement>;

const Form = ({ children }: ChildrenProp) => {
  const pathName = window.location.pathname;
  const registerState = useSelector((state: RootState) => state.register);
  const loginState = useSelector((state: RootState) => state.login);
  const dispatch = useDispatch();
  const userNameLoginOrRegister = (e: EventChanger) => {
    if (pathName === "/login") {
      return dispatch(
        loginInputFields({
          ...loginState,
          userName: e.target.value,
        })
      );
    } else if (pathName === "/register") {
      return dispatch(
        registerUserInputs({
          ...registerState,
          userName: e.target.value,
        })
      );
    }
  };

  const passwordLoginOrRegister = (e: EventChanger) => {
    if (pathName === "/login") {
      return dispatch(
        loginInputFields({
          ...loginState,
          password: e.target.value,
        })
      );
    } else if (pathName === "/register") {
      return dispatch(
        registerUserInputs({
          ...registerState,
          password: e.target.value,
        })
      );
    }
  };

  return (
    <form className={styles.forms}>
      <div>
        <label htmlFor="userName">Nome do usuário</label>
        <input
          type="userName"
          name="userName"
          onChange={(e: EventChanger) => {
            userNameLoginOrRegister(e);
          }}
        />
      </div>
      <div>
        <label htmlFor="password">Senha</label>
        <input
          type="userName"
          name="password"
          onChange={(e: EventChanger) => {
            passwordLoginOrRegister(e);
          }}
        />
      </div>
      {children}
      <input
        type="submit"
        value={pathName === "/login" ? "Login" : "Registrar"}
      />
    </form>
  );
};

export default Form;
