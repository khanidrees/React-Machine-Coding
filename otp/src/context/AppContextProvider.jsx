import { createContext, useReducer } from "react";

const AppContext = createContext();

const AppContextProvider = ({children})=>{

    const [state, dispatch] = useReducer((state,action)=>{

        if(action?.type=="toggle"){
            return !state;
        }else{
            throw Error("No Such action")
        }
    },false);

    function toggleState(){
        dispatch({type:"toggle"});
    }
    let value = [
        state,
        toggleState
    ]

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}

export default AppContextProvider;

export {AppContext};