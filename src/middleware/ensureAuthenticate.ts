require('passport')

export const ensureAuthenticated=(req:any, res:any, next:any) => {
    if (req.isAuthenticated()) {
      return next();
    }
  
    res.redirect('/login');
  }