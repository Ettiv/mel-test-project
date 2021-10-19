import {
    CharactersActionsTypes,
    IFetchCharacterAction,
    IFetchCharactersErrorAction,
    IFetchCharactersSucsessAction,
    ISetTotalPagesAction,
    ISetCurrentPageAction
} from "../../types/charactersTypes"
import {ICharacter} from "../../types/APITypes";

export function fetchCharacters(): IFetchCharacterAction{
    return {
        type: CharactersActionsTypes.FETCH_CHARACTERS
    }
}

export function fetchCharactersSucsess(characters:ICharacter[]): IFetchCharactersSucsessAction{
    return {
        type: CharactersActionsTypes.FETCH_CHARACTERS_SUCSESS,
        payload: characters
    }
}

export function fetchCharactersError(errorString: string): IFetchCharactersErrorAction{
    return {
        type: CharactersActionsTypes.FETCH_CHARACTERS_ERROR,
        payload:errorString
    }
}

export function setTotalPages(totalPages: number): ISetTotalPagesAction{
    return {
        type: CharactersActionsTypes.SET_TOTAL_PAGES,
        payload:totalPages
    }
}

export function setCurrentPage(page: number): ISetCurrentPageAction{
    return {
        type: CharactersActionsTypes.SET_CURRENT_PAGE,
        payload:page
    }
}