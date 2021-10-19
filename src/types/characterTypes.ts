import {ICharacter} from "./APITypes";

export enum CharacterActionsTypes {
    FETCH_CHARACTER = "FETCH_CHARACTER",
    FETCH_CHARACTER_SUCSESS = "FETCH_CHARACTER_SUCSESS",
    FETCH_CHARACTER_ERROR = "FETCH_CHARACTER_ERROR"
}

export interface ICharacterState {
    character:ICharacter | null;
    loading: boolean;
    error: null | string;
}

export interface IFetchCharacterAction{
    type: CharacterActionsTypes.FETCH_CHARACTER;
}

export interface IFetchCharacterSucsessAction{
    type: CharacterActionsTypes.FETCH_CHARACTER_SUCSESS;
    payload: ICharacter;
}

export interface IFetchCharacterErrorAction{
    type: CharacterActionsTypes.FETCH_CHARACTER_ERROR
    payload: string;
}

export type CharacterAction = IFetchCharacterAction | IFetchCharacterSucsessAction | IFetchCharacterErrorAction;