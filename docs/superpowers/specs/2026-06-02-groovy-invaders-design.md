# Groovy Invaders - Design

## Objetivo

Criar o proximo projeto do portfolio: um jogo estilo Space Invaders, preto e branco, 8-bit, com movimento fluido e identidade visual groovy. O jogo deve existir como projeto proprio no GitHub/deploy e tambem aparecer no portfolio com uma previa jogavel ou modal integrado.

## Escopo da primeira versao

- Jogo arcade de sobrevivencia em canvas.
- Visual preto e branco, pixelado, limpo e de alto contraste.
- Sprites 8-bit com formas groovy: naves, invasores e explosoes com silhuetas mais onduladas/funky.
- Player na parte inferior da tela.
- Movimento horizontal fluido com aceleracao leve.
- Tiro principal rapido.
- Inimigos descendo em ondas com dificuldade crescente.
- Sistema de pontuacao, combo, vidas e tela de game over.
- Power-ups raros e simples, como tiro duplo ou escudo temporario.
- Controles de teclado no desktop e controles touch no mobile.

## Fora do escopo inicial

- Multiplayer.
- Ranking online.
- Backend.
- Loja de upgrades persistente.
- Assets externos complexos.
- Dependencia de motor de jogo como Phaser.

## Abordagem Tecnica

Usar React + TypeScript com canvas puro. A renderizacao e a logica principal ficam em um loop proprio com `requestAnimationFrame`, mantendo o jogo leve e facil de publicar.

Unidades principais:

- `GameCanvas`: componente React que monta o canvas e conecta inputs, tamanho da tela e ciclo do jogo.
- `gameLoop`: atualiza estado, fisica, colisoes, spawn de inimigos e renderizacao.
- `entities`: tipos e helpers para player, inimigos, tiros, power-ups e particulas.
- `sprites`: desenhos pixelados feitos diretamente por matrizes ou funcoes de desenho no canvas.
- `input`: teclado e touch normalizados para uma unica interface de comandos.
- `audio`: sons curtos via Web Audio API, sem arquivos externos obrigatorios.

## Gameplay

O jogador controla uma nave na base da tela. Inimigos aparecem em ondas e avancam para baixo com padroes simples. O jogo mistura arcade moderno com minimalismo dificil: poucos elementos visuais, resposta rapida, aumento constante de pressao e feedback claro para cada acao.

Regras iniciais:

- Setas ou `A/D` movem a nave.
- `Espaco` atira.
- No mobile, botoes discretos para esquerda, direita e tiro.
- Cada inimigo destruido aumenta a pontuacao.
- Destruir inimigos em sequencia aumenta combo.
- Colisao com tiro inimigo ou inimigo reduz vidas.
- Quando vidas chegam a zero, exibir score final e opcao de reiniciar.

## Direcao Visual

O jogo deve parecer uma maquina arcade preta e branca:

- Fundo preto.
- Elementos principais brancos.
- Cinzas apenas para profundidade, sombras, scanlines e UI secundaria.
- Pixel art nitida, sem blur.
- Sprites com proporcoes 8-bit e silhuetas groovy.
- Explosoes formadas por blocos/pixels.
- UI minimalista com score, combo, vidas e onda atual.

## Integracao com Portfolio

Criar um novo card de projeto no portfolio para `Groovy Invaders`, na categoria de jogos/web. O card deve apontar para o repositorio/deploy do jogo e, se possivel, abrir uma previa jogavel dentro do portfolio usando modal ou embed leve.

O projeto separado deve ser mantido em sua propria pasta/repo, enquanto o portfolio apenas lista e apresenta o jogo.

## Verificacao

Antes de concluir a implementacao:

- Rodar lint/build do projeto do jogo.
- Rodar lint/build do portfolio apos adicionar o card.
- Testar o jogo em desktop e mobile.
- Verificar canvas nao branco/preto vazio.
- Verificar movimento, tiro, colisao, pontuacao, game over e restart.
- Conferir se o card aparece corretamente no portfolio.
