console.log('=== Exercício da escada ===');

/* 
  O usuário vai definir qual é o tamanho de uma escada que ele gostaria. Você tem que desenhar a escada no console de acordo com esse tamanho. Exemplo:
  USUÁRIO: 5 lances
  SAÍDA: 
  #
  ##
  ###
  ####
  #####
  BÔNUS:
  O usuário escolhe qual o material da escada. Exemplo:
  USUÁRIO: 5 lances, material @
  SAÍDA:
  @
  @@
  @@@
  @@@@
  @@@@@
*/

let lances = Number(prompt('Quantos lances de escada você gostaria de fazer?'));
//let material = '#'; eu tiro para o material não ficar fixo e o usuario poder escolher o aterial que quiser
let material = prompt('Qual é o material que você quer utilizar na escada?');
let i = 0;
let degrau = material;

while (i < lances) {
    //material += material; nao da certo
    //material += lances +1;

    console.log(degrau);
    //degrau = degrau + material; mesma coisa que:
    degrau += material;
    
    i++;
}