import { createContext } from "react";


export const MyContext = createContext();

export const MyProvider =({children})=>{
    const [isAuthenticated,setIsAuthenticated] = useState(false);

    const values = {isAuthenticated,setIsAuthenticated};

    return (
        <MyContext.Provider value={values} >
            {children}
        </MyContext.Provider>
    )
}