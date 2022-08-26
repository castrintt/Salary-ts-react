import styles from "./Resume.module.css";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { IListText } from "../../interfaces/category/listCategory";
import { IUserInterface } from "../../interfaces/resume/userInterface";
import { IBalanceInterface } from "../../interfaces/resume/balanceInterface";
import { monthArray } from "../../utils/monthArray";

const Resume = () => {
  const { listOfValues, category } = useSelector(
    (state: RootState) => state.category
  );
  const [dateIndex, setDateIndex] = useState<{ year: number; month: number }>({
    year: 2022,
    month: 1,
  });

  const [userData, setUserData] = useState<IUserInterface>({
    expenditure: 0,
    revenue: 0,
  });
  const filterByCategory = (): IUserInterface => {
    const filter: IBalanceInterface = { expenditure: [0], revenue: [0] };
    listOfValues.map((values: IListText) => {
      if (values.category === "salary")
        filter.revenue.push(Number(values.value));
      else filter.expenditure.push(Number(values.value));
    });
    setUserData({
      ...userData,
      expenditure: filter.expenditure.reduce(
        (previous: number, current: number) => previous + current
      ),
      revenue: filter.revenue.reduce(
        (previous: number, current: number) => previous + current
      ),
    });
    return userData;
  };

  const alternateToMonth = (type: string) => {
    if (type === "increment") {
      if (dateIndex.month === 12) {
        return setDateIndex({
          ...dateIndex,
          month: 1,
        });
      }
      return setDateIndex({
        ...dateIndex,
        month: dateIndex.month + 1,
      });
    } else if (type === "decrement") {
      if (dateIndex.month === 1) {
        return setDateIndex({
          ...dateIndex,
          month: 12,
        });
      }
      return setDateIndex({
        ...dateIndex,
        month: dateIndex.month - 1,
      });
    }
  };  

  useEffect(() => {
    filterByCategory();
  }, [listOfValues, category]);

  return (
    <div className={styles.resume__container}>
      <div>
        <button onClick={() => alternateToMonth("decrement")}>
          <i className="bi bi-arrow-left-square-fill"></i>
        </button>
        <span>{monthArray[dateIndex.month]} 2022</span>
        <button onClick={() => alternateToMonth("increment")}>
          <i className="bi bi-arrow-right-square-fill"></i>
        </button>
      </div>
      <div>
        <span>Receita</span>
        <span className={styles.revenues}>{`R$ ${userData.revenue.toFixed(
          2
        )}`}</span>
      </div>
      <div>
        <span>Despesa</span>
        <span
          className={styles.expenditures}
        >{`R$ ${userData.expenditure.toFixed(2)}`}</span>
      </div>
      <div>
        <span>Balanço</span>
        <span
          className={
            userData.revenue - userData.expenditure > 0
              ? styles.revenues
              : styles.expenditures
          }
        >{`R$ ${(userData.revenue - userData.expenditure).toFixed(2)}`}</span>
      </div>
    </div>
  );
};

export default Resume;
