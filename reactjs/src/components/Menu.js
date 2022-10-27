import '../styles/Menu.css';
import {useState} from "react";

function Menu(props){
    const [elems,setElems] = useState(10);
    const [paused,setPaused] = useState(false);


    const handleNumber = (e) =>{
        setElems(e.target.value);
        props.setCant(e.target.value);
    }

    const handlePlay = (e) =>{
        setPaused(!paused);
    }

    return(
        <div className="principal">
            <label>Algoritmo:</label>
            <select name="algoritmo" id="algoritmo">
                <option value="ins" default>Inserción</option>
                <option value="sel">Selección</option>
                <option value="bub">Burbuja</option>
                <option value="qks">Quicksort</option>
                <option value="mrg">Mergesort</option>
                <option value="cts">Cocktail</option>
                <option value="hps">Heapsort</option>
            </select>
            <label>Elementos:</label>
            <input type="number" name="elementos" id="elementos" value={elems} min="3" max="24" onChange={handleNumber} />
            <label>Velocidad:</label>
            <select name="velocidad" id="velocidad">
                <option value="normal"  default>Normal</option>
                <option value="lento">Lento</option>
                <option value="rapido">Rápido</option>
            </select>
            <div className="boton-exterior">    
                <div className={paused?'boton pause':'boton'} onClick={handlePlay}></div>
            </div>
        </div>
    );
}

export default Menu;