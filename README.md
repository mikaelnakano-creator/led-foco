# LED Foco — Mobile completo com textos curtos

Esta versão corrige a versão mobile anterior, que ficou resumida demais.

Agora:
- Desktop continua completo.
- Mobile mantém as principais fotos e seções.
- Os textos do mobile foram encurtados para facilitar leitura e conversão.
- O botão fixo no rodapé permanece no mobile.

Arquivos:
- venda.html
- locacao.html
- retail-media.html
- assets/css/style-mobile-completo.css
- assets/js/main-mobile-completo.js

No mobile:
- .desktop-main fica oculto.
- .mobile-main fica visível.

Imagens necessárias:
- /assets/img/venda-hero.jpg
- /assets/img/locacao-hero.jpg
- /assets/img/locacao-cavalete-digital.jpg
- /assets/img/locacao-simulador-corrida.jpg
- /assets/img/locacao-tvs.jpg
- /assets/img/locacao-evento.jpg
- /assets/img/retail-media-hero.jpg
- /assets/img/retail-media-case.jpg


## Correção aplicada

Foi adicionada uma correção para botões claros em fundo escuro.

Problema corrigido:
- botão branco com texto branco/invisível no hero escuro da home;
- botões `.btn-line` dentro de seções escuras herdando `color: white`.

Arquivo alterado:
- assets/css/style-mobile-completo.css


## Correção de sobreposição no mobile

Foi adicionada uma correção para o problema do título, como "Locação e totens", ficando sobre a imagem no mobile.

Arquivos:
- CSS corrigido: `assets/css/style-mobile-completo.css`
- Patch separado para colar manualmente: `fix-mobile-sobreposicao-card.css`

Onde colar manualmente:
- No CSS mobile, no final do arquivo.
- Se o site usa CSS geral + mobile, cole no último CSS carregado.
