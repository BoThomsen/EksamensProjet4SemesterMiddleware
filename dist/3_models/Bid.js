"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bid = void 0;
const mongoose_1 = require("mongoose");
const BidSchema = new mongoose_1.Schema({
    timestamp: { type: Number, required: false },
    userID: { type: String, required: true },
    productID: { type: String, required: true },
    value: { type: Number, required: true }
});
const Bid = (0, mongoose_1.model)('Bid', BidSchema);
exports.Bid = Bid;
//# sourceMappingURL=Bid.js.map