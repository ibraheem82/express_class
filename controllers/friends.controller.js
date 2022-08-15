function postFriend(req, res)  {
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


function getFriends(req, res) {
    res.json(friends);
}


// * Will get an individual friend.
function getFriend(req, res) {
        const friendId = Number(req.params.friendId);
        const friend = friends[friendId];
        if (friend) {
            res.status(200).json(friend)
            // res.json(friend)
        } else {
            res.status(404).json({
    
                error: "Friend does not exist"
                
            });
        }
}