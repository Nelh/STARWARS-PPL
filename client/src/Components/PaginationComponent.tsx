import React from 'react';
import { Link } from 'react-router-dom';

interface Data {
    count: number;
    next: string;
    previous: string;
    results: any;
}

interface Props {
    pagination: Data;
}

export const Pagination: React.FC<Props> = ({pagination}) => {
    let last_page = Math.ceil(pagination.count / 10);

    let current_page;
    if(pagination.next !== null) {
        let current = pagination.next.split('page=');
        current_page = parseInt(current[current.length - 1]) - 1;
    } else current_page = last_page;

    // get next page
    let next_page;
    if(pagination.next != null){
        const next = pagination.next.split('/?');
        next_page = next[next.length-1];
    }

    // get previous page
    let previous_page;
    if(pagination.previous != null){
        const previous = pagination.previous.split('/?');
        previous_page = previous[previous.length-1];
    }

    return (
        <>
            <nav aria-label="Page navigation">
                <ul className="pagination">
                    <li className={`page-item ${previous_page === undefined ? 'disabled' : ''}`}>
                        <Link to={`/${previous_page}`} className='page-link'>Previous</Link>
                    </li>
                    <li className={`page-item ${next_page === undefined ? 'disabled' : ''}`}>
                        <Link to={`/${next_page}`} className='page-link'>Next</Link>
                    </li>
                </ul>
            </nav>
            <div className="mb-3">Page {current_page} of {last_page + " | " + pagination.count} results</div>
        </>
    )
}