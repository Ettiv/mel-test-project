import {ICharacter} from "./APITypes";

export interface ICharacterCardProps {
    character: ICharacter,
    favoritsCharacters:ICharacter[],
    addCharacterToFavorit:(character:ICharacter) => void,
    deleteCharacterFromFavorit:(character:ICharacter) => void
}