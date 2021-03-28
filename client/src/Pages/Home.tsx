import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useLazyQuery, useQuery } from "@apollo/client";
import { GET_PEOPLE_LIST } from '../Graphql/Queries';
import { SEARCH_PEOPLE } from '../Graphql/Queries';

import { Search } from '../Components/Search';
import { ListItem } from '../Components/ListItem';
import { Pagination } from '../Components/Pagination';

interface Props {
    props: any;
}

const Home: React.FC<Props> = (props: any) => {
    const [search, setSearch ] = useState<string>("");
    let [datas, setDatas] = useState<undefined>();
    let history = useHistory();

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

    const handleChange = (e: any) => {
        let target = e.target.value;
        setSearch(target);
        handleSearch();
        if(target.length > 0){
            history.push('/search=' + target);
        } else {
            history.replace("/");
        }
    }

    if(loading) return <h4 className="text-center mt-5">Loading...</h4>;
    if(error) return <h4 className="text-center mt-5">Something went wrong!</h4>;

    let _datas = data.getPeopleList;
    if(datas){
        _datas = datas;
    }

    return (
        <div className="container mt-5">
            <Search handleChange={e => handleChange(e)} search={search} />
            <Pagination pagination={_datas} />
            {(_datas.results.map((people: any) => {
                return <ListItem key={people.url} people={people} />
            }))}
        </div>
    )
}

export default Home;
