import React, { useEffect, useState } from "react";
import styles from "./ModalEdit.module.css";
import { useDispatch } from "react-redux";
import { closeModal } from "../../../redux/reducers/editModalSlice";
import ModalForm from "./modalForm/ModalForm";
import { replaceValue } from "../../../redux/reducers/categorySlice";
import { IReplaceTableValues } from "../../../interfaces/replaceTableValues/replaceTableValues";

type Props = {
  index: number;
};

const ModalEdit = ({ index }: Props) => {
  const dispatch = useDispatch();
  const [saveButtonState, setSaveButtonState] = useState<boolean>(true);
  const [form, setForm] = useState<IReplaceTableValues>({
    index,
    date: "",
    title: "",
    category: "",
    value: "",
  });

  console.log(saveButtonState);

  const replaceData = () => {
    dispatch(replaceValue(form));
    dispatch(closeModal());
  };

  const verifyFieldsAreFilled = () => {
    const fields = Object.values(form);
    if (fields.includes("")) {
      return setSaveButtonState(true);
    } else {
      return setSaveButtonState(false);
    }
  };

  useEffect(() => {
    verifyFieldsAreFilled();
  });

  return (
    <div className={styles.black__screen_modal}>
      <div className={styles.modal__content}>
        <ModalForm form={form} setForm={setForm} />
        <div className={styles.buttons__container}>
          <button
            onClick={() => {
              dispatch(closeModal());
            }}
          >
            FECHAR
          </button>
          <button
            disabled={saveButtonState}
            id={saveButtonState ? styles.disabled__button : ""}
            onClick={() => replaceData()}
          >
            SALVAR
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalEdit;
