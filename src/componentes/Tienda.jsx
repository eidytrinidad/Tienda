import React,{useEffect,useContext} from 'react'
import { TiendaContext } from "../componentes/TiendaProvider";
import bgTienda from "../img/fondoTienda.png";
import bluetooth from "../img/bluetooth.png";
import carrito from '../img/CarritoBlanco.png'
import productos from '../data/productos.json'
function Tienda() {
    const [, setBackground,,setIconColor] = useContext(TiendaContext);
    useEffect(() => {
        setBackground(bgTienda)
        setIconColor(true)
    }, [setBackground,setIconColor])
    return (
        <section className="Tienda">
            <div className="contenedor">

               {
                   productos.map(producto=>(
                    <article key={producto.id} className="producto">
                    <div className="imagen">
                    <img src={producto.img} alt=""/>
                    </div>
                    <div className="texto">
                   <p className="nombre">{producto.nombre}</p>
                   <p>{producto.descripcion}</p>
                        <button className="btnAgregar">Agregar <img  src={carrito} alt=""/> </button>
                    </div>
                </article>
                   ))
              
                }

       

            </div>
        </section>
    )
}

export default Tienda
