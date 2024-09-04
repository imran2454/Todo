import Todo from "./Component/Todo";

// import TodoList from "./Component/TodoList";
import { useContext } from "react";
import Home from "./Component/Home";
import { MyContext } from "../Helper/Context";
import Tailwind from "./tailwind";

function App(){
  const user=useContext(MyContext)
  console.log(user);
  
  return(
    <>
   
  <Todo/>

      
    </>
   
  )
}
export default App;