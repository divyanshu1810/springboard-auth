"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleCreateUser = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const database_1 = __importDefault(require("../loaders/database"));
const handleCreateUser = async (req, res) => {
    try {
        const collection = await (0, database_1.default)().then(db => db.collection('users-details'));
        const response = await collection.findOne({ email: req.body.email });
        if (response) {
            throw { statusCode: 409, message: 'User already exists.' };
        }
        const saltRounds = 10; // Replace with your desired number of salt rounds
        const hash = await bcrypt_1.default.hash(req.body.password, saltRounds);
        await collection.insertOne({ email: req.body.email, password: hash, name: req.body.name });
        res.status(201).send('User created successfully.');
    }
    catch (error) {
        res.status(error.statusCode || 500).send(error.message || 'Internal server error');
    }
};
exports.handleCreateUser = handleCreateUser;
//# sourceMappingURL=handlecreateuser.js.map