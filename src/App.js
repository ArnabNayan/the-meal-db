// import logo from './logo.svg';
import './App.css';
import Categories from './Components/Categories/Categories';



function App() {
  return (
    <div className="App">
     <Categories></Categories>
    </div>
  );
}
// function LoadData(props){
//   const[charge,setcharge]=useState(100)
//   const boostCharge=()=>{
//     if(charge>0){
//      const newCharge=charge-10;
//       setcharge(newCharge);
//     }
//     else{
//       return;
//     }
//   }
//   return(
//     <div>
//       <h1>Name:{props.name}</h1>
//       <button onClick={boostCharge}>Charge</button>
//       <h4>Power:{charge}</h4>
//     </div>
//   )
// }

export default App;
