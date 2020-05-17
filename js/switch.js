

//Variables

var opciones = ['Piedra', 'Papel', 'Tijera'];
var piedra = 0;
var papel = 1;
var tijera =2;


function juego(player1, player2) {
    switch (opciones) {
		
		case player1 == 0 && player2 == 1:
			console.log(`El jugador Player2 ha ganado`);
			break;
	
		case player1 == 0 && player2 ==2:
			console.log(`El jugador Player1 ha ganado`);
			break;

		case player1 == 1 && player2 == 0:
			console.log(`El jugador player1 ha ganado`);
			break;

		case player1 == 1 && player2 == 2:
			console.log(`El jugador Player2 ha ganado`);
			break;

		case player1 == 2 && player2 == 0:
			console.log(`El jugador Player2 ha ganado`);
			break;

		case Player1 == 2 && player2 == 1:
			console.log(`El jugador player1 ha ganado`);
			break;
		
		case Player1 == Player2:
			console.log(`Los jugadores han empatado`);
			break;

		}
}