const db = require('../db/database')
const generic = require('./generic')


const signup = async (req, res) => {
    try {
        console.log(req.body)
        let hash = await generic.hashPassword(req.body.password)
        console.log("hash:", hash)
        req.body.password = hash;

        let sql = `INSERT INTO user(username,email,password) 
        VALUES ('${req.body.username}','${req.body.email}','${req.body.password}')`;
        await db.run(sql)
        console.log(`user inserted`);
        const token = await generic.genToken({ username: req.body.username })
        res.status(200).json({ success: true, token: token });
    } catch (err) {
        res.status(400).json({ success: false, msg: err.message });
    }
}



const signin = (req, res) => {
    console.log('body:', req.body)
    let sql = `SELECT * FROM user WHERE username = '${req.body.username}'`;
    db.all(sql, [], async (err, user) => {
        if (err) {
            res.status(400).json({ success: false, msg: err.message });
        }
        try {
            if (user.length > 0) {
                await generic.validatePassword(req.body.password, user[0].password);
                const token = await generic.genToken({ username: req.body.username })
                res.status(200).json({ success: true, token: token });
            }
            else {
                res.status(200).json({ success: false, msg: "user not found" });
            }
        } catch (err) {
            res.status(400).json({ success: false, msg: err });
        }
    })

}

module.exports = {
    signin,
    signup
}