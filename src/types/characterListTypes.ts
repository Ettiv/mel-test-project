import {ICharactersState} from "./charactersTypes";

export interface CharacterListProps {
    fetchCharacters: (page: number) => void,
    setCurrentPage: (page: number) => void,
    characters: ICharactersState
}