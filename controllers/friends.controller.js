function friendsController(req, res)  {
    if(!req.body.name) {
        return res.status(400).json({
            error: 'Missing friends name'
        })
    }

    const newFriend = {
        name: req.body.name,
        id: friends.length
    };
    friends.push(newFriend);

    res.send(newFriend);
}