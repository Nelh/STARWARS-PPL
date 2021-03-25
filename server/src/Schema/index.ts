import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { GET_PEOPLES_LIST, GET_PEOPLE_DETAILS, SEARCH_PEOPLE } from './Queries';

const RouteQuery = new GraphQLObjectType({
    name: "RouteQuery",
    fields: {
        getPeople: GET_PEOPLES_LIST,
        getPeopleDetails: GET_PEOPLE_DETAILS,
        searchPeople: SEARCH_PEOPLE
    }
});

export const schema = new GraphQLSchema({
    query: RouteQuery,
});