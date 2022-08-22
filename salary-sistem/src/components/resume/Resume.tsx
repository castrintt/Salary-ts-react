import React from "react";
import styles from "./Resume.module.css";

type Props = {};

const Resume = (props: Props) => {
  return (
    <div className={styles.resume__container}>
      <div>
        <button>
          <i className="bi bi-arrow-left-square-fill"></i>
        </button>
        <span>Outubro 2021</span>
        <button>
          <i className="bi bi-arrow-right-square-fill"></i>
        </button>
      </div>
      <div>
        <span>Receita</span>
        <span>R$ 7500.00</span>
      </div>
      <div>
        <span>Despesa</span>
        <span>R$ 7500.00</span>
      </div>
      <div>
        <span>Balanço</span>
        <span>R$ 7500.00</span>
      </div>
    </div>
  );
};

export default Resume;
