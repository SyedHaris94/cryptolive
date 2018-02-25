import React, {Component} from 'react'
import '../../css/style-main.css'


import Pagination from "react-js-pagination";



class HomePagination extends React.Component{
    
    constructor(props) {
        super(props);
        this.state = {
          activePage: 15
        };
      }

    handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    this.setState({activePage: pageNumber});
    }

    render(){
        return(
            <div>
                {/* <!-- HOME PAGINATION --> */}
                <section id="homepage-pagination">

                    {/* <Pagination
                        activePage={this.state.activePage}
                        itemsCountPerPage={10}
                        totalItemsCount={450}
                        pageRangeDisplayed={5}
                        onChange={this.handlePageChange}
                    /> */}

                    <div className="col-md-12" align="center">
                        <ul className="pagination">
                            <li><a href="#">{'<'} Prev</a></li>
                            <li><a href="#">1</a></li>
                            <li><a href="#">2</a></li>
                            <li><a href="#">3</a></li>
                            <li><a href="#">4</a></li>
                            <li><a href="#">5</a></li>
                            <li><a href="#">Next {'>'}</a></li>
                        </ul>
                    </div>

                </section>
                {/* <!-- HOME PAGINATION ENDS --> */}
            </div>
        );
    }
}


export default HomePagination;