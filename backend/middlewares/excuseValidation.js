// const validateExcuse = (req, res, next) => {
//     const { http_code, tag, message } = req.body;
//     if (!http_code || !tag || !message) {
//         return res.status(400).json({ error: 'All fields are required' });
//     }
//     if (typeof http_code !== 'number' || http_code < 700 || http_code > 800) {
//         return res.status(400).json({ error: 'Invalid http_code format' });
//     }
//     if (typeof tag !== 'string' || typeof message !== 'string' || tag.trim() === '' || message.trim() === '') {
//         return res.status(400).json({ error: 'Invalid tag or message format' });
//     }
//     next();
// };

// module.exports = { validateExcuse };
// const validateExcuse = (req, res, next) => {
//     const { http_code, tag, message } = req.body;
//     if (!http_code || !tag || !message) {
//         return res.status(400).json({ error: 'All fields are required' });
//     }
    
//     const http_code_number = Number(http_code);
//     if (isNaN(http_code_number) || http_code_number < 700 || http_code_number > 800) {
//         return res.status(400).json({ error: 'Invalid http_code format' });
//     }
    
//     if (typeof tag !== 'string' || typeof message !== 'string' || tag.trim() === '' || message.trim() === '') {
//         return res.status(400).json({ error: 'Invalid tag or message format' });
//     }
    
//     next();
// };

// module.exports = { validateExcuse };
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
