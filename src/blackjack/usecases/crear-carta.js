/**
 * 
 * @param {String} carta carta del deck correspondiente al jugador
 * @returns {HTMLImageElement} elemento html de retorno
 */
export const crearCarta = (carta) => {
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`;
    imgCarta.classList.add('carta');
    return imgCarta
}