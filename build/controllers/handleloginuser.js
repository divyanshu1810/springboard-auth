"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleLoginUser = void 0;
const database_1 = __importDefault(require("../loaders/database"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const handleLoginUser = async (req, res) => {
    try {
        const collection = await (0, database_1.default)().then(db => db.collection('users-details'));
        const response = await collection.findOne({ email: req.body.email });
        if (!response) {
            res.send({ statusCode: 409, message: 'User does not exists.' });
        }
        const result = bcrypt_1.default.compareSync(req.body.password, response.password);
        if (result) {
            res.status(200).send('User logged in successfully.');
        }
        res.send({ statusCode: 409, message: 'Invalid Credentials' });
    }
    catch (error) {
        res.status(error.statusCode || 500).send(error.message || 'Internal server error');
    }
};
exports.handleLoginUser = handleLoginUser;
//# sourceMappingURL=handleloginuser.js.map