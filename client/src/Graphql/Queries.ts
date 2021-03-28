import { gql } from '@apollo/client';

export const GET_PEOPLE_LIST = gql`
    query getPeopleList($page: String!) {
        getPeopleList(page: $page) {
            count
            next
            previous
            results {
                name
                mass
                height
                gender
                homeworld
                url
            }
        }
    }
`;


export const GET_PEOPLE_DETAILS = gql`
    query getPeopleDetails($id: Int!) {
        getPeopleDetails(id: $id) {
            name
            mass
            height
            gender
            homeworld
        }
    }
`;

export const SEARCH_PEOPLE = gql`
    query searchPeople($name: String!) {
        searchPeople(name: $name) {
            count
            next
            previous
            results {
                name
                mass
                height
                gender
                homeworld
                url
            }
        }
    }
`;