const router = require('express').Router()
const login = require('../controllers/login')
const candidate = require('../controllers/candidate')
const auth = require('../controllers/auth')

router.post('/api/auth/signup', login.signup)
router.post('/api/auth/signin', login.signin)
router.get('/api/candidates',auth, candidate.getAllCandidates)

module.exports = router