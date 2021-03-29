import './App.css';
import restaurant from './restaurant.jpg';

function Header(props) {
  console.log(props);
  return (
    <header>
      <h1>{props.name}'s Kitchen</h1>
    </header>
  );
}

function Main(props) {
  return (
    <section>
      <p>We serve the most {props.adjective} food around.</p>
      <img src={restaurant} alt="napkin and silverware at restaurant" height={200}/>
      <ul style = {{textAlign: "left"}}>
        {props.dishes.map((dish) => <li key={dish.id}>{dish.title}</li>)}
      </ul>
    </section>
  );
}

function Footer(props) {
  return (
    <footer>
      <p>Copyright &copy; {props.year}</p>
    </footer>
  );
}

const dishes = [
  "Macaroni and Cheese",
  "Salmon",
  "Tofu with Vegetables",
  "Minestrone"
];

const dishObjects = dishes.map((dish, i) => ({id: i, title: dish}));
console.log(dishObjects);

function App() {
  return (
    <div className="App">
      <Header name="Espen"/>
      <Main adjective = "amazing" dishes={dishObjects}/>
      <Footer year={new Date().getFullYear()}/>
    </div>
  );
}

export default App;
