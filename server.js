const express  = require('express');
const friendsController = require('./controllers/friends.controller');
const messagesController = require('./controllers/messages.controller');
const app  = express();
const PORT = 5000;
const friends =  [{
    id: 0,
    name: 'Ibraheem Omikunle'
},

{
    id: 1,
    name: 'John Williams'
},

{
    id: 2,
    name: 'Kara waltham'
},

{
    id: 3,
    name: 'Dorathy Charles'
},

{
    id: 4,
    name: 'Adeyinka Bolaji'
},

{
    id: 5,
    name: 'Adebayo Sodik'
},


{
    id: 6,
    name: 'Ayomide Mobolaji'
},


{
    id: 7,
    name: 'Razaq Olawale'
},


{
    id: 8,
    name: 'Damilola Rukayat'
},


{
    id: 9,
    name: 'Tope Boldlinks'
},

{
    id: 10,
    name: 'Ololade Asake'
},


{
    id: 11,
    name: 'Mufti Menk'
},


{
    id: 3,
    name: 'Sudais Rahman'
}
]
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