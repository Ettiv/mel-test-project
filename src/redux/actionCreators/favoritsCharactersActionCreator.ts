import {
    FavoritsCharactersActionsTypes,
    IAddCharacterToFavoritsAction,
    IDeleteCharactersFromFavoritsAction,
} from "../../types/favoritsCharactersTypes"

import {ICharacter} from "../../types/APITypes";

export function addCharacterToFavorit(character:ICharacter): IAddCharacterToFavoritsAction{
    return {
        type: FavoritsCharactersActionsTypes.ADD_CHARACTER_TO_FAVORITS,
        payload: character
    }
}

export function deleteCharacterFromFavorits(character:ICharacter): IDeleteCharactersFromFavoritsAction{
    return {
        type: FavoritsCharactersActionsTypes.DELETE_CHARACTER_FROM_FAVORITS,
        payload: character
    }
}