/**
 * 
 * @param {String} tagName 
 * @param {String} className 
 */
function novoElemento(tagName, className) {
    const elemento = document.createElement(tagName)
    elemento.className = className
    return elemento
}

/**
 * 
 * @param {boolean} reversa 
 */
function Barreira(reversa = false) {
    
    this.elemento = novoElemento('div', 'barreira')

    const borda = novoElemento('div', 'borda')
    const corpo = novoElemento('div', 'corpo')
    this.elemento.appendChild(reversa ? corpo : borda)
    this.elemento.appendChild(reversa ? borda : corpo)

    this.setAltura = altura => corpo.style.height = `${altura}px`
}

// const barreira = new Barreira(true)
// barreira.setAltura(0)
// document.querySelector('[wm-flappy]').appendChild(barreira.elemento)

/**
 * 
 * @param {Number} altura 
 * @param {Number} abertura 
 * @param {Number} posicao 
 */
function ParDeBarreiras(altura, abertura, posicao) {
    this.elemento = novoElemento('div', 'par-de-barreiras')

    this.superior = new Barreira(true)
    this.inferior = new Barreira(false)

    this.elemento.appendChild(this.superior.elemento)
    this.elemento.appendChild(this.inferior.elemento)

    this.sortearAbertura = () => {
        const alturaSuperior = Math.random() * (altura - abertura)
        const alturaInferior = altura - abertura - alturaSuperior

        this.superior.setAltura(alturaSuperior)
        this.inferior.setAltura(alturaInferior)
    }

    this.getPosicaoBarreiraEixoX = () => parseInt(this.elemento.style.left.split('px')[0])
    this.setPosicaoBarreiraEixoX = posicao => this.elemento.style.left = `${posicao}px`
    this.getLarguraBarreira = () => this.elemento.clientWidth
    
    this.sortearAbertura()
    this.setPosicaoBarreiraEixoX(posicao)
}

// const barreira = new ParDeBarreiras(500, 200, 400)
// document.querySelector('[wm-flappy]').appendChild(barreira.elemento)


function Barreiras(altura, largura, abertura, espaco, notificarPonto) {
    this.pares = [
        new ParDeBarreiras(altura, abertura, largura),
        new ParDeBarreiras(altura, abertura, largura + espaco),
        new ParDeBarreiras(altura, abertura, largura + espaco * 2),
        new ParDeBarreiras(altura, abertura, largura + espaco * 3)
    ]

    const deslocamento = 3
    
    this.animar = () => {
        this.pares.forEach (par => {
            par.setPosicaoBarreiraEixoX(par.getPosicaoBarreiraEixoX() - deslocamento)

            // Quando o elemento sair da area do jogo
            if (par.getPosicaoBarreiraEixoX() < -par.getLarguraBarreira()) {
                par.setPosicaoBarreiraEixoX(par.getPosicaoBarreiraEixoX() + espaco * this.pares.length)
                // Sortear nova abertura
                par.sortearAbertura()
            }

            const meio = largura / 2
            const cruzouMeio = par.getPosicaoBarreiraEixoX() + deslocamento >= meio
                && par.getPosicaoBarreiraEixoX() < meio
            cruzouMeio && notificarPonto()
        })
    }
}


function Passaro(alturaJogo) {

    let voando = false

    this.elemento = novoElemento('img', 'passaro')
    this.elemento.src = 'imgs/passaro.png'

    this.getPosicaoPassaroEixoY = () => parseInt(this.elemento.style.bottom.split('px')[0])
    this.setPosicaoPassaroEixoY = posicaoY => this.elemento.style.bottom = `${posicaoY}px`

    window.onkeydown = e => voando = true
    window.onkeyup = e => voando = false

    this.animarPassaro = () => {
        const novaPosicaoPassaroEixoY = this.getPosicaoPassaroEixoY() + (voando ? 8 : -5)
        const alturaMaxPassaro = alturaJogo - this.elemento.clientHeight

        if (novaPosicaoPassaroEixoY <= 0 ) {
            this.setPosicaoPassaroEixoY(0)
        } else if (novaPosicaoPassaroEixoY >= alturaMaxPassaro) {
            this.setPosicaoPassaroEixoY(alturaMaxPassaro)
        } else {
            this.setPosicaoPassaroEixoY(novaPosicaoPassaroEixoY)
        }
    }

    this.setPosicaoPassaroEixoY(alturaJogo/2)
}

function Progresso() {
    this.elemento = novoElemento('span', 'progresso')
    this.atualizarPontos = pontos => {
        this.elemento.innerHTML = pontos
    }
    this.atualizarPontos(0)
}

// const barreiras = new Barreiras(500, 1000, 225, 400)
// const passaro = new Passaro(500)
// const gameArea = document.querySelector('[wm-flappy]')

// gameArea.appendChild(passaro.elemento)
// gameArea.appendChild(new Progresso().elemento)
// barreiras.pares.forEach(pap => gameArea.appendChild(pap.elemento))

// setInterval(() => {
//     barreiras.animar()
//     passaro.animarPassaro()
// }, 20);


function estaoSobrepostos(elementoA, elementoB) {
    
    const a = elementoA.getBoundingClientRect()
    const b = elementoB.getBoundingClientRect()

    const horizontal = a.left + a.width >= b.left
        && b.left + b.width >= a.left
    const vertical = a.top + a.height >= b.top
        && b.top + b.height >= a.top
    return horizontal && vertical
}

function colidiu(passaro, barreiras) {
    
    let colidiu = false

    barreiras.pares.forEach(parBarreiras => {
        if (!colidiu) {
            const superior = parBarreiras.superior.elemento
            const inferior = parBarreiras.inferior.elemento
            colidiu = estaoSobrepostos(passaro.elemento, superior)
                || estaoSobrepostos(passaro.elemento, inferior)
        }
    })
    return colidiu
}

function flappyBird() {
    
    let pontos = 0

    const aberturaBarreiras = 225
    const espacoBarreira = 400
    
    const areaJogo = document.querySelector('[wm-flappy]')
    const alturaJogo = areaJogo.clientHeight
    const larguraJogo = areaJogo.clientWidth

    const progresso = new Progresso()
    const barreiras = new Barreiras(alturaJogo, larguraJogo, aberturaBarreiras, espacoBarreira, 
        () => progresso.atualizarPontos(++pontos))
    const passaro = new Passaro(alturaJogo)

    areaJogo.appendChild(progresso.elemento)
    areaJogo.appendChild(passaro.elemento)
    barreiras.pares.forEach(par => areaJogo.appendChild(par.elemento))

    this.start = () => {
        // loop do jogo
        const temporizador = setInterval(() => {
            barreiras.animar()
            passaro.animarPassaro()

            if (colidiu(passaro, barreiras)) {
                clearInterval(temporizador)
            }
        }, 20);
    }

}

new flappyBird().start()