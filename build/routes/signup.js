"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const checkcreateuser_1 = require("../middlewares/checkcreateuser");
const handlecreateuser_1 = require("../controllers/handlecreateuser");
const signup = (0, express_1.Router)();
signup.post('/', checkcreateuser_1.checkcreateuser, handlecreateuser_1.handleCreateUser);
exports.default = signup;
//# sourceMappingURL=signup.js.map