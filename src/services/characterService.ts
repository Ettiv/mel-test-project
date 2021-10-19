import {Dispatch} from 'redux';
import axios from 'axios';
import { CharacterAction } from '../types/characterTypes';
import { fetchCharacterError,fetchCharacter,fetchCharacterSucsess} from '../redux/actionCreators/characterCactionCreator';


export const getCharacter = (url:string) => {
    return async (dispatch:Dispatch<CharacterAction>) => {
        try{
            dispatch(fetchCharacter());
            const response = await axios.get(url);
            let data: any = await response.data;
            dispatch(fetchCharacterSucsess(data));
        } catch (error) {
            dispatch(fetchCharacterError('Something go wrong'));
        }
    }
}