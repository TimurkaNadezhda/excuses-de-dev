const validateExcuse = (req, res, next) => {
    const { http_code, tag, message } = req.body;

    if (!http_code || !tag || !message) {
        return res.render('excuses/create-excuse', { error: 'All fields are required', formData: req.body });
    }
    
    const http_code_number = Number(http_code);
    
    if (isNaN(http_code_number) || http_code_number < 700 || http_code_number > 800) {
        return res.render('excuses/create-excuse', { error: 'Invalid http_code format', formData: req.body });
    }
    
    if (typeof tag !== 'string' || typeof message !== 'string' || tag.trim() === '' || message.trim() === '') {
        return res.render('excuses/create-excuse', { error: 'Invalid tag or message format', formData: req.body });
    }
    
    next();
};

module.exports = { validateExcuse };
