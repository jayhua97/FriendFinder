var friendsData = require('../data/friends.js')

module.exports = function(app) {
    app.get('/api/friends', function(req, res) {
        res.json(friendsData);
    })

    app.post('/api/friends', function(req, res) {
        console.log("wagagaga" + req.body.scores)
        var newFriendScore = req.body.scores;
        var scoreCompare = [];
        var bestComparison = 0;
        for (var i = 0; i < friendsData.length; i++) {
            var totalDifference = 0;

            for (var j = 0; j < newFriendScore.length; j++) {
                totalDifference += Math.abs(parseInt(friendsData[i].scores[j]) - parseInt(newFriendScore[j]))
            }
            console.log(totalDifference)

            scoreCompare.push(totalDifference)
            console.log(scoreCompare)
        }
        for (var i = 0; i < scoreCompare.length; i++) {
            if (scoreCompare[i] < scoreCompare[bestComparison]) {
                bestComparison = i
            }
        }

        var friendFound = friendsData[bestComparison];
        res.json(friendFound)
        friendsData.push(req.body);
    })
}