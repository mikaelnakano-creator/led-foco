
SITE LED FOCO — VERSÃO INSTITUCIONAL PREMIUM V2

Esta versão foi refeita para NÃO ter cara de landing page.
Conceito visual: site institucional moderno, editorial, premium e com foco em portfólio/projetos.

ARQUIVOS:
- index.html
- venda.html
- locacao.html
- assets/css/style.css
- assets/js/main.js
- assets/img/

DOMÍNIO:
ledfoco.com.br

COMO PUBLICAR NO VERCEL:
1. Suba todos os arquivos na raiz do repositório.
2. O index.html deve ficar direto na raiz, não dentro de uma pasta extra.
3. Importe o repositório no Vercel.
4. Framework: Other.
5. Build Command: vazio.
6. Output Directory: vazio.
7. Adicione o domínio ledfoco.com.br.

DNS HOSTINGER:
- Registro A: @ -> 76.76.21.21
- Registro CNAME: www -> cname.vercel-dns.com

GTM:
Em cada HTML há dois comentários:
- GOOGLE TAG MANAGER: colar o script principal dentro do head.
- GOOGLE TAG MANAGER NOSCRIPT: colar o noscript logo após abrir o body.

EVENTOS PARA GTM:
Os botões de WhatsApp disparam dataLayer.push com:
- lead_whatsapp_led_foco_geral
- lead_whatsapp_led_foco_venda
- lead_whatsapp_led_foco_locacao
- lead_whatsapp_led_foco_residencial
- lead_whatsapp_led_foco_venda_comercial
- lead_whatsapp_led_foco_venda_residencial

Cada clique também envia:
- lead_intent
- lead_source
- page_path

IMAGENS RECOMENDADAS:
Home:
- assets/img/hero-led-foco.jpg: foto principal forte. Preferência: painel em fachada/empresa/evento com impacto.
- assets/img/home-venda.jpg: painel instalado em empresa.
- assets/img/home-locacao.jpg: painel ou totem em evento.
- assets/img/retail-media.jpg: supermercado, varejo, ponto de venda ou aplicação de mídia.
- assets/img/residencial-led.jpg: painel em área gourmet, sala, fachada residencial, condomínio ou ambiente de lazer.
- assets/img/case-01.jpg: melhor case geral.
- assets/img/case-02.jpg: fachada.
- assets/img/case-03.jpg: evento.
- assets/img/case-04.jpg: retail media.
- assets/img/case-05.jpg: corporativo.

Venda:
- assets/img/venda-hero.jpg: painel instalado em empresa/fachada.
Locação:
- assets/img/locacao-hero.jpg: painel ou totem em evento.
- assets/img/locacao-evento.jpg: foto ampla de evento.

LOGO:
Por enquanto a marca está em texto com símbolo LF.
Quando tiver o logo, substitua o bloco .brand por <img src="/assets/img/logo-led-foco.png">.

ALTERAÇÕES V4:
- Home sem seção explicativa extensa de Retail Media; Retail Media agora tem página própria: retail-media.html.
- Menu sem item Contato.
- Página de Locação inclui: painéis de LED, totens, cavaletes digitais, TVs e simulador de corrida.
- Botão flutuante usa ícone de WhatsApp em SVG.
- Imagens adicionais:
  - assets/img/locacao-cavalete-digital.jpg
  - assets/img/locacao-simulador-corrida.jpg
  - assets/img/locacao-tvs.jpg
  - assets/img/retail-media-hero.jpg
  - assets/img/retail-media-case.jpg
- Evento adicional:
  - lead_whatsapp_led_foco_retail_media
