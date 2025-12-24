// function Car(props) {
//     let cars = ["BMW", "Toyota", "Audi", "Lamborghini"];
//     // const {brand, model, color, year} = props;
//     const {brand, model, ...rest} = props;
//     const welcome = () => {
//         alert ("Welcome to my Cars Library")
//     }
//     return (
//         <>
//         {/* <h2>This is {brand}. <br/> And The color is {color}</h2> */}

//         <h2>This is {brand}. <br/> And The color is {rest.color}</h2>
//         <button onClick={welcome}>Click Me</button>
//         <h1>My Cars:</h1>
//         <ul>
//             {cars.map((car)=> <li>{car}</li>)}
//         </ul>
//         </>
//   )
  
// }

// export default Car