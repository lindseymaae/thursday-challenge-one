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
    });//end ajax
};//end addplayer
   
