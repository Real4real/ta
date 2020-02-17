import React from 'react'

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = []
    for (let index = 1; index <= Math.ceil(totalPosts / postsPerPage); index++) {
        pageNumbers.push(index)
    }
    return (
        <nav className="pagination" role="navigation" aria-label="pagination">
            <ul className="pagination-list">
                {pageNumbers.map(number => (
                    <li key={number}>
                        <a className="pagination-link"
                            aria-label="Goto page 3"
                            onClick={()=> paginate(number)}
                        >
                            {number}
                        </a>
                    </li>
                )
                )}

                
            </ul>
        </nav>
    )
}
export default Pagination;
