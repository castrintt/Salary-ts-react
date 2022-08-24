import styles from "./Resume.module.css";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { IListText } from "../../interfaces/category/listCategory";
import { IUserInterface } from "../../interfaces/resume/userInterface";

const Resume = () => {
  const { listOfValues, category } = useSelector(
    (state: RootState) => state.category
  );
  const [userData, setUserData] = useState<IUserInterface>({
    expenditure: 0,
    revenue: 0,
  });
  const resumeExpenditures = (): void => {
    const expenditures = listOfValues.filter((values: IListText) => {
      return values.category !== "salary";
    });
    const expendituresList: number[] = [];
    expenditures.map((values: IListText) => {
      expendituresList.push(Number(values.value));
    });
    let expenditureTotal: number = 0;
    expendituresList.map((values: number): number => {
      expenditureTotal += values;
      return expenditureTotal;
    });
    setUserData({
      ...userData,
      expenditure: expenditureTotal,
    });
  };

  const resumeRevenue = (): void => {
    const revenues = listOfValues.filter((values: IListText) => {
      return values.category === "salary";
    });
    const revenuesList: number[] = [];
    revenues.map((values: IListText) => {
      revenuesList.push(Number(values.value));
    });
    let revenuesTotal: number = 0;
    revenuesList.map((values: number) => {
      revenuesTotal += values;
      return revenuesTotal;
    });
    setUserData({
      ...userData,
      revenue: revenuesTotal,
    });
  };

  useEffect(() => {
    category === "salary" ? resumeRevenue() : resumeExpenditures();
  }, [listOfValues, category]);

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
        <span className={styles.revenues}>{`R$ ${userData.revenue}`}</span>
      </div>
      <div>
        <span>Despesa</span>
        <span
          className={styles.expenditures}
        >{`R$ ${userData.expenditure}`}</span>
      </div>
      <div>
        <span>Balanço</span>
        <span
          className={
            userData.revenue - userData.expenditure > 0
              ? styles.revenues
              : styles.expenditures
          }
        >{`R$ ${userData.revenue - userData.expenditure}`}</span>
      </div>
    </div>
  );
};

export default Resume;
