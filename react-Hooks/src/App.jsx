import { useState } from "react";
import "./App.css";

function App() {
  //count
  let [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  }

  const decrement = () => {
    setCount(count - 1);
  }
  const double = () => {
    if (count <= 100) {
      setCount(count * 2);
    }else if (count > 100) {
      setCount(count * 3);
    } 
  }

  //Password
  let [password,setPassword]=useState("");
  let [updatePassword,setUpdatePassword]=useState("password empty");

  const changePassword= (e)=>{
// setPassword(password);
let pw=e.target.value;
setPassword(pw);
if(pw.length >6){
  setUpdatePassword("Strong password");
}else{
  setUpdatePassword("weak password");
}
  }



  return (
    <>
      <div className="App">
        <h2>Count: {count}</h2>
        <button onClick={increment}>Increase</button>
        <button onClick={decrement}>Decrease</button>
        <button onClick={double}>Double</button>

      </div>

      <div className="App1">
        <input type="password" placeholder="enter pw" onChange={changePassword} value={password}/>
        <h3>{updatePassword}</h3>
      </div>
    </>
  );

}
export default App;