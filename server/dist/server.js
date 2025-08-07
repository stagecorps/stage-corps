"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const node_path_1 = __importDefault(require("node:path"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.static(node_path_1.default.join(__dirname, '../../client/dist')));
app.get('/ezrentout/assets', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { page } = req.query || 1;
    const response = yield fetch(`https://stagecorps.ezrentout.com/assets.api?page=${page}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'token': process.env.EZRENTOUT_TOKEN || ''
        }
    });
    const data = yield response.json();
    res.json(data);
}));
app.get(/(.*)/, (_req, res) => {
    res.sendFile(node_path_1.default.join(__dirname, '../../client/dist', 'index.html'));
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
