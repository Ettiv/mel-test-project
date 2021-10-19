import {Dispatch} from 'redux';
import axios from 'axios';
import {SWAPI_API} from '../constants/constants';
import { CharactersAction } from '../types/charactersTypes';
import { fetchCharactersError,fetchCharacters,fetchCharactersSucsess, setTotalPages} from '../redux/actionCreators/charactersActionCreators';


export const getCharacters = (page:number) => {
    return async (dispatch:Dispatch<CharactersAction>) => {
        try{
            dispatch(fetchCharacters());
            const response = await axios.get(`${SWAPI_API}/people/?page=${page}`);
            let data: any = await response.data;
            dispatch(setTotalPages(Math.ceil(data.count/10)));
            dispatch(fetchCharactersSucsess(data.results));
        } catch (error) {
            dispatch(fetchCharactersError('Something go wrong'));
        }
    }
}