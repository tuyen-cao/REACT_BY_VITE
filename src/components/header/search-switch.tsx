import * as React from 'react';

export default function SearchSwitch() {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        /* if (document.getElementById('search-model') !== undefined)
            document.getElementById('search-model').style.display = "block"; */
    }
    return (
        <button className="search-switch border-0 bg-transparent" onClick={handleClick}>
            <img src="/img/icon/search.png" alt="" />
        </button>
    );
}
