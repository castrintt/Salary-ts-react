import styles from "./FormField.module.css";
import { ChangeEvent, MouseEvent } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import {
  categoryPicker,
  datePicker,
  titlePicker,
  valuePicker,
  putValuesOnList,
} from "../../redux/reducers/categorySlice";

const FormField = () => {
  type EventChange = ChangeEvent<HTMLInputElement>;

  const { date, category, title, value } = useSelector(
    (state: RootState) => state.category
  );
  const dispatch = useDispatch();

  return (
    <form className={styles.form}>
      <div>
        <label htmlFor="dateTime">Data</label>
        <input
          type="date"
          name="dateTime"
          onChange={(e: EventChange) => {
            dispatch(datePicker(e.target.value));
          }}
          value={date}
        />
      </div>
      <div>
        <label htmlFor="category">Categoria</label>
        <select
          name="category"
          onChange={(e: ChangeEvent<HTMLSelectElement>) => {
            dispatch(categoryPicker(e.target.value));
          }}
          value={category}
        >
          <option value={""}>{""}</option>
          <option value={"food"}>Alimentação</option>
          <option value={"rent"}>Aluguel</option>
          <option value={"salary"}>Salário</option>
        </select>
      </div>
      <div>
        <label htmlFor="title">Título</label>
        <input
          type="text"
          name="title"
          onChange={(e: EventChange) => {
            dispatch(titlePicker(e.target.value));
          }}
          value={title}
        />
      </div>
      <div>
        <label htmlFor="value">Valor</label>
        <input
          type="number"
          name="value"
          onChange={(e: EventChange) => {
            dispatch(valuePicker(e.target.value));
          }}
          value={value}
        />
      </div>
      <input
        type="submit"
        value="Adicionar"
        onClick={(e: MouseEvent<HTMLInputElement>) => {
          e.preventDefault();
          dispatch(
            putValuesOnList({
              date,
              category,
              title,
              value,
            })
          );
        }}
      />
    </form>
  );
};

export default FormField;
