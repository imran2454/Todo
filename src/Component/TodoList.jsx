import { useState } from "react";

function TodoList(){
    const[title,setTitle]=useState('')
    const[desc, setDesc]=useState('')
    const [maintask, setMainTask]=useState([])

    const submitHandler=(e)=>{
        e.preventDefault()
        setMainTask([...maintask,{title,desc}]);
        // console.log(title);
        // console.log(desc);
        setTitle('')
        setDesc('')
        console.log(maintask);

    }
        const deletHandalar=(i)=>{
            let copyTask=[...maintask]
            copyTask.splice(i,1)
            setMainTask(copyTask)
           }
          
    let taskRender=<h1>Task Not Avilable</h1>;
        taskRender=maintask.map((t,i)=>{
          return(
            <div key={i}>
                <h1>{t.title}</h1>
                <h5>{t.desc}</h5>
                <button onClick={(i)=>{
                   deletHandalar(i)
                }}>Delet</button>
            </div>
            
          )
         })
    return(
        <div>
            <form onSubmit={submitHandler}>
                <input type="text"
                 placeholder="Enter your name" 
                 value={title}
                    onChange={(e)=>{
                //    console.log(e.target.value);
                setTitle(e.target.value)
                   
                    
                 }}
                 />
                <input type="text" 
                placeholder="Enter your class"
                value={desc}
                onChange={(e)=>{
                    // console.log(e.target.value);
                setDesc(e.target.value)
                    
                }}
                
                />
                <button>Add</button>
            </form><hr></hr>
            <div>
                <ul>
                {taskRender}
                </ul>

            </div>
        </div>
    )

}
export default TodoList;