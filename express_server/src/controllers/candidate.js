const db = require('../db/database')

const getAllCandidates = (req, res) => {
    console.log('getAllCandidates!!!')
    let sql = `SELECT * FROM candidate`;

    db.all(sql, [], (err, candidates) => {
        if (err) {
            res.status(400).json({ success: false, msg: err.message });
        }
        else
            res.status(200).json({ success: true, candidates: candidates });
    });
}

module.exports = {
    getAllCandidates
}