// import Pagination from 'react-bootstrap';

// function Pagination() {
//     let active = 2;
//     let items = [];
//     for (let number = 1; number <= 5; number++) {
//         items.push(
//             <Pagination.Item key={number} active={number === active}>
//                 {number}
//             </Pagination.Item>,
//         );
//     }

//     const paginationBasic = (
//         <div>
//             <Pagination size="sm">{items}</Pagination>
//         </div>
//     );

//     return (
//         render(paginationBasic)
//     )

// }

// export default Pagination;
import React from 'react';

const Pagination = ({ paginate }) => {
    const pageNumbers = [];


    for (let i = 1; i <= 5; i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className='pagination'>
                {pageNumbers.map(number => (
                    <li key={number} className='page-item'>
                        <a onClick={() => paginate(number)} href='!#' className='page-link'>
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Pagination;