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
const axios_1 = __importDefault(require("axios"));
const apiKey = '2bb9848d1b2a29d2b3ee67cefced85c0';
const baseURL = 'https://api.themoviedb.org/3';
const discoverURL = `${baseURL}https://api.themoviedb.org/3/discover/movie${apiKey}`;
// 1. Async await
const getDiscoverIMovies = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield axios_1.default.get(discoverURL);
    console.log(response.data.results.map((movie) => movie.title));
});
