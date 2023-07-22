import { createContext, useState } from "react";
const MyContext=createContext();
 const MyContextProvider=({children})=>{
    const [type,setType]=useState("");
    return (
        <MyContext.Provider value={{type:type,setType:setType}}>
            {children}
        </MyContext.Provider>
    )
};
export {MyContext,MyContextProvider};