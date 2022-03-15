const { verify } = require('jsonwebtoken');

const validateToken = (req, res, next) => {
    const accessToken = req.header("accessToken");
    if (!accessToken) return res.json({ error: "User not logged in !"});
    try {
        const validToken = verify(accessToken, "importantSecret");
        req.user = validToken;
        if (validToken) {
            return next();
        } else {
            return res.json({ error: "User not logged in !"});
        }
    } catch (error) {
        return res.json({ error: error});
    }
}

module.exports = { validateToken };

