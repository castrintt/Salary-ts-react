import styles from "./FormField.module.css";
import { ChangeEvent, MouseEvent, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import {
  categoryPicker,
  datePicker,
  titlePicker,
  valuePicker,
  putValuesOnList,
} from "../../redux/reducers/categorySlice";
type EventChange = ChangeEvent<HTMLInputElement>;

const FormField = () => {
  const [disabledButton, setDisabledButton] = useState<boolean>(false);
  const { date, category, title, value } = useSelector(
    (state: RootState) => state.category
  );
  const dispatch = useDispatch();
  const disabledButtonFunction = (setter: (newState: boolean) => void) => {
    if (date && category && title && value) {
      setter(false);
    } else {
      setter(true);
    }
  };

  useEffect(() => {
    disabledButtonFunction(setDisabledButton);
  }, [date, category, title, value]);
  return (
    <form className={styles.form}>
      <div>
        <label htmlFor="dateTime">Data</label>
        <input
          required
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
          required
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
          required
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
          required
          type="number"
          name="value"
          onChange={(e: EventChange) => {
            dispatch(valuePicker(e.target.value));
          }}
          value={value}
        />
      </div>
      <input
        required
        type="submit"
        value="Adicionar"
        disabled={disabledButton}
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
