import React, {Component} from "react";
import {createPages} from "./pages";
import {IPaginationPanelProps} from "../../../types/paginatiomPanelProps";

class PaginationPanel extends Component<IPaginationPanelProps> {

    render() {

        let pages:number[] = [];
        createPages(pages,this.props.totalPages,this.props.currentPage);

        return (
            <div>
                <ul className="pagination">
                    {pages.map((page, index) => {
                        return (
                            <li
                                className={page === this.props.currentPage? "page-item active" : "page-item"}
                                key={index}
                                onClick={() => this.props.onClickPage(page)}
                                style={{
                                    cursor:"pointer"
                                }}
                            >
                                <span className="page-link">{page}</span>
                            </li>
                        )
                    }) || null}
                </ul>
            </div>
        );
    }
}

export default PaginationPanel;