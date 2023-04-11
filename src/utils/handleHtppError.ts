export const handleHtppError = (res: any, message = "Somethings happens", code = 403) => {
    res.status(code);
    res.send({ error: message });
  };
  
