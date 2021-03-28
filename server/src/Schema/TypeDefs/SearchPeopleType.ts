import { GraphQLInt, GraphQLList, GraphQLObjectType, GraphQLString } from 'graphql';

const SearchResults = new GraphQLObjectType({
    name: "searchresult",
    fields: () => ({
        name: { type: GraphQLString},
        height: { type: GraphQLString},
        mass: { type: GraphQLString},
        gender:  { type: GraphQLString},
        homeworld:  { type: GraphQLString},
        url: {type: GraphQLString},
    })
});

export const SearchPeopleType = new GraphQLObjectType({
    name: "search",
    fields: {
        count: { type: GraphQLInt },
        next: { type: GraphQLString },
        previous: { type: GraphQLString },
        results: { type: new GraphQLList(SearchResults) }
    }
});