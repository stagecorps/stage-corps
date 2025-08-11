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
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const fetchAssets = () => __awaiter(void 0, void 0, void 0, function* () {
    let items = [];
    for (let i = 1; i <= 20; i++) {
        const response = yield fetch(`http://localHost:3000/ezrentout/assets?page=${i}`);
        const data = yield response.json();
        const assets = data.assets;
        const simplifiedAssets = assets.map((item) => {
            const { name, display_image } = item;
            return { name, display_image };
        });
        items = [...items, ...simplifiedAssets];
    }
    ;
    const filteredAssets = items.filter((item, index, self) => {
        return index === self.findIndex(it => it.name === item.name);
    });
    yield (0, fs_1.writeFile)('src/db/assets.json', JSON.stringify(filteredAssets), (err) => { if (err) {
        console.log(err === null || err === void 0 ? void 0 : err.message);
    }
    else {
        console.log('Assets.json written!');
    } });
});
exports.default = fetchAssets;
