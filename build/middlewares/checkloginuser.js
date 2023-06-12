"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkloginuser = void 0;
const loginschema_1 = require("../models/loginschema");
const checkloginuser = async (req, res, next) => {
    try {
        await loginschema_1.loginschema.validate(req.body);
        next();
    }
    catch (error) {
        res.json({ statusCode: 421, message: error.message });
    }
};
exports.checkloginuser = checkloginuser;
//# sourceMappingURL=checkloginuser.js.map