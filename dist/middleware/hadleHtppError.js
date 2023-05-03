export const handleHtppError = (res, message = "Somethings happens", code = 403) => {
    res.status(code);
    res.send({ error: message });
};
//# sourceMappingURL=hadleHtppError.js.map