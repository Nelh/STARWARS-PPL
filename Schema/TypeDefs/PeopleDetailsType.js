"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PeoplesDetailsType = void 0;
const graphql_1 = require("graphql");
exports.PeoplesDetailsType = new graphql_1.GraphQLObjectType({
    name: "peopleDetails",
    fields: {
        name: { type: graphql_1.GraphQLString },
        height: { type: graphql_1.GraphQLString },
        mass: { type: graphql_1.GraphQLString },
        hair_color: { type: graphql_1.GraphQLString },
        skin_color: { type: graphql_1.GraphQLString },
        eye_color: { type: graphql_1.GraphQLString },
        birth_year: { type: graphql_1.GraphQLString },
        gender: { type: graphql_1.GraphQLString },
        homeworld: { type: graphql_1.GraphQLString }
    }
});
