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
}
]
// app.get('/', (req, res) => {
//     res.send('Omikunle')
// })


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