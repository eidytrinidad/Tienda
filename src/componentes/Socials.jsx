import React,{useEffect,useContext,useState} from 'react'
import { TiendaContext } from "../componentes/TiendaProvider";
import FB from '../img/FB.png'
import TW from '../img/TW.png'
import IG from '../img/IG.png'
import FBblanco from '../img/FBblanco.png'
import TWBlanco from '../img/TWBlanco.png'
import IGBlanco from '../img/IGBlanco.png'
import styled from 'styled-components'

const Section=styled.section`
/* background-color:red; */
display:flex;
flex-direction:column;
float:right;
margin-top:10px;
z-index:1;
/* position:absolute;
right:5%;
top:15%; */

a{
    margin-bottom:0.7rem;
}

`

function Socials() {
    const [,,iconColor] = useContext(TiendaContext);
    console.log(iconColor)
    // const [src, setSrc] = useState()
    // iconColor ? setSrc(FBblanco) : setSrc(FB)
   console.log()
    return (
       <Section>
          
            <a href="#"> <img src={iconColor?FBblanco:FB} alt=""/></a>
            <a href="#"><img src={iconColor?IGBlanco:IG} alt=""/></a>
            <a href="#"><img src={iconColor?TWBlanco:TW} alt=""/></a>
        </Section>
        
    )
}

export default Socials


