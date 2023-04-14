"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleHtppError = void 0;
const handleHtppError = (res, message = "Somethings happens", code = 403) => {
    res.status(code);
    res.send({ error: message });
};
exports.handleHtppError = handleHtppError;
//# sourceMappingURL=hadleHtppError.js.map