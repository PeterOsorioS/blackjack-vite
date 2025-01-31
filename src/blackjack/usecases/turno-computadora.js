import {pedirCarta, valorCarta, crearCarta} from './';

/**
 * 
 * @param {Number} puntosMinimos puntos minimos que la computadora necesita para ganar
 * @param {HTMLElement} puntosHTML elemeno html para mostrar los puntos
 * @param {HTMLElement} divCartasComputadora elemeno html para mostrar las cartas
 * @param {Array<String>} deck
 */
export const turnoComputadora = ( puntosMinimos, puntosHTML, divCartasComputadora, deck = []) => {

    if(!puntosMinimos) throw new Error('Puntos minimos son obligatorios');
    if(!puntosHTML) throw new Error('Argumento puntosHTML son obligatorios');

    let puntosComputadora = 0;

    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        
        // <img class="carta" src="assets/cartas/2C.png">
        const imgCarta = crearCarta(carta);
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}