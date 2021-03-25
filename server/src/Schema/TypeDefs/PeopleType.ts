import { GraphQLInt, GraphQLList, GraphQLObjectType, GraphQLString } from 'graphql';

const PeopleResult = new GraphQLObjectType({
    name: "peopleresult",
    fields: () => ({
        name: { type: GraphQLString},
        height: { type: GraphQLString},
        mass: { type: GraphQLString},
        gender:  { type: GraphQLString},
        homeworld:  { type: GraphQLString},
        url: {type: GraphQLString},
    })
});

export const PeoplesType = new GraphQLObjectType({
    name: "people",
    fields: {
        count: { type: GraphQLInt },
        next: { type: GraphQLString },
        results: { type: new GraphQLList(PeopleResult) }
    }
});

