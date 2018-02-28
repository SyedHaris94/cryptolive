import React, {Component} from 'react'
import '../../css/style-main.css'


import Pagination from "react-js-pagination";


// react-router
import { Link } from "react-router-dom";


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
                            <li>
                            <Link to='/' onClick={window.scrollTo(0, 0)} style={{ textDecoration: "none" }}>
                                {'<'} Prev   
                                </Link></li>
                            <li> <Link to='/' onClick={window.scrollTo(0, 0)} style={{ textDecoration: "none" }}>
                                1
                                </Link>
                                </li>
                            <li> <Link to='/table2' onClick={window.scrollTo(0, 0)} style={{ textDecoration: "none" }}>
                                2
                                </Link>
                            </li>
                            <li> <Link to='/table3' onClick={window.scrollTo(0, 0)} style={{ textDecoration: "none" }}>
                                3
                                </Link></li>
                            <li> <Link to='/table4' onClick={window.scrollTo(0, 0)} style={{ textDecoration: "none" }}>
                                4
                                </Link></li>
                                <li> <Link to='/table5' onClick={window.scrollTo(0, 0)} style={{ textDecoration: "none" }}>
                                5
                                </Link>
                            </li>
                            <li> <Link to='/table6' onClick={window.scrollTo(0, 0)} style={{ textDecoration: "none" }}>
                                6
                                </Link></li>
                            <li> <Link to='/table7' onClick={window.scrollTo(0, 0)} style={{ textDecoration: "none" }}>
                                7
                                </Link></li>
                            <li> <Link to='/table8' onClick={window.scrollTo(0, 0)} style={{ textDecoration: "none" }}>
                                8
                                </Link>
                            </li>
                            <li> <Link to='/table9' onClick={window.scrollTo(0, 0)} style={{ textDecoration: "none" }}>
                                9
                                </Link></li>
                            <li> <Link to='/table10' onClick={window.scrollTo(0, 0)} style={{ textDecoration: "none" }}>
                                10
                                </Link></li>

                            <li> <Link to='/table10' onClick={window.scrollTo(0, 0)} style={{ textDecoration: "none" }}>
                            Next {'>'}
                                </Link></li>

                            {/* <li><a href="#">Next {'>'}</a></li> */}
                        </ul>
                    </div>

                </section>
                {/* <!-- HOME PAGINATION ENDS --> */}
            </div>
        );
    }
}


export default HomePagination;





// import React, {Component} from 'react'
// import '../../css/style-main.css'
// import _ from 'lodash'
// import PropTypes from 'prop-types';


// const propTypes = {
//     items: PropTypes.array.isRequired,
//     onChangePage: PropTypes.func.isRequired,
//     initialPage: PropTypes.number
// }
//  
// const defaultProps = {
//     initialPage: 1
// }
//  
// class HomePagination extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { pager: {} };
//     }
//  
//     componentWillMount() {
//         // set page if items array isn't empty
//         if (this.props.items && this.props.items.length) {
//             this.setPage(this.props.initialPage);
//         }
//     }
//  
//     componentDidUpdate(prevProps, prevState) {
//         // reset page if items array has changed
//         if (this.props.items !== prevProps.items) {
//             this.setPage(this.props.initialPage);
//         }
//     }
//  
//     setPage(page) {
//         var items = this.props.items;
//         var pager = this.state.pager;
//  
//         if (page < 1 || page > pager.totalPages) {
//             return;
//         }
//  
//         // get new pager object for specified page
//         pager = this.getPager(items.length, page);
//  
//         // get new page of items from items array
//         var pageOfItems = items.slice(pager.startIndex, pager.endIndex + 1);
//  
//         // update state
//         this.setState({ pager: pager });
//  
//         // call change page function in parent component
//         this.props.onChangePage(pageOfItems);
//     }
//  
//     getPager(totalItems, currentPage, pageSize) {
//         // default to first page
//         currentPage = currentPage || 1;
//  
//         // default page size is 10
//         pageSize = pageSize || 10;
//  
//         // calculate total pages
//         var totalPages = Math.ceil(totalItems / pageSize);
//  
//         var startPage, endPage;
//         if (totalPages <= 10) {
//             // less than 10 total pages so show all
//             startPage = 1;
//             endPage = totalPages;
//         } else {
//             // more than 10 total pages so calculate start and end pages
//             if (currentPage <= 6) {
//                 startPage = 1;
//                 endPage = 10;
//             } else if (currentPage + 4 >= totalPages) {
//                 startPage = totalPages - 9;
//                 endPage = totalPages;
//             } else {
//                 startPage = currentPage - 5;
//                 endPage = currentPage + 4;
//             }
//         }
//  
//         // calculate start and end item indexes
//         var startIndex = (currentPage - 1) * pageSize;
//         var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
//  
//         // create an array of pages to ng-repeat in the pager control
//         var pages = _.range(startPage, endPage + 1);
//  
//         // return object with all pager properties required by the view
//         return {
//             totalItems: totalItems,
//             currentPage: currentPage,
//             pageSize: pageSize,
//             totalPages: totalPages,
//             startPage: startPage,
//             endPage: endPage,
//             startIndex: startIndex,
//             endIndex: endIndex,
//             pages: pages
//         };
//     }
//  
//     render() {
//         var pager = this.state.pager;
//  
//         if (!pager.pages || pager.pages.length <= 1) {
//             // don't display pager if there is only 1 page
//             return null;
//         }
//  
//         return (
//                <div>
//                      {/* <!-- HOME PAGINATION --> */}
//                          <section id="homepage-pagination">
    
//                              {/* <Pagination
//                              activePage={this.state.activePage}
//                              itemsCountPerPage={10}
//                              totalItemsCount={450}
//                              pageRangeDisplayed={5}
//                              onChange={this.handlePageChange}
//                          /> */}
    
//                         <div className="col-md-12" align="center">
//                             <ul className="pagination">
//                                 <li className={pager.currentPage === 1 ? 'disabled' : ''}>
//                                     <a onClick={() => this.setPage(1)}>{'<'} First</a>
//                                 </li>
//                                 <li className={pager.currentPage === 1 ? 'disabled' : ''}>
//                                     <a onClick={() => this.setPage(pager.currentPage - 1)}>Prev</a>
//                                 </li>
//                                 {pager.pages.map((page, index) =>
//                                     <li key={index} className={pager.currentPage === page ? 'active' : ''}>
//                                         <a onClick={() => this.setPage(page)}>{page}</a>
//                                     </li>
//                                 )}
//                                 <li className={pager.currentPage === pager.totalPages ? 'disabled' : ''}>
//                                     <a onClick={() => this.setPage(pager.currentPage + 1)}>Next</a>
//                                 </li>
//                                 <li className={pager.currentPage === pager.totalPages ? 'disabled' : ''}>
//                                     <a onClick={() => this.setPage(pager.totalPages)}>Last {'>'}</a>
//                                 </li>
//                             </ul>
                                            
//                         </div>
    

           
//                      </section>
//                      {/* <!-- HOME PAGINATION ENDS --> */}
//                  </div>
//         );
//     }
// }
//  
// HomePagination.propTypes = propTypes;
// HomePagination.defaultProps = defaultProps;
// export default HomePagination;