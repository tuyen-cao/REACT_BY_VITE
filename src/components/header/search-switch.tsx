import * as React from 'react';

export interface SearchSwitchProps {
}

export default function SearchSwitch(props: SearchSwitchProps) {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        document.getElementById('search-model')!.style.display = "block";
    }
    return (
        <button className="search-switch border-0 bg-transparent" onClick={handleClick}>
            <img src="/img/icon/search.png" alt="" />
        </button>
    );
}
