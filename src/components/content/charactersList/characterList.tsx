import React, {Component} from "react";
import {getCharacters} from "../../../services/charactersService";
import {setCurrentPage} from "../../../redux/actionCreators/charactersActionCreators"
import {connect} from "react-redux";
import {ICharacter} from "../../../types/APITypes";
import CharacterCard from "../characterCard/characterCard";
import {CharacterListProps} from "../../../types/characterListTypes";
import PaginationPanel from "../../uiComponents/pagiationPanel/paginationPanel";
import Spinner from "../../uiComponents/spinner/spiner";
import {RootState} from '../../../redux/reducers/rootReducer';

class CharacterList extends Component<CharacterListProps> {

    constructor(props:CharacterListProps) {
        super(props);
        this.onChangePage = this.onChangePage.bind(this);
    }

    componentDidMount() {
        this.props.fetchCharacters(1);
        this.props.setCurrentPage(1);
    }

    onChangePage(page:number): void{
        this.props.setCurrentPage(page);
        this.props.fetchCharacters(page);
    }

    render() {

        if (this.props.characters.loading){
            return (
                <div className='d-flex align-items-center justify-content-center m-5'>
                    <Spinner/>
                </div>
            )
        }

        if(this.props.characters.error){
            return (
                <div>
                    {this.props.characters.error}
                </div>
            )
        }

        return (
            <div className='d-flex flex-column align-items-center h-100 '>
                <h1 className='m-4'>Characters</h1>
                <div className='w-100 row row-cols row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-1 flex-grow-1 flex-shrink-0'>
                    {this.props.characters.characters.map((character: ICharacter) => {
                        return (
                            <div>
                                <CharacterCard
                                    key={character.url}
                                    character={character}
                                />
                            </div>
                        )
                    })}
                </div>
                <PaginationPanel
                    currentPage={this.props.characters.currentPage}
                    onClickPage={this.onChangePage}
                    totalPages={this.props.characters.totalPages}
                />
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        fetchCharacters: (page: number) => dispatch(getCharacters(page)),
        setCurrentPage: (page: number) => dispatch(setCurrentPage(page))
    }
}

const mapStateToProps= (state:RootState) => {
    return {
        characters: state.characters
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CharacterList);