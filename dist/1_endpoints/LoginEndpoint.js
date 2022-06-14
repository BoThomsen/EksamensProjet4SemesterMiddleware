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
exports.LoginEndpoint = void 0;
const SuccessCode_1 = require("../3_models/SuccessCode");
const Api_1 = require("../2_sessions/Api");
class LoginEndpoint {
    static evaluate(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = request.body;
                const isAuthorized = yield Api_1.Api.login(user.userName, user.password);
                if (isAuthorized) {
                    return response.status(SuccessCode_1.SuccessCode.OK).json("authorized");
                }
            }
            catch (e) {
                console.error(e);
            }
        });
    }
}
exports.LoginEndpoint = LoginEndpoint;
//# sourceMappingURL=LoginEndpoint.js.map