const express  = require('express');
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
app.post('/friends', (req, res) => {
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
});



app.get('/', )


app.get('/friends', (req, res) => {
    // res.send(friends);
    res.json(friends);
});

app.get('/friends/:friendId', (req, res) => {
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
})


app.post('/', (req, res) => {
    console.log('Updating ....');
})


app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
})