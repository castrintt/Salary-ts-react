import styles from "./Table.module.css";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { IListText } from "../../interfaces/category/listCategory";

const TABLE_HEAD: string[] = ["Data", "Categoria", "Título", "Valor"];

const Table = () => {
  const { listOfValues } = useSelector((state: RootState) => state.category);

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
              <span>{values.date}</span>
              <span>{values.category}</span>
              <span>{values.title}</span>
              <span
                className={Number(values.value) > 0 ? styles.green : styles.red}
              >{`R$ ${values.value},00`}</span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Table;
