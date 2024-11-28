//El uso de fragment para poder agrupar en html
//Podemos escribir variables aqui, si es aqui, no deben cambiar de estado
//ni depender de algun evento por el cliente

const nombre = 'Fernando';
const arr1 = [1,2,3,4];
const obj1 = {nombre: "Fernando"};
const sumar = (a, b) => {
    return a+b
}
export const SegundoComponente= () =>{
//Podemos escribir variables aqui
    return (
    <>
        <h2>Este es mi segundo componente</h2>
        <h3>Tú nombre es {nombre}</h3>
        <h3>El arreglo es {arr1}</h3>
        <h3>El objeto es {obj1.nombre}</h3>
        <h3>El objeto en JSON es {JSON.stringify(obj1)}</h3>
        <p>El resultado es {sumar (8, 9)}</p>
        <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id, odio! Cupiditate, 
            officiis eos. Harum voluptatum adipisci cum! 
            Ab architecto quam adipisci corporis aliquam accusamus facere. Voluptatum, necessitatibus! Nisi, 
            quos impedit!

        </p>
    </>
);
}       