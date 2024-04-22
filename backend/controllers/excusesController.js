const Excuse = require('../models/Excuse');

exports.getAllExcuses = async (req, res) => {
    try {
        const excuses = await Excuse.find();
        res.render('excuses/list-excuses', { excuses });
    } catch (error) {
        console.error('Failed to fetch excuses:', error);
        res.status(500).json({ error: 'Failed to fetch excuses' });
    }
};

exports.getAllExcusesJSON = async (req, res) => {
    try {
        const excuses = await Excuse.find();
        res.json(excuses);
    } catch (error) {
        console.error('Failed to fetch excuses:', error);
        res.status(500).json({ error: 'Failed to fetch excuses' });
    }
};

exports.getExcusesByCode = async (req, res) => {
    try {
        const excuse = await Excuse.findOne({ http_code: req.params.code });

        if (excuse) {
            res.json(excuse);
        } else {
            res.status(404).json({ error: 'Failed to find excuse by the code' });
        }
        
    } catch (error) {
        console.error('Failed to fetch excuse by code:', error);
        res.status(500).json({ error: 'Failed to fetch excuse by code' });
    }
};

exports.addExcuse = async (req, res) => {
    try {
        const newExcuse = new Excuse(req.body);
        await newExcuse.save();
        res.render('excuses/create-excuse', { success: 'Excuse added successfully' });
    } catch (error) {
        console.error('Failed to add excuse:', error);
        res.status(500).json({ error: 'Failed to add excuse' });
    }
};
