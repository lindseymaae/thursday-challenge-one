console.log('in client.js');


$(document).ready(readyNow);

function readyNow(){
    console.log('jquery loaded');
    $('#submitButton').on('click', addPlayer);
}

function addPlayer(){
    
    let playerName = $('#nameInput').val();
    $('#tableBody').append(`
                <tr>
                <td> ${playerName}
                </td>
            </tr>
`
    )
}