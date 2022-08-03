import Cards from "./components/Cards";
import Header from "./components/Header";
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/Footer";

const img = [{
  id: 1,
  src: "https://cdn.pixabay.com/photo/2016/08/16/17/20/elevators-1598431_960_720.jpg",
  titulo: "Elevadores futuristas",
  description: "En el futuro viviremos en ciudades cerradas por la contaminación",
}, {
  id: 2,
  src: "https://cdn.pixabay.com/photo/2017/10/17/19/11/fantasy-2861815_960_720.jpg",
  titulo: "Invasión Alienigena",
  description: "Con el paso de los años conoceremos nuevas civilizaciones, algunas podrían ser increíblemente mas inteligentes que nosotros",
}, {
  id: 3,
  src: "https://cdn.pixabay.com/photo/2017/12/10/17/00/robot-3010309_960_720.jpg",
  titulo: "Super Humanos",
  description: "Debido al cruce entre ciencias generaremos Super Humanos mitad Robots",
}];

function App() {
  return (
    <div className="container">
    <Header titulo='Galería de Imágenes con React'/>
    <Cards img={img} />
    <Footer/>
    </div>
  );
}

export default App;
