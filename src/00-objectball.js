function gameObject() {
    return {
        home: {
            teamName: 'Brooklyn Nets',
            colors: ['Black', 'White'],
            players: {
                'Alan Anderson': {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1
                },
                'Reggue Evans': {
                    number: 30,
                    shoe: 14,
                    points: 14,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7
                },
                'Brook Lopez': {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 5
                },
                'Mason Plumlee': {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5
                },
                'Jason Terry': {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1
                }
            }
        },
        away: {
            teamName: 'Charlotte Hornets',
            colors: ['Turquoise, Purple'],
            players: {
                'Jeff Adroem': {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2
                },
                'Bismak Biyombo': {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10
                },
                'DeSagna Diop': {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5
                },
                'Ben Gordon': {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0
                },
                'Brendan Haywood': {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12
                }
            }
        }
    }
}

    // function homeTeam() {
    //     return gameObject().home
    // }

    // function awayTeam() {
    //     return gameObject().away
    // }
    // function players() {

        // const game = gameObject()
        // const homePlayers = game.home.players
        // const awayPlayers = game.away.players
        
    //     return Object.assign({}, homeTeam().players, awayTeam().players)
    //      return {...homePlayers, ...awayPlayers} same as above, 
    // }
    // function numPointsScored(playerInput) {
        // Object.values(players)
       
        //  for (const playerName in players()) { // iterate through players
        //     if (playerName === playerInput) { // check to see if player matches function argument
        //     return players()[playerName].points // return the player's points
        //         }
        //     }
        // return players()[playerInput].points
        // const playerArrays = Object.entries(players())
        // forEach, map, filter, find, reduce
        // const player = playerArrays.find(playerArray => playerArray[0] ===playerInput)
        //playerName at 0 index
        //playerInfo is at the 1 index
        //['Desagna Diop', {...}]
        // return player[1].points
//          }   
        
    
//  console.log('Anderson number of points ', numPointsScored('Alan Anderson'))

//  debugger

 function numPointsScored(playerName) {
    if (gameObject().home.players[playerName]) {
        return gameObject().home.players[playerName].points
 } else {
    return gameObject().away.players[playerName].points
 }
}

numPointsScored('Alan Anderson')

const game = gameObject()
const players = playersObject()
const teams = Object.values(game)

function playersObject() {
    return Object.assign({}, homeTeam().players, awayTeam().players)
}

   function homeTeam() {
        return gameObject().home
    }

    function awayTeam() {
        return gameObject().away
    }

    function teamColors(teamName) {
        return findByTeamName(teamName.colors)
    }

    function findByTeamName(teamName) {
        return teams.find(team => teamName === team.teamName)
    }
    function teamNames() {
        return team.map(teamName => teamName)
    }

    console.log(teamColors('Brooklyn Nets'))