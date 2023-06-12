"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const signup_1 = __importDefault(require("../routes/signup"));
const login_1 = __importDefault(require("../routes/login"));
exports.default = () => {
    const app = (0, express_1.Router)();
    //TODO: add routes here...
    app.use('/signup', signup_1.default);
    app.use('/login', login_1.default);
    return app;
};
//# sourceMappingURL=index.js.map