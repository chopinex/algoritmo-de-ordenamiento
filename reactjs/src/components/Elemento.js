import '../styles/Elemento.css';

function Elemento(props){
    return(
        <div className="cuadro" style={{width: props.size,height: props.size,backgroundColor: props.color}}> </div>
    );
}

export default Elemento;