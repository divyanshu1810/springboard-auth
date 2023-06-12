"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkcreateuser = void 0;
const user_1 = require("../models/user");
const checkcreateuser = async (req, res, next) => {
    try {
        await user_1.userschema.validate(req.body);
        next();
    }
    catch (error) {
        res.json({ statusCode: 421, message: error.message });
    }
};
exports.checkcreateuser = checkcreateuser;
//# sourceMappingURL=checkcreateuser.js.map