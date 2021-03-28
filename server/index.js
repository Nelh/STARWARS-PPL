"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_graphql_1 = require("express-graphql");
const path = require('path');
const cors_1 = __importDefault(require("cors"));
const Schema_1 = require("./Schema");
const app = express_1.default();
app.use(cors_1.default());
app.use('/graphql', express_graphql_1.graphqlHTTP({
    schema: Schema_1.schema,
    graphiql: true,
}));
// production ready
app.use(express_1.default.static(path.join(__dirname, 'public')));
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
let PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Running a GraphQL API server at ${PORT}`));
