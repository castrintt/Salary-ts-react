import Header from "../../components/header/Header";
import React, { ChangeEvent } from "react";
import Form from "../../components/Form/Form";
import { registerUserInputs } from "../../redux/reducers/registerSlice";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { Root } from "react-dom/client";

type Props = {};

const Register = (props: Props) => {
  const registerState = useSelector((state: RootState) => state.register);
  const dispatch = useDispatch();
  
  return (
    <React.Fragment>
      <Header />
      <Form>
        <div>
          <label htmlFor="confirmPassword">Confirme a Senha</label>
          <input
            type="text"
            name="confirmPassword"
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              dispatch(
                registerUserInputs({
                  ...registerState,
                  confirmPassword: e.target.value,
                })
              );
            }}
          />
        </div>
      </Form>
    </React.Fragment>
  );
};

export default Register;
