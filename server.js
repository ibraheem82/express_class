const express  = require('express');
const friendsController = require('./controllers/friends.controller');
const messagesController = require('./controllers/messages.controller');
const app  = express();
const PORT = 5000;

// * Middleware in express
/*
    ! the next() must always be called when using middleware.
*/
app.use((req, res, next) => {
    const start = Date.now()
    next();

    // * will check the diffrence in time
    // * Total of milliseconds between when the request was made and time the request was sent back.
    const delta  = Date.now() - start;
    console.log(`${req.method} ${req.url} ${delta}ms`);

});

// * Set to json
app.use(express.json());

// * Add Friend
app.post('/friends', friendsController.postFriend);
app.get('/friends', friendsController.getFriends);
app.get('/friends/:friendId', friendsController.getFriend)



app.get('/messages', messagesController.getMessages)
app.post('/messages', messagesController.postMessage)


app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
})