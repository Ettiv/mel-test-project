import {combineReducers} from 'redux';
import {charactersReducer} from './charactersReducer';
import {favaritsCharactersReducer} from './favoritsCharactersReducer'
import {characterReducer} from "./characterReducer";


export const rootReducer = combineReducers({
    characters: charactersReducer,
    favaritsCharactersReducer: favaritsCharactersReducer,
    characterReducer:characterReducer
})

export type RootState = ReturnType<typeof rootReducer>