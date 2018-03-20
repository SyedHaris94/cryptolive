import React, {Component} from 'react'
import '../../css/style-main.css'


import Pagination from "react-js-pagination";


// react-router
import { Link } from "react-router-dom";


class HomePagination extends React.Component{
    
    constructor(props) {
        super(props);
        this.state = {
          activePage: 1
        };
        this.handlePageChange = this.handlePageChange.bind(this)
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

               
                     <div className="col-md-12" align="center">

                         {/* <Pagination
                        activePage={this.state.activePage}
                        itemsCountPerPage={10}
                        totalItemsCount={450}
                        pageRangeDisplayed={5}
                        onChange={this.handlePageChange}
                    /> */}

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





// import React from 'react';
// import Pagination from 'react-paginating';

// const fruits = [
//   ['coconut', 'blueberry'],
//   ['payaya', 'peach'],
//   ['pear', 'plum']
//   ['apple', 'orange'],
//   ['banana', 'avocado'],
//   ['coconut', 'blueberry'],
//   ['payaya', 'peach'],
//   ['pear', 'plum']
// ];
// const limit = 10;
// const pageCount = 5;
// const total = fruits.length * limit;

// class HomePagination extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       currentPage: 1
//     };
//   }

//   handlePageChange = page => {
//     this.setState({
//       currentPage: page
//     });
//   };

//   render() {
//     const { currentPage } = this.state;
//     return (
//       <div>
//         <ul>
//           {fruits[currentPage - 1].map(item => <li key={item}>{item}</li>)}
//         </ul>
//         <Pagination
//           total={total}
//           limit={limit}
//           pageCount={pageCount}
//           currentPage={currentPage}
//         >
//           {({
//             pages,
//             currentPage,
//             hasNextPage,
//             hasPreviousPage,
//             previousPage,
//             nextPage,
//             totalPages,
//             getPageItemProps
//           }) => (
//             <div>
//               <button
//                 {...getPageItemProps({
//                   pageValue: 1,
//                   onPageChange: this.handlePageChange
//                 })}
//               >
//                 first
//               </button>

//               {hasPreviousPage && (
//                 <button
//                   {...getPageItemProps({
//                     pageValue: previousPage,
//                     onPageChange: this.handlePageChange
//                   })}
//                 >
//                   {'<'}
//                 </button>
//               )}

//               {pages.map(page => {
//                 let activePage = null;
//                 if (currentPage === page) {
//                   activePage = { backgroundColor: '#fdce09' };
//                 }
//                 return (
//                   <button
//                     key={page}
//                     style={activePage}
//                     {...getPageItemProps({
//                       pageValue: page,
//                       onPageChange: this.handlePageChange
//                     })}
//                   >
//                     {page}
//                   </button>
//                 );
//               })}

//               {hasNextPage && (
//                 <button
//                   {...getPageItemProps({
//                     pageValue: nextPage,
//                     onPageChange: this.handlePageChange
//                   })}
//                 >
//                   {'>'}
//                 </button>
//               )}

//               <button
//                 {...getPageItemProps({
//                   pageValue: totalPages,
//                   onPageChange: this.handlePageChange
//                 })}
//               >
//                 last
//               </button>
//             </div>
//           )}
//         </Pagination>
//       </div>
//     );
//   }
// }

// export default HomePagination;