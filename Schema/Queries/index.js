"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SEARCH_PEOPLE = exports.GET_PEOPLE_DETAILS = exports.GET_PEOPLES_LIST = void 0;
const axios_1 = __importDefault(require("axios"));
const graphql_1 = require("graphql");
const PeopleType_1 = require("../TypeDefs/PeopleType");
const PeopleDetailsType_1 = require("../TypeDefs/PeopleDetailsType");
const SearchPeopleType_1 = require("../TypeDefs/SearchPeopleType");
/**
 *  GET ALL PEOPLE LIST
 */
exports.GET_PEOPLES_LIST = {
    type: PeopleType_1.PeoplesType,
    args: { page: { type: graphql_1.GraphQLString } },
    resolve(parent, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield axios_1.default.get(`http://swapi.dev/api/people/?${args.page}`);
            return res.data;
        });
    }
};
/**
 * GET SINGLE PERSON
 */
exports.GET_PEOPLE_DETAILS = {
    type: PeopleDetailsType_1.PeoplesDetailsType,
    args: { id: { type: graphql_1.GraphQLInt } },
    resolve(parent, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield axios_1.default.get(`https://swapi.dev/api/people/${args.id}`);
            return res.data;
        });
    }
};
/**
 * SEARCH SINGLE PERSON
 */
exports.SEARCH_PEOPLE = {
    type: SearchPeopleType_1.SearchPeopleType,
    args: { name: { type: graphql_1.GraphQLString } },
    resolve(parent, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield axios_1.default.get(`https://swapi.dev/api/people/${args.name}`);
            return res.data;
        });
    }
};
