import React, {Component} from "react";
import {ICharacter} from "../../../types/APITypes";
import CharacterCard from "../characterCard/characterCard";
import {RootState} from "../../../redux/reducers/rootReducer";
import {connect} from "react-redux";

interface IFavoritCharactersPropsType {
    favoritsCharacters: ICharacter[]
}

interface IFavoritCharactersStateType{
    sortedByName: boolean
}

class FavoritCharacters extends Component<IFavoritCharactersPropsType, IFavoritCharactersStateType>{

    constructor(props: IFavoritCharactersPropsType) {
        super(props);

        this.state = {
            sortedByName: false
        }
    }

    render() {

        let favorits:ICharacter[] = [...this.props.favoritsCharacters];

        if(this.state.sortedByName){
            favorits = favorits.sort((a, b) => a.name.localeCompare(b.name));
        } else {
            favorits = [...this.props.favoritsCharacters];
        }

        if (this.props.favoritsCharacters.length === 0) {
            return (
                <div className='d-flex flex-column align-items-center h-100 '>
                    <h1 className='m-4'>Favorits</h1>
                    <div>No favorits</div>
                </div>
            )
        }



        return (
            <div className='d-flex flex-column align-items-center h-100 '>
                <div className='m-4 d-flex flex-column align-items-center'>
                    <h1 className='m-2'>Favorits</h1>
                    <div className=''>
                        <input
                            className="form-check-input"
                            type="checkbox"
                            id="defaultCheck1"
                            defaultChecked={this.state.sortedByName}
                            onClick={() => {
                                this.setState({
                                    sortedByName: !this.state.sortedByName
                                })
                            }}
                        />
                        <label className="form-check-label" htmlFor="defaultCheck1">
                            Sort by name
                        </label>
                    </div>
                </div>
                <div
                    className=' w-100 row row-cols row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-1 flex-grow-1 flex-shrink-0'>
                    {favorits.map((favoritCharacter: ICharacter) => {
                        return (
                            <div>
                                <CharacterCard
                                    key={favoritCharacter.url}
                                    character={favoritCharacter}
                                />
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: RootState) => {
    return {
        favoritsCharacters: state.favaritsCharactersReducer.favoritsCharacters
    }
}

export default connect(mapStateToProps, null)(FavoritCharacters);