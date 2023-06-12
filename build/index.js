"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = __importDefault(require("./config"));
const loaders_1 = __importDefault(require("./loaders"));
const logger_1 = __importDefault(require("./loaders/logger"));
const checkcreateuser_1 = require("./middlewares/checkcreateuser");
const handlecreateuser_1 = require("./controllers/handlecreateuser");
async function startServer() {
    const app = (0, express_1.default)();
    await (0, loaders_1.default)({ expressApp: app });
    app
        .listen(config_1.default.port, () => {
        logger_1.default.info(`
      ################################################
      🛡️  Server listening on port: ${config_1.default.port} 🛡️
      ################################################
    `);
    })
        .on('error', err => {
        logger_1.default.error(err);
        process.exit(1);
    });
    app.get('/', (req, res) => {
        res.send('Hello World!');
    });
    app.post('/signup', checkcreateuser_1.checkcreateuser, handlecreateuser_1.handleCreateUser);
}
startServer();
//# sourceMappingURL=index.js.map