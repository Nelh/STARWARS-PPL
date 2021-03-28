import axios from 'axios';
import { GraphQLInt, GraphQLString } from 'graphql';
import { PeoplesType } from '../TypeDefs/PeopleType';
import { PeoplesDetailsType } from '../TypeDefs/PeopleDetailsType';
import { SearchPeopleType } from '../TypeDefs/SearchPeopleType';

/**
 *  GET ALL PEOPLE LIST
 */
export const GET_PEOPLES_LIST = {
    type: PeoplesType,
    args: { page: { type: GraphQLString}},
    async resolve(parent: any, args: any) {
        const res = await axios.get(`http://swapi.dev/api/people/?${args.page}`);
        return res.data;
    }
}

/**
 * GET SINGLE PERSON
 */
export const GET_PEOPLE_DETAILS = {
    type: PeoplesDetailsType,
    args: { id: { type: GraphQLInt}},
    async resolve(parent: any, args: any) {
        const res = await axios.get(`https://swapi.dev/api/people/${args.id}`);
        return res.data;
    }
}

/**
 * SEARCH SINGLE PERSON
 */

export const SEARCH_PEOPLE = {
    type: SearchPeopleType,
    args: { name: { type: GraphQLString}},
    async resolve(parent:any, args: any) {
        const res =  await axios.get(`https://swapi.dev/api/people/${args.name}`);
        return res.data;
    }
}