# LED Foco — páginas com imagens no lugar dos placeholders

Arquivos atualizados:
- venda.html
- locacao.html
- retail-media.html

Alteração aplicada:
- Os blocos `<div class="photo-placeholder">...caminho...</div>` foram trocados por imagens reais usando `<img src="/assets/img/...">`.
- Mantive a classe `photo-placeholder` no wrapper para preservar o layout atual do CSS.
- Adicionei `style` inline no wrapper/imagem para evitar que o texto do placeholder apareça e para a imagem preencher o card.
- Atualizei o `og:image` da página de venda para `/assets/img/venda-hero.jpg` e da página de locação para `/assets/img/locacao-hero.jpg`.

Imagens que precisam existir no servidor:

Venda:
- /assets/img/venda-hero.jpg

Locação:
- /assets/img/locacao-hero.jpg
- /assets/img/locacao-cavalete-digital.jpg
- /assets/img/locacao-simulador-corrida.jpg
- /assets/img/locacao-tvs.jpg
- /assets/img/locacao-evento.jpg

Retail Media:
- /assets/img/retail-media-hero.jpg
- /assets/img/retail-media-case.jpg
