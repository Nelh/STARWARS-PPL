"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = void 0;
const graphql_1 = require("graphql");
const Queries_1 = require("./Queries");
const RouteQuery = new graphql_1.GraphQLObjectType({
    name: "RouteQuery",
    fields: {
        getPeopleList: Queries_1.GET_PEOPLES_LIST,
        getPeopleDetails: Queries_1.GET_PEOPLE_DETAILS,
        searchPeople: Queries_1.SEARCH_PEOPLE
    }
});
exports.schema = new graphql_1.GraphQLSchema({
    query: RouteQuery,
});
