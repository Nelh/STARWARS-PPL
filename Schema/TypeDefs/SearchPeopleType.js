"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchPeopleType = void 0;
const graphql_1 = require("graphql");
const SearchResults = new graphql_1.GraphQLObjectType({
    name: "searchresult",
    fields: () => ({
        name: { type: graphql_1.GraphQLString },
        height: { type: graphql_1.GraphQLString },
        mass: { type: graphql_1.GraphQLString },
        gender: { type: graphql_1.GraphQLString },
        homeworld: { type: graphql_1.GraphQLString },
        url: { type: graphql_1.GraphQLString },
    })
});
exports.SearchPeopleType = new graphql_1.GraphQLObjectType({
    name: "search",
    fields: {
        count: { type: graphql_1.GraphQLInt },
        next: { type: graphql_1.GraphQLString },
        previous: { type: graphql_1.GraphQLString },
        results: { type: new graphql_1.GraphQLList(SearchResults) }
    }
});
