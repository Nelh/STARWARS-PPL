import React from 'react'

interface Props {
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    search: string;
}

export const Search: React.FC<Props> = ({ handleChange, handleClick, search }) =>  {
    return (
        <div className="input-group mb-3">
            <input type="text" className="form-control" value={search} onChange={handleChange} placeholder="Search something..." autoFocus/>
            <button className="input-group-text" onClick={handleClick}>Search</button>
        </div>
    )
}
