import React, { useState, ChangeEvent } from "react";
import styles from "./ModalForm.module.css";
import { IReplaceTableValues } from "../../../../interfaces/replaceTableValues/replaceTableValues";

type InputElementChangeEvent = ChangeEvent<HTMLInputElement>;
type SelectElementChangeEvent = ChangeEvent<HTMLSelectElement>;

interface Props {
  form: IReplaceTableValues;
  setForm: (state: IReplaceTableValues) => void;
}

const ModalForm = ({ form, setForm }: Props) => {
  return (
    <form className={styles.form__container}>
      <div>
        <label htmlFor="dateInput">Data</label>
        <input
          type="date"
          name="dateInput"
          onChange={(e: InputElementChangeEvent) => {
            setForm({
              ...form,
              date: e.target.value,
            });
          }}
        />
      </div>
      <div>
        <label htmlFor="category">Categoria</label>
        <select
          name="category"
          onChange={(e: SelectElementChangeEvent) => {
            setForm({
              ...form,
              category: e.target.value,
            });
          }}
        >
          <option value=""></option>
          <option value="food">Alimentação</option>
          <option value="rent">Aluguel</option>
          <option value="salary">Salário</option>
        </select>
      </div>
      <div>
        <label htmlFor="title">Título</label>
        <input
          type="text"
          name="title"
          onChange={(e: InputElementChangeEvent) => {
            setForm({
              ...form,
              title: e.target.value,
            });
          }}
        />
      </div>
      <div>
        <label htmlFor="value">Valor</label>
        <input
          type="number"
          name="value"
          onChange={(e: InputElementChangeEvent) => {
            setForm({
              ...form,
              value: e.target.value,
            });
          }}
        />
      </div>
    </form>
  );
};

export default ModalForm;
