import Elemento from './Elemento.js';
import {useState,useEffect} from "react";
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

    const elems=[];
    const rojo = (227-247)/props.cant;
    const verde = (45-255)/props.cant;
    const azul = 72/props.cant;
    const tam = 72/props.cant;
    
    const [bancho,setBancho]=useState(Array(props.cant).fill('2px'));
    const [bcolor,setBcolor]=useState(Array(props.cant).fill('lightslategray'));
    const [swap1,setSwap1]=useState(0);
    const [swap2,setSwap2]=useState(2);
    const [separacion,setSeparacion]=useState(0);
    

    for(let i=0;i<props.cant;i++){
        elems.push(<Elemento size={18+tam*i + 'px'} color={'rgb(' + String(247+rojo*i) +
         ',' + String(255+verde*i) + ',' + String(azul*i) + ')'} bancho={bancho[i]} 
         bcolor={bcolor[i]} key={i} />);
    }
    
    shuffle(elems);

    useEffect(() =>{
        const newAnchos = Array(props.cant).fill('2px');
        const newColor = Array(props.cant).fill('lightslategray');
        
        for(let i=0;i<props.cant;i++) {
            if (i===swap1 || i===swap2){
                newAnchos[i] = '4px';
                newColor[i] = 'deepskyblue';
            }
            else{
                newAnchos[i] = '2px';
                newColor[i] = 'lightslategray';   
            }
        };

        setBancho(newAnchos);
        setBcolor(newColor);
    },[props.cant]);

    useEffect(() =>{
        let sep=0;
        for(let i=swap1+1;i<swap2;i++)
            sep+=parseFloat(elems[i].props.size.slice(0,-2))+4;
        sep+=parseFloat(elems[swap1].props.size.slice(0,-2))/2+4;
        sep+=parseFloat(elems[swap2].props.size.slice(0,-2))/2+4;
        setSeparacion(sep);

    },[swap1,swap2]);

    return(
        <div className="central" on>
            {elems}
        </div>
    );
}

export default Main;