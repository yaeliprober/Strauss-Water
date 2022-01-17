const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

const genToken = (obj) => {
    return jwt.sign(obj, process.env.SECRET)
}

const hashPassword = (password) => {
    console.log('hash!!')
    const saltRounds = 10
    return new Promise((resolve, reject) => {
        bcrypt.genSalt(saltRounds, function (err, salt) {
            if (err) {
                console.log('erorrr111')
                reject(err)
            } else {
                bcrypt.hash(password, salt, function (err, hash) {
                    if (err) {
                        console.log('erorrr222')
                        reject(err)
                    } else {
                        console.log(hash)
                        resolve(hash)
                    }
                })
            }
        })
    })
}

const validatePassword = (passwordEnteredByUser, hash) => {
    return new Promise((resolve, reject) => {
        bcrypt.compare(passwordEnteredByUser, hash, function (err, isMatch) {
            if (err) {
                reject(err)
            } else if (!isMatch) {
                reject("Password doesn't match!")
            } else {
                console.log('Password matches!')
                resolve("Password matches!")
            }
        })
    })
}

module.exports = {
    genToken,
    hashPassword,
    validatePassword
}