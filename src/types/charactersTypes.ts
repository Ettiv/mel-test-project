import {ICharacter} from "./APITypes";

export enum CharactersActionsTypes {
    FETCH_CHARACTERS = "FETCH_CHARACTERS",
    FETCH_CHARACTERS_SUCSESS = "FETCH_CHARACTERS_SUCSESS",
    FETCH_CHARACTERS_ERROR = "FETCH_CHARACTERS_ERROR",
    SET_TOTAL_PAGES = "SET_TOTAL_PAGES",
    SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
}

export interface ICharactersState {
    characters:ICharacter[];
    loading: boolean;
    error: null | string;
    totalPages: number;
    currentPage: number;
}

export interface IFetchCharacterAction{
    type: CharactersActionsTypes.FETCH_CHARACTERS;
}

export interface IFetchCharactersSucsessAction{
    type: CharactersActionsTypes.FETCH_CHARACTERS_SUCSESS;
    payload: ICharacter[];
}

export interface IFetchCharactersErrorAction{
    type: CharactersActionsTypes.FETCH_CHARACTERS_ERROR;
    payload: string;
}

export interface ISetTotalPagesAction{
    type: CharactersActionsTypes.SET_TOTAL_PAGES;
    payload: number;
}

export interface ISetCurrentPageAction{
    type: CharactersActionsTypes.SET_CURRENT_PAGE;
    payload: number;
}

export type CharactersAction = IFetchCharacterAction | IFetchCharactersSucsessAction | IFetchCharactersErrorAction |
    ISetTotalPagesAction| ISetCurrentPageAction;