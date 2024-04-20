const Excuse = require('../models/Excuse');

// exports.getAllExcuses = async (req, res) => {
//     try {
//         const excuses = await Excuse.find();
//         res.json(excuses);
//     } catch (error) {
//         console.error('Failed to fetch excuses:', error);
//         res.status(500).json({ error: 'Failed to fetch excuses' });
//     }
// };

exports.getAllExcuses = async (req, res) => {
    try {
        const excuses = await Excuse.find();
        res.render('excuses/list-excuses', { excuses });
    } catch (error) {
        console.error('Failed to fetch excuses:', error);
        res.status(500).json({ error: 'Failed to fetch excuses' });
    }
};

exports.addExcuse = async (req, res) => { 
    try {  
        const newExcuse = new Excuse(req.body);
        await newExcuse.save();
        res.json(newExcuse);
    } catch (error) {
        console.error('Failed to add excuse:', error);
        res.status(500).json({ error: 'Failed to add excuse' });
    }
};

exports.getRandomExcuse = async (req, res) => {
    try {
        const count = await Excuse.countDocuments();
        const randomIndex = Math.floor(Math.random() * count);
        const randomExcuse = await Excuse.findOne().skip(randomIndex);
        res.json(randomExcuse);
    } catch (error) {
        console.error('Failed to get random excuse:', error);
        res.status(500).json({ error: 'Failed to get random excuse' });
    }
};