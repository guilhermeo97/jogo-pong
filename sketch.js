//variáveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let dimBolinha = 20
let raio = dimBolinha / 2 

let velocidadeXBolinha = 8
let velocidadeYBolinha = 8

//variáveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let larguraRaquete = 10
let alturaRaquete = 90

let colidiu = false;

//variáveis do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let larguraRaqueteOponente = 10
let alturaRaqueteOponente = 90
let velocidadeYOponente;

//placar do jogo
let meusPontos = 0;
let pontosOponente = 0;

//sons do jogo
let raquetada;
let ponto;
let trilha;

function preload() {
  trilha = loadSound("trilha.mp3");
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3")
}



function setup() {
  createCanvas(600, 400);
  trilha.loop()
}

function draw() {
  background('#003c00');
  bolinha();
  bolinhaNaoFicaPresa();
  movimentoBolinha();
  verificaposicaobolinha();
  raquete(xRaquete, yRaquete);
  raquete(xRaqueteOponente, yRaqueteOponente);
  movimentarRaquete();
  movimentarRaqueteOponente();
  colisaoRaquete(xRaquete, yRaquete)
  colisaoRaquete(xRaqueteOponente, yRaqueteOponente);
  incluiPlacar();
  marcaPonto()
}

function bolinhaNaoFicaPresa(){
    if (xBolinha - raio < 0){
    xBolinha = 23
    }
}


function bolinha() {
  fill(color('#bfff00'));
  circle (xBolinha, yBolinha, dimBolinha);
}

function movimentoBolinha() {
  xBolinha += velocidadeXBolinha
  yBolinha += velocidadeYBolinha
}

function verificaposicaobolinha() {
  if (xBolinha + raio > width ||
    xBolinha - raio < 0) {
    velocidadeXBolinha *= -1  
  }
  if (yBolinha + raio > height ||
    yBolinha - raio < 0) {
    velocidadeYBolinha *= -1  
  }  
}
function raquete(x,y) {
  fill(color('#fff'));
  rect(x, y, larguraRaquete, alturaRaquete)
}
  function movimentarRaquete() {
  if (keyIsDown(UP_ARROW)) {
    yRaquete -=10
  }
  if (keyIsDown(DOWN_ARROW)) {
    yRaquete +=10
  }
}
function movimentarRaqueteOponente() {
  if (keyIsDown(87)) {
    yRaqueteOponente -=10
  }
  if (keyIsDown(83)) {
    yRaqueteOponente +=10
  }
}
function colisaoRaquete(x, y) {
  colidiu =
  collideRectCircle(x, y, larguraRaquete, alturaRaquete, xBolinha, yBolinha, raio);
  if(colidiu) {
    velocidadeXBolinha *= -1;
    raquetada.play()
  }
}
//function movimentarRaqueteOponente() {
  // velocidadeYOponente = yBolinha - yRaqueteOponente - larguraRaqueteOponente / 2 - 30
  // yRaqueteOponente += velocidadeYOponente
//}
function incluiPlacar() {
  textAlign(CENTER)
  textSize(20);
  fill(255);
  text('Casa', 170, 20);
  textStyle(BOLD);
  text(meusPontos, 170, 45);
  fill(255);
  text('Visitante', 470, 20);
  text(pontosOponente, 470, 45);
}
function marcaPonto() {
  if(xBolinha > 590) {
  meusPontos += 1;
  ponto.play()
}
  if(xBolinha < 10) {
  pontosOponente += 1;
    ponto.play()
  } 
}