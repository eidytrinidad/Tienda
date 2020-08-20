import React,{useState,useEffect,createContext} from 'react'
import axios from 'axios'


export const TiendaContext = createContext();

function TiendaProvider({children}) {

    const [background, setBackground] = useState();
    const [iconColor, setIconColor] = useState(true);

 
    return (
        <TiendaContext.Provider value={[background,setBackground,iconColor,setIconColor]}>
            {children}
        </TiendaContext.Provider>
    )
}

export default TiendaProvider
