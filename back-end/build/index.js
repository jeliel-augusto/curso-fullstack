"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const GameRoutes_1 = require("./routes/GameRoutes");
const PublisherRoutes_1 = require("./routes/PublisherRoutes");
const ClientRoutes_1 = require("./routes/ClientRoutes");
const CompraRoutes_1 = require("./routes/CompraRoutes");
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const AuthRoutes_1 = require("./routes/AuthRoutes");
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    credentials: true,
    origin: true,
}));
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.json());
app.use(AuthRoutes_1.AuthRoutes);
app.use(GameRoutes_1.GameRoutes);
app.use(PublisherRoutes_1.PublisherRoutes);
app.use(CompraRoutes_1.CompraRoutes);
app.use(ClientRoutes_1.ClientRoutes);
app.listen(3333, () => {
    // server started
    console.log("server started ok");
});
