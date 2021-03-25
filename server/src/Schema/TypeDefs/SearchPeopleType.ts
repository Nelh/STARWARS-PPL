import { GraphQLInt, GraphQLList, GraphQLObjectType, GraphQLString } from 'graphql';

const SearchResults = new GraphQLObjectType({
    name: "searchresult",
    fields: () => ({
        name: {type: GraphQLString},
        height: {type: GraphQLString},
        mass: {type: GraphQLString},
        hair_color: {type: GraphQLString},
        skin_color: {type: GraphQLString},
        eye_color: {type: GraphQLString},
        birth_year: {type: GraphQLString},
        gender: {type: GraphQLString},
        homeworld: {type: GraphQLString}
    })
});

export const SearchPeopleType = new GraphQLObjectType({
    name: "search",
    fields: {
        count: { type: GraphQLInt },
        next: { type: GraphQLString },
        results: { type: new GraphQLList(SearchResults) }
    }
});