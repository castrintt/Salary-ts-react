import styles from "./Table.module.css";
import React from "react";

const TABLE_HEAD: string[] = ["Data", "Categoria", "Título", "Valor"];

const Table = () => {
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
        {TABLE_HEAD.map((values: string, index: number) => (
          <React.Fragment key={index}>
            <span>{values}</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Table;
