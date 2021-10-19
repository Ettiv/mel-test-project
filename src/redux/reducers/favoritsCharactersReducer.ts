import {
    FavoritsCharactersAction,
    FavoritsCharactersActionsTypes,
    IFavoritsCharactersState
} from "../../types/favoritsCharactersTypes"
import {ICharacter} from "../../types/APITypes";

const initialState: IFavoritsCharactersState = {
    favoritsCharacters:[]
}

export const favaritsCharactersReducer = (state = initialState, action: FavoritsCharactersAction) : IFavoritsCharactersState => {
    switch (action.type){
        case FavoritsCharactersActionsTypes.ADD_CHARACTER_TO_FAVORITS:
            return {
                ...state,
                favoritsCharacters:[...state.favoritsCharacters, action.payload]
            }
        case FavoritsCharactersActionsTypes.DELETE_CHARACTER_FROM_FAVORITS:
            const newFavoritsCharaters: ICharacter[] = state.favoritsCharacters.filter(character => character.url !== action.payload.url)
            return {
                ...state,
                favoritsCharacters:newFavoritsCharaters
            }
        default:
            return state
    }
}