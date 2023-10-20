// import createContext, useState
import { createContext, useState } from "react";

export const Context = createContext();
export const ModeContext = ({children}) => {
    const [lightMode, setLightMode] = useState(false);

    const changeTheme = (e) => {
        if (e.target.checked) {
            setLightMode(true);
        } else {
            setLightMode(false);
        }
    }

    const globalStates = {changeTheme};
    <Context.Provider value={globalStates}>
        <div className={lightMode ? 'lightMode' : ''}>{children}</div>
    </Context.Provider>
}