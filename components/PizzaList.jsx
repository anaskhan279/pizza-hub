import styles from "../styles/PizzaList.module.css";
import PizzaCard from "./PizzaCard"

const PizzaList = ({pizzaList}) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>THE BEST PIZZA IN TOWN</h1>
      <p className={styles.desc}>
        Pizza hub serves the best pizza in this town, We respect our customers and provide them the best we can,
        And our loving customers supports us and enjoy our meal everyday. We also provide various offers to our newly joined customers.
      </p>
      <div className={styles.wrapper}>
         {pizzaList.map((pizza) => (
           <PizzaCard key={pizza._id} pizza={pizza} />
           ))}
      </div>
    </div>
  );
};

export default PizzaList;
