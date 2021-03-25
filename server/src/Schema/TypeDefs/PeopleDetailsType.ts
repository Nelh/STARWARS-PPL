import { GraphQLObjectType, GraphQLString } from 'graphql';

export const PeoplesDetailsType = new GraphQLObjectType({
    name: "peopleDetails",
    fields: {
        name: {type: GraphQLString},
        height: {type: GraphQLString},
        mass: {type: GraphQLString},
        hair_color: {type: GraphQLString},
        skin_color: {type: GraphQLString},
        eye_color: {type: GraphQLString},
        birth_year: {type: GraphQLString},
        gender: {type: GraphQLString},
        homeworld: {type: GraphQLString}
    }
});