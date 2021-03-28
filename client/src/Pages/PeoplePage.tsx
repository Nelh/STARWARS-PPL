import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useLazyQuery, useQuery } from "@apollo/client";
import { GET_PEOPLE_LIST } from '../Graphql/Queries';
import { SEARCH_PEOPLE } from '../Graphql/Queries';

import { Search } from '../Components/SearchComponent';
import { ListItem } from '../Components/ListItemComponent';
import { Pagination } from '../Components/PaginationComponent';

interface Props {
    props: any;
}

const People: React.FC<Props> = (props: any) => {
    let history = useHistory();
    const [search, setSearch ] = useState<string>("");
    let [datas, setDatas] = useState<undefined>();

    let { page } = props.match.params;
    let { loading, error, data } = useQuery(GET_PEOPLE_LIST, {
        variables: { page: page || "page=1"}
    });

    let [handleSearch] = useLazyQuery(SEARCH_PEOPLE, { 
        variables: { name: '/search=' + search },
        onCompleted: (data) => {
            setDatas(data.searchPeople);
        },
    });

    const handleClick = (e: any) => {
        handleSearch();
        if(search.length > 0){
            history.push('/search=' + search);
        } else {
            history.replace("/");
        }
    }

    if(loading) return <h5 className="text-center mt-5">Loading...</h5>;
    if(error) return <h5 className="text-center mt-5">Something went wrong!</h5>;

    let _datas = data.getPeopleList;
    if(datas){
        _datas = datas;
    }

    return (
        <>
        <Search handleChange={e => setSearch(e.target.value)} handleClick={e => handleClick(e)} search={search} />
        <Pagination pagination={_datas} />
        {(_datas.results.map((people: any) => {
            return <ListItem key={people.url} people={people} />
        }))}
        <div className="text-center my-4"><small>Made with <span role="img" aria-label="love">❤</span> by <a href="mailto:nelhamstrong9@gmail.com">Nelh Amstrong</a></small></div>
        </>
    )
}

export default People;
