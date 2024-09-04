import { useState } from "react"
import './Todo.css'

function Todo(){
    const [title,setTitle]=useState('')
    const [desc, setDesc]=useState('')
    const [mainTask,setMainTask]=useState([])
    const submitHandler=(e)=>{
       e.preventDefault();
       setMainTask([...mainTask,{title,desc}]);
    //    console.log(title);
    //    console.log(desc);
       setDesc('');
       setTitle('');
       console.log(mainTask);
    }
       
       const deletHandalar=(i)=>{
        let copyTask=[...mainTask]
        copyTask.splice(i,1)
        setMainTask(copyTask)
       }
       
        
        
    let renderTask=<h2>No Task Avilable</h2>
    if(mainTask.length>0){
        renderTask=mainTask.map((t,i)=>{
            return <div className="result-details">
                   
                        <div  key={i} >
                            <h2>{t.title}</h2>
                             <p>{t.desc}</p>
                        </div>
                   
                <button className="btnDelet" onClick={()=>{
                    deletHandalar(i)
                }}>Delet</button>
            </div>
        })
    }
    return(

        <div>
            <div className="main-heading">MY TODO LIST</div>
            <form  onSubmit={submitHandler}>
                <input type="text" 
                placeholder="Enter Your Title" 
                value={title}
                onChange={(e)=>{
                    setTitle(e.target.value);
                    
                }}
                />
                <input type="text"
                 placeholder="Enter Your Description" 
                 value={desc}
                 onChange={(e)=>{
                    setDesc(e.target.value)
                    
                 }}
                 
                 />
                <button className="btnAdd">Add</button>
            </form>
            <hr/>
            <hr/>
            <div>
                <ul>
                {renderTask}
                </ul>
            </div>


        </div>
    )

}
export default Todo