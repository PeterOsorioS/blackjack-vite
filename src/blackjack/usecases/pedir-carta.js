
/**
 * Obtener la carta
 * @param {Array<String>} deck Arreglo de las cartas
 * @returns {String} Carta del deck asignada al jugador
 */
export const pedirCarta = (deck) => {

    if (!deck || deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}