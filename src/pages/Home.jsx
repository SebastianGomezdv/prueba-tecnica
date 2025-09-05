import Contenido from "../components/Contenido";
import Header from "../components/Header";
import "./Home.css";
function Home() {
  return (
    <div>
      <Header />
      <section className="contenido-principal">
        <h1>Panel Control</h1>
        <Contenido />
      </section>
    </div>
  );
}

export default Home;
