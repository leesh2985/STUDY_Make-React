import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  PokemonListReponseType,
  fetchPokemonsAPI,
} from "../Service/PokemonService";

export const fetchPkoemons = createAsyncThunk(
  "pokemon/fetchPkoemons",
  async (nextUrl?: string) => {
    const response = await fetchPokemonsAPI(nextUrl);
    return response;
  }
);

interface PkoemonsState {
  pokemons: PokemonListReponseType;
}

const initialState = {
  pokemons: {
    count: 0,
    next: "",
    results: [],
  },
} as PkoemonsState;

const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(
      fetchPkoemons.fulfilled,
      (state, action: PayloadAction<PokemonListReponseType>) => {
        if (state.pokemons.results.length > 0) {
          state.pokemons = {
            ...action.payload,
            results: [...state.pokemons.results, ...action.payload.results],
          };
        } else {
          state.pokemons = action.payload;
        }
      }
    );
  },
});

export const pokemonsReducer = pokemonsSlice.reducer;
