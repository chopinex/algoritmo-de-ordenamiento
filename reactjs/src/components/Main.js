import Elemento from './Elemento.js';
import {useState} from "react";
import '../styles/Main.css';

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

function Main(props){
    const itemRefs = useRef([]);

    const elems=[];
    const rojo = (227-247)/props.cant;
    const verde = (45-255)/props.cant;
    const azul = 72/props.cant;
    const tam = 72/props.cant;
    
    const [swap1,setSwap1]=useState(0);
    const [swap2,setSwap2]=useState(9);

    for(let i=0;i<props.cant;i++){
        elems.push(<Elemento size={18+tam*i + 'px'} color={'rgb(' + String(247+rojo*i) +
         ',' + String(255+verde*i) + ',' + String(azul*i) + ')'} key={i} />);
    }

    shuffle(elems);
    console.log(elems[i]);

    return(
        <div className="central">
            {elems}
        </div>
    );
}

export default Main;