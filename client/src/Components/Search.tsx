import React from 'react'

interface Props {
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    search: string;
}

export const Search: React.FC<Props> = ({ handleChange, search }) =>  {
    return (
        <div className="input-group mb-3">
            <input type="text" className="form-control" value={search} onChange={handleChange} placeholder="Search something..." autoFocus/>
            <span className="input-group-text">Search</span>
        </div>
    )
}
