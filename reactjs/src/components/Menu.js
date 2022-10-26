import '../styles/Menu.css';
import {useState} from "react";

function Menu(){
    const [elems,setElems] = useState(10);

    const handleNumber = (e) =>{
        setElems(e.target.value);
    }

    return(
        <div className="principal">
            Algoritmo:
            <select name="algoritmo" id="algoritmo">
                <option value="ins" default>Inserción</option>
                <option value="sel">Selección</option>
                <option value="bub">Burbuja</option>
                <option value="qks">Quicksort</option>
                <option value="mrg">Mergesort</option>
                <option value="cts">Cocktail</option>
                <option value="hps">Heapsort</option>
            </select>
            Elementos:
            <input type="number" name="elementos" id="elementos" value={elems} min="2" max="20" onChange={handleNumber} />
            Velocidad
        </div>
    );
}

export default Menu;