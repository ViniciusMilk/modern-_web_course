// Promise

/**
 * @author  Marcos Leite
 * @date    28/11/2023
 * @param   {string} frase
 * @param   {Number} tempoSec Tempo em segundos
 * @returns Promise
 */
function falarDepoisDe(frase, tempoSec) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase)
        },tempoSec * 1000)
    })
}

falarDepoisDe('Very nice',5)
    .then(frase => frase.concat('!!!'))
    .then(newFrase => console.log(newFrase))


