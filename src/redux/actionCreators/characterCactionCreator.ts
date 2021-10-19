import {
    CharacterActionsTypes,
    IFetchCharacterAction,
    IFetchCharacterErrorAction,
    IFetchCharacterSucsessAction,
} from "../../types/characterTypes"
import {ICharacter} from "../../types/APITypes";

export function fetchCharacter(): IFetchCharacterAction{
    return {
        type: CharacterActionsTypes.FETCH_CHARACTER
    }
}

export function fetchCharacterSucsess(character:ICharacter): IFetchCharacterSucsessAction{
    return {
        type: CharacterActionsTypes.FETCH_CHARACTER_SUCSESS,
        payload: character
    }
}

export function fetchCharacterError(errorString: string): IFetchCharacterErrorAction{
    return {
        type: CharacterActionsTypes.FETCH_CHARACTER_ERROR,
        payload:errorString
    }
}