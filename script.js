function numbersToWords () {
    let zeroToNine = ['zero','um','dois','três','quatro','cinco','seis','sete','oito','nove'];
    let tenToNineteen = ['dez','onze','doze','treze','quatorze','quinze','dezesseis','dezessete','dezoito','dezenove'];
    let dezenas = ['vinte','trinta','quarenta','cinquenta','sessenta','setenta','oitenta','noventa'];
    let centenas = ['cem','cento','duzentos','trezentos','quatrocentos','quientos','seiscentos','setecentos','oitocentos','novecentos'];
    let palavras = [];
    let str = '';
    for (let i = 0; i <= 20; i++) {
        if (i < 10) {
            palavras.push(' ' + zeroToNine[i])
        }
        if (i >= 10 && i < 20) {
            palavras.push(' ' + tenToNineteen[i - 10])
        }
        if (i >= 20 && i < 1000) {
            for (let j = 0; j < dezenas.length; j++) {
                palavras.push(' ' + dezenas[j]);
                for (let k = 1; k < zeroToNine.length; k++){
                    str = ' ' + dezenas[j] + ' e ' + zeroToNine[k];
                    palavras.push(str);
                }
            }
            for (let i = 0; i < centenas.length - 1; i++) {
                if (i === 0) {
                    palavras.push(' ' + centenas[i]);
                } else {
                    palavras.push(' ' + centenas[i + 1]);
                }
                    for (let k = 1; k < zeroToNine.length; k++) {
                        str = ' ' + centenas[i + 1] + ' e ' + zeroToNine[k];
                        palavras.push(str);
                    }
                    for (let z = 0; z < tenToNineteen.length; z++) {
                        str = ' ' + centenas[i + 1] + ' e ' + tenToNineteen[z];
                        palavras.push(str);
                    }
                    for (let y = 0; y < dezenas.length; y++) {
                        str = ' ' + centenas[i + 1] + ' e ' + dezenas[y];
                        palavras.push(str);
                        for (let x = 1; x < zeroToNine.length; x++) {
                            str = ' ' + centenas[i + 1] + ' e ' + dezenas[y] + ' e ' + zeroToNine[x];
                            palavras.push(str);
                        }
                    }
            }
        }

        if (palavras.length === 1000) {
            palavras.push(' mil');
        }
  
    }
    return palavras
}

const section = document.querySelector('section');
const paragrafo = document.createElement('p');

paragrafo.innerText = numbersToWords();

section.appendChild(paragrafo);