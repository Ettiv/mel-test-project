import React, {Component} from "react";
import {RouteComponentProps} from "react-router";
import {RootState} from "../../../redux/reducers/rootReducer";
import {connect} from "react-redux";
import {getCharacter} from "../../../services/characterService";
import {withRouter} from "react-router";
import {ICharacterState} from "../../../types/characterTypes";
import Spinner from "../../uiComponents/spinner/spiner";


interface ICharacterProps extends RouteComponentProps{
    fetchCharacter:(url:string) => void,
    character:ICharacterState
}

class Character extends Component<ICharacterProps, any>{

    componentDidMount() {
        const state = this.props.location.state as { url: string }
        this.props.fetchCharacter(state.url);
    }



    render() {
        if(this.props.character.loading){
            return (
                <div className='m-5 d-flex justify-content-center align-items-center'>
                    <Spinner/>
                </div>
            )
        }

        if(this.props.character.error){
            return (
                <div className='m-5 d-flex justify-content-center align-items-center'>
                    {this.props.character.error}
                </div>
            )
        }

        return (
            <div className='w-100 d-flex flex-column align-items-center'>
                <div>
                    <h1>{this.props.character.character?.name}</h1>
                </div>
                <div>
                    Gender: {this.props.character.character?.gender}
                </div>
                <div>
                    Birthday: {this.props.character.character?.birth_year}
                </div>
                <div>
                    Eye color: {this.props.character.character?.eye_color}
                </div>
                <div>
                    Hair color: {this.props.character.character?.hair_color}
                </div>
                <div>
                    Mass: {this.props.character.character?.mass}
                </div>
                <div>
                    Height: {this.props.character.character?.height}
                </div>
                <div>
                    Skin color: {this.props.character.character?.skin_color}
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        fetchCharacter: (url: string) => dispatch(getCharacter(url))
    }
}

const mapStateToProps= (state:RootState) => {
    return {
        character: state.characterReducer
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Character));
