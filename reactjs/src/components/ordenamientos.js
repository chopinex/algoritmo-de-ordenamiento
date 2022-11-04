function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export const insercion = async (props) => {
    let i, j, key;
    for(i=1;i<props.arreglo.length;i++){
        key=props.arreglo[i];
        j=i-1;
        while(j>=0 && props.arreglo[j] > key){
            props.setSwap1(key);
            props.setSwap2(j+1);
            props.arreglo[j+1] =props.arreglo[j];
            j=j-1;
        }
        props.arreglo[j+1]=key;
        await sleep(1300);
        props.elems=props.arreglo;
    }
}