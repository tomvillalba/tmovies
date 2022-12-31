import { createContext } from "react";

export const Context = createContext();

export const ContextProvider = (props) => {
	let x = 20;
	return (
		<Context.Provider value={x}>
			{props.children}
		</Context.Provider>
	);
};


