//Variables
// piedra =0, papel = 1, tijera = 2

var opciones = ["Piedra", "Papel","Tijera"];

//ver en consolasconsole.log(piedra \=0, papel = \1, tijera = \2)


//Funciones

function juego(player1, player2) {
    //Si empatan es verdadero
    if (player1 == player2) {
        console.log(`Los jugadores han empatado con ${opciones [player1]}`);
    
    //Si NO empatan describo las opciones que tengo
    //Piedra - Papel
    } else if (player1 == 0 && player2 == 1) {
    console.log(`El jugador Player2 ha ganado con ${opciones [player2]}`);

       
    //Papel - Tijera
    } else if (player1 == 1 && player2 == 2) {
    console.log(`El jugador Player2 ha ganado con ${opciones [player2]}`);


     //Tijera - Piedra
    } else if (player1 == 2 && player2 == 1) {
    console.log(`El jugador Player2 ha ganado con ${opciones [player2]}`);

    /*Restantes donde gana player1
    Piedra - Tijera
    Papel - Piedra
    Tijera - Papel
    */

    } else {
    console.log(`El jugador Player1 ha ganado con ${opciones [player1]}`);
    
    }

}
