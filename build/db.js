"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectFunc = void 0;
const mongodb_1 = require("mongodb");
const client = new mongodb_1.MongoClient('mongodb://localhost:27017', { useUnifiedTopology: true });
let collection;
const connectFunc = async () => {
    try {
        await client.connect();
        collection = client.db().collection('user-details');
        console.log('Connected successfully to server');
    }
    catch (_a) {
        console.dir;
    }
};
exports.connectFunc = connectFunc;
//# sourceMappingURL=db.js.map