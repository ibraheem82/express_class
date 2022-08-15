function getMessages(req, res){
    res.send('Omikunle');
}


function postMessage(req, res){
    console.log('Updating ....');
}


module.exports = {
    getMessages,
    postMessage,
};