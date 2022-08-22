import { useSelector, useDispatch } from "react-redux";
import Header from "./components/header/Header";
import Resume from "./components/resume/Resume";
import FormField from "./pages/formField/FormField";
import Table from "./pages/table/Table";
import { food, rent, salary } from "./redux/reducers/categorySlice";
import { RootState } from "./redux/store";

function App() {
  const { date, category, title, value } = useSelector(
    (state: RootState) => state.category
  );
  const dispatch = useDispatch();

  return (
    <div className="App">
      <Header />
      <Resume />
      <FormField />
      <Table />
    </div>
  );
}

export default App;
