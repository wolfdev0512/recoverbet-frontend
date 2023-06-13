import React from 'react';
import './style.css'

const Pager = ({ page, total, onChange }) => {
    const setPage = (page) => {
        if (page > total - 1) page = total - 1
        if (page < 0) page = 0
        onChange(page)
    }

    return (
        <div className='pager'>
            <button className='btn btn-primary' onClick={() => setPage(page - 1)} disabled={total === 0 || page === 0}>
                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.8044 7.8441H1.69727M1.69727 7.8441L8.75084 14.8977M1.69727 7.8441L8.75084 0.790527" stroke="white" stroke-opacity="0.35" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </button>
            <div>
                <button className='btn btn-primary' onClick={() => setPage(1)} disabled={total === 0 || page === 0}>
                    1
                </button>
                {/* <button className='btn btn-primary' onClick={() => setPage(2)} disabled={total === 0 || page === 0}>
                    2
                </button>
                <button className='btn btn-primary' onClick={() => setPage(3)} disabled={total === 0 || page === 0}>
                    3
                </button> */}
                <button className='btn btn-primary' onClick={() => setPage(4)} disabled={total === 0 || page === 0}>
                    ...
                </button>
                {/* <button className='btn btn-primary' onClick={() => setPage(page - 1)} disabled={total === 0 || page === 0}>
                8
            </button>
            <button className='btn btn-primary' onClick={() => setPage(page - 1)} disabled={total === 0 || page === 0}>
                9
            </button> */}
                {/* <button className='btn btn-primary' onClick={() => setPage(10)} disabled={total === 0 || page === 0}>
                    10
                </button> */}
            </div>
            <button className='btn btn-primary' onClick={() => setPage(page + 1)} disabled={total === 0 || page === total - 1}>
                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.19559 7.8441H15.3027M15.3027 7.8441L8.24916 14.8977M15.3027 7.8441L8.24916 0.790527" stroke="white" stroke-opacity="0.35" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </button>
        </div>
    )
}

export default Pager
