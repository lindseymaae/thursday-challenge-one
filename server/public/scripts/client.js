console.log('in client.js');

let playerList = [];
$(document).ready(readyNow);

function readyNow(){
    console.log('jquery loaded');
    $('#submitButton').on('click', addPlayer);
}

function addPlayer(){
    
    $.ajax({
        method: 'POST',
        url: '/player',
        data: { playerName: $('#newPlayerName').val() }

    }).then(function() {
        getAllPlayers();
    });//end ajax
};//end addplayer

function getallPlayers(){
    $.ajax({
        method: 'GET',
        url: '/player',
    }).then(function(response){
        updatePlayerList(response);
    });
}
   
