"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const assets_json_1 = __importDefault(require("../db/assets.json"));
const router = (0, express_1.Router)();
router.get('/assets', (req, res) => {
    try {
        console.log('router working as expected');
        res.json(assets_json_1.default);
    }
    catch (error) {
        res.status(500).send({ message: error === null || error === void 0 ? void 0 : error.message });
    }
});
router.get('/test', (req, res) => {
    try {
        res.send("This is a test");
    }
    catch (error) {
        res.status(500).send({ message: error.message });
    }
});
exports.default = router;
