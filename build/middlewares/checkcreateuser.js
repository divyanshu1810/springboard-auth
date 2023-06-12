"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkcreateuser = void 0;
const signupschema_1 = require("../models/signupschema");
const checkcreateuser = async (req, res, next) => {
    try {
        await signupschema_1.signupschema.validate(req.body);
        next();
    }
    catch (error) {
        res.json({ statusCode: 421, message: error.message });
    }
};
exports.checkcreateuser = checkcreateuser;
//# sourceMappingURL=checkcreateuser.js.map