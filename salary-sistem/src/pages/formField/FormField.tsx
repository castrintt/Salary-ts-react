import styles from "./FormField.module.css";

const FormField = () => {
  return (
    <form className={styles.form}>
      <div>
        <label htmlFor="dateTime">Data</label>
        <input type="date" name="dateTime" />
      </div>
      <div>
        <label htmlFor="category">Categoria</label>
        <select name="category">
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
        </select>
      </div>
      <div>
        <label htmlFor="title">Título</label>
        <input type="text" name="title" />
      </div>
      <div>
        <label htmlFor="value">Valor</label>
        <input type="number" name="value" />
      </div>
      <input type="submit" value="Adicionar" />
    </form>
  );
};

export default FormField;
