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
const node_fetch_1 = __importDefault(require("node-fetch"));
(() => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    let res = yield (0, node_fetch_1.default)('https://smartid.ssu.ac.kr/Symtra_sso/smln_pcs.asp', {
        method: 'POST',
        headers: {
            'content-type': 'application/x-www-form-urlencoded'
        },
        body: 'in_tp_bit=0&rqst_caus_cd=03&userid=20211415&pwd=tr2042255%25'
    });
    const sTokenRegExp = /sToken=.*?;/;
    let sToken = (_a = res.headers.get('set-cookie')) === null || _a === void 0 ? void 0 : _a.match(sTokenRegExp)[0];
    sToken = sToken === null || sToken === void 0 ? void 0 : sToken.substring(0, sToken.length - 1);
    let url = `https://class.ssu.ac.kr/xn-sso/gw-cb.php?${sToken}&sIdno=20211415`;
    res = yield (0, node_fetch_1.default)(url);
    const data = yield res.text();
    url = data.match(/(https:\/\/canvas.*("))/)[0];
    url = url === null || url === void 0 ? void 0 : url.substring(0, url.length - 1);
    res = yield (0, node_fetch_1.default)(url, {});
    const cookies = res.headers.raw()['set-cookie'];
    const cookie = cookies.map((entry) => {
        const parts = entry.split(';');
        const cookiePart = parts[0];
        return cookiePart;
    }).join(';');
    res = yield (0, node_fetch_1.default)('https://canvas.ssu.ac.kr/learningx/dashboard?user_login=20211415&locale=ko', {
        headers: {
            'cookie': cookie
        }
    });
    let apiKey = (res.headers.raw()['set-cookie'][0]).match(/=.*?;/)[0];
    apiKey = apiKey.substring(1, apiKey.length - 1);
    console.log(apiKey);
}))();
