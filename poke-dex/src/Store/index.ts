import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { imageTypeReducer } from "./imageTypeSlice";
import { pokemonsReducer } from "./pokemonsSlice";
import { pokemonsDetailReducer } from "./pokemonDetailSlice";

export const store = configureStore({
  reducer: {
    imageType: imageTypeReducer,
    pokemons: pokemonsReducer,
    pokemonsDetail: pokemonsDetailReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
