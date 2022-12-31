import { createContext } from "react";

export const Context = createContext();

export const ContextProvider = (props) => {

	const addOrRemoveFavorite = (movie) => {
		console.log("funcionó");
	};




	return (
		<>
			<Context.Provider value={
				{ addOrRemoveFavorite }
			}>
				{props.children}
			</Context.Provider>
		</>
	);
}

