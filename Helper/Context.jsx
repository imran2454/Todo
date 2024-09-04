import { createContext } from "react";
export const MyContext=createContext()
const Context=({children})=>{
    const userName='Hellow this is real computer'
    
    return(
        <div>
            <MyContext.Provider value={userName}>
                {children}

            </MyContext.Provider>

        </div>

    )

}
export default Context;