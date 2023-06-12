"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const checkloginuser_1 = require("../middlewares/checkloginuser");
const handleloginuser_1 = require("../controllers/handleloginuser");
const login = (0, express_1.Router)();
login.post('/', checkloginuser_1.checkloginuser, handleloginuser_1.handleLoginUser);
exports.default = login;
//# sourceMappingURL=login.js.map