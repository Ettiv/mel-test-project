import {ICharacter} from "./APITypes";

export enum FavoritsCharactersActionsTypes {
    ADD_CHARACTER_TO_FAVORITS = "ADD_CHARACTER_TO_FAVORITS",
    DELETE_CHARACTER_FROM_FAVORITS = "DELETE_CHARACTER_FROM_FAVORITS"
}

export interface IFavoritsCharactersState {
    favoritsCharacters:ICharacter[];
}

export interface IAddCharacterToFavoritsAction{
    type: FavoritsCharactersActionsTypes.ADD_CHARACTER_TO_FAVORITS;
    payload:ICharacter;
}

export interface IDeleteCharactersFromFavoritsAction{
    type: FavoritsCharactersActionsTypes.DELETE_CHARACTER_FROM_FAVORITS;
    payload: ICharacter;
}

export type FavoritsCharactersAction = IAddCharacterToFavoritsAction | IDeleteCharactersFromFavoritsAction;