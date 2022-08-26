import styles from "./Table.module.css";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { IListText } from "../../interfaces/category/listCategory";

const TABLE_HEAD: string[] = ["Data", "Categoria", "Título", "Valor"];

const Table = () => {
  const { listOfValues, date } = useSelector(
    (state: RootState) => state.category
  );

  const filterCategory = (value: string): string => {
    switch (value) {
      case "salary":
        return "Salário";
      case "rent":
        return "Aluguel";
      case "food":
        return "Alimentação";
      default:
        return "";
    }
  };

  const filterListPerDate = () => {};

  useEffect(() => {
    filterListPerDate();
  }, [date]);

  return (
    <div className={styles.table}>
      <div className={styles.table__head}>
        {TABLE_HEAD.map((values: string, index: number) => (
          <React.Fragment key={index}>
            <span>{values}</span>
          </React.Fragment>
        ))}
      </div>
      <div className={styles.table__body}>
        {listOfValues &&
          listOfValues.map((values: IListText, index: number) => (
            <div key={index}>
              <span>{values?.date}</span>
              <span>{filterCategory(values.category)}</span>
              <span>{values?.title}</span>
              <span
                className={
                  values?.category !== "salary" ? styles.red : styles.green
                }
              >{`R$ ${Number(values?.value).toFixed(2)}`}</span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Table;
