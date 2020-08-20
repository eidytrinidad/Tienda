import React,{useContext} from 'react'
import logo from '../img/LOGO.png'
import carrito from '../img/Carrito.png'
import lupa from '../img/Lupa.png'
import carritoB from '../img/CarritoBlanco.png'
import lupaB from '../img/LupaBlanco.png'
import {Link }from 'react-router-dom'
import { TiendaContext } from "../componentes/TiendaProvider";

function Header() {
    const [,,iconColor] = useContext(TiendaContext);
    return (
        <header>
         
            <article className="logo">
                <img src={logo} alt=""/>
            </article>
 
            <nav className="menu">
                <Link  to={{ pathname:"/"}}>Inicio</Link>
                <Link to="#">Blog</Link>
                <Link  to={{ pathname:"tienda"}}>Tienda</Link>
                <Link to="#">Contacto</Link>
            </nav>
            <article className="compras">
                <button><img src={iconColor?carritoB:carrito} alt=""/></button>
                <button><img src={iconColor?lupaB:lupa} alt=""/></button>
            </article>
        </header>
    )
}

export default Header
