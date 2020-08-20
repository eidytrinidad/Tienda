import React,{useEffect,useContext} from "react";
import Audifonos from '../img/audifonos.png'
import bgInicio from "../img/fondo5.png";
import { TiendaContext } from "../componentes/TiendaProvider";
function Hero() {
  const [background, setBackground,,setIconColor] = useContext(TiendaContext);
  useEffect(() => {
    setIconColor(false)
    setBackground(bgInicio)
}, [])
  return (
    <section className="hero">
     <div className="contenedor">
     <article className="descripcion">
        <h2>SIENTE LA MUSICA DE UNA MANERA DIFERENTE</h2>
        <button className="btnVerMas">VER MAS</button>
      </article>
      <article className="audifonos">
          <img src={Audifonos} alt=""/>
      </article>
     </div>
    </section>
  );
}

export default Hero;
