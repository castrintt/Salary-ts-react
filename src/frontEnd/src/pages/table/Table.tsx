import styles from "./Table.module.css";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { IListText } from "../../interfaces/category/listCategory";
import { replaceValue } from "../../redux/reducers/categorySlice";
import { openModal } from "../../redux/reducers/editModalSlice";
import ModalEdit from "./modalEdit/ModalEdit";

const TABLE_HEAD: string[] = ["Data", "Categoria", "Título", "Valor"];

const Table = () => {
  const { listOfValues } = useSelector((state: RootState) => state.category);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const { isOpen } = useSelector((state: RootState) => state.editModal);
  const dispatch = useDispatch();

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

  const onClickFunction = (value: number) => {
    dispatch(openModal());
    setSelectedIndex(value);
  };

  return (
    <React.Fragment>
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
              <React.Fragment>
                <div key={index}>
                  <span>{values?.date.replaceAll("-", "/")}</span>
                  <span>{filterCategory(values.category)}</span>
                  <span>{values?.title}</span>
                  <div>
                    <span
                      className={
                        values?.category !== "salary"
                          ? styles.red
                          : styles.green
                      }
                    >{`R$ ${Number(values?.value).toFixed(2)}`}</span>
                    <button
                      className={styles.edit__button_table}
                      onClick={() => onClickFunction(index)}
                    >
                      Editar
                    </button>
                  </div>
                </div>
              </React.Fragment>
            ))}
        </div>
      </div>
      {isOpen && <ModalEdit index={selectedIndex} />}
    </React.Fragment>
  );
};

export default Table;
