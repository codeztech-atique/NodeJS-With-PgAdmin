const chalk = require('chalk');
exports.mapDataValidation = (req, res, next) => {
    console.log(chalk.blue("---------------- Mapdata Validation ----------------"));
    var errorMessage = '';
    if(req.body.label === undefined || req.body.label === '') {
        errorMessage += 'label, ';
    } else if(req.body.location === undefined || req.body.location === '') {
        errorMessage += 'location ';
    } else if(req.body.radius === undefined || req.body.radius === '') {
        errorMessage += 'radius ';
    } 
    if(errorMessage!=='') {
        res.status(400).send({
            status: 400,
            message: errorMessage + ' required'
        })
    } else {
        next();
    }
};