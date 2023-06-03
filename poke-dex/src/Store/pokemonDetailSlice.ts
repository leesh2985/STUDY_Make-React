import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  PokemonDetailType,
  fetchPkoemonDetailAPI,
} from "../Service/PokemonService";
import { RootState } from ".";

export const fetchPkoemonDetail = createAsyncThunk(
  "pokemon/fetchPkoemonDetail",
  async (name: string) => {
    const response = await fetchPkoemonDetailAPI(name);
    return response;
  },
  {
    condition: (name, { getState }) => {
      const { pokemonDetail } = getState() as RootState;
      const pokemon = pokemonDetail.pokemonDetails[name];

      return !pokemon;
    },
  }
);

interface PkoemonsDetailsState {
  // pokemonsDetails:{ '이상해씨':PokemonDetailType, '피카츄':PokemonDetailType,}
  pokemonsDetails: Record<string, PokemonDetailType>;
}

const initialState = {
  pokemonsDetails: {},
} as PkoemonsDetailsState;

const pokemonsDetailsSlice = createSlice({
  name: "pokemonsDetails",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(
      fetchPkoemonDetail.fulfilled,
      (state, action: PayloadAction<PokemonDetailType>) => {
        state.pokemonsDetails = {
          ...state.pokemonsDetails,
          [action.payload.name]: action.payload,
        };
      }
    );
  },
});

export const pokemonsDetailReducer = pokemonsDetailsSlice.reducer;
