const config = require('config');
const client = require('../db.js');
const chalk = require('chalk');

const userTable = config.pg.markersTable;
    

exports.insertCustomMarker = (req, res, next) => {
    console.log(chalk.bgYellowBright("---------------- User Registration ----------------"));
    //var sqlInsert = "INSERT INTO "+userTable+ "(id, label, location, radius) VALUES (?, ?, ?, ?)";
    var queryString = "INSERT INTO "+userTable+ "(label, location, radius) VALUES (" + "'" + [req.body.label, req.body.location, req.body.radius].join("','") + "'" + ") RETURNING *";
    try {
        client.query(queryString, (err, resp) => {
            if (err) {
                res.send({
                    error: err
                });
                // return;
            } else {
                res.send({
                    message: 'Data insert successful'
                })
            }
        });
    } catch(e) {
        console.log(chalk.red(e));
        res.status(400).send({
            error: e
        });
    } finally {
        //client.end();
    }
};