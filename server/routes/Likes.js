const express = require('express');
const { validateToken } = require('../middlewares/AuthMiddleware');
const { Likes } = require('../models');
const router = express.Router();

router.post('/', validateToken, async (req, res) => {
    const { PostId } = req.body;
    const UserId = req.user.id;
    const found = await Likes.findOne({
        where: { PostId: PostId, UserId: UserId }
    })

    if (!found) {
        await Likes.create({ PostId: PostId, UserId: UserId });
        res.json({ liked: true });
    } else {
        await Likes.destroy({
            where: { PostId: PostId, UserId: UserId }
        });
        res.json({ liked: false });
    }


})

module.exports = router