const jwt = require('jsonwebtoken')

const auth = (req, res, next) => {
    console.log('auth!!', req.headers['authorization'])
    jwt.verify(req.headers['authorization'], process.env.SECRET, function (err) {
        if (err) {
            res.status(401).json({ success: false, msg: err.message });
        }
        else
            return next()
    });
}

module.exports = auth
