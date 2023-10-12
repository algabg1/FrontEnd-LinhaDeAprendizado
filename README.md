# FrontEnd-LinhaDeAprendizado
Linha de aprendizado Front-End

- `HTML e CSS`
## HTML, CSS e Javascript, quais as diferenças?

HTML: linguagem de marcação utilizada para estruturar os elementos da página, como parágrafos, links, títulos, tabelas, imagens e até vídeos.

CSS: linguagem de estilos utilizada para definir cores, fontes, tamanhos, posicionamento e qualquer outro valor estético para os elementos da página.

Javascript: linguagem de programação utilizada para deixar a página com mais movimento, podendo atualizar elementos dinamicamente e lidar melhor com dados enviados e recebidos na página.

### Estrutura Básica HTML

Para que um documento seja interpretado pelo navegador, é necessário que o arquivo tenha a extensão .html e a partir disso, poderá ser exibido por qualquer navegador web.

```
<!--Tag que precisa de fechamento-->
    <h1>Olá Mundo!</h1>
    <!--Tag de auto fechamento-->
    <img loading="lazy" src="banner.jpg">
```

- ` <!DOCTYPE html> ` Informa ao navegador que esse documento é do tipo HTML e sua versão. Quando está escrito apenas html, indica que é a mais recente.
- ` <html> ` Representa a raiz do documento, serve com um container que engloba todos os outros elementos HTML.
- ` <body> ` É onde fica todo o conteúdo de texto, imagem e vídeos, em que o usuário vê e interage, nele os conteúdos são estruturados pelas demais tags do HTML.
- ` <script> ` Esse elemento contém instruções de script ou aponta para um arquivo de script externo por meio do atributo src.
- ` <head> ` Compreende as informações do documento que serão interpretadas pelo navegador (metadados). Como por exemplo, título do documento, links para folhas de estilo etc.
- ` <meta> ` Define metadados, ou seja, informações sobre dados de um documento HTML.
- ` <link> ` Contém apenas atributos e faz a relação do documento HTML com recursos externos, é comumente usado para vincular uma folha de estilo externa.
- ` <style> ` Essa tag é usada para declarar estilos (CSS) para um documento.

Tags semânticas são tags que possuem um significado, que dão sentido a informação de texto ao navegador e buscadores, como por exemplo, utilizar a tag <header> para cabeçalhos ou <article> para dar um significado de artigo para aquele bloco de texto.

![image](https://github.com/algabg1/FrontEnd-LinhaDeAprendizado/assets/101957321/24e740d6-5704-4599-b55d-f96e968bab9a)

## [1-html-css](https://github.com/algabg1/FrontEnd-LinhaDeAprendizado/tree/main/1-html-css): ambientes de desenvolvimento, estrutura de arquivos e tags

## HTML e CSS: Classes, posicionamento e Flexbox

- `margin` (margem): o maior e mais externo retângulo, que está na cor laranja-claro.

- `border` (borda): está dentro do retângulo da margem, sendo proporcionalmente menor a ele, e é da cor amarelo claro.

- `padding` (espaçamento): retângulo verde-claro que está dentro do retângulo da borda, também proporcionalmente menor a ele. Área em torno do conteúdo.

- `conteúdo`: um retângulo azul-claro que está dentro do retângulo de espaçamento e é proporcionalmente menor que ele. Onde texto e imagens aparecem.

![image](image.png)

Se não são definidos, há um padrão que é criado automaticamente para a página.

### Flexbox CSS

Os filhos de um elemento com Flexbox podem se posicionar em qualquer direção e pode ter dimensões flexíveis para se adaptar.

```
  .flex-container {
    display: flex;
    flex-direction: row | row-reverse | column | column-reverse;
    flex-wrap: nowrap | wrap | wrap-reverse;
    flex-flow: row nowrap | row wrap | column nowrap | column wrap;
    justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly;
    align-items: stretch | flex-start | flex-end | center | baseline;
    align-content: flex-start | flex-end | center | space-between | space-around | stretch;
    order: <número>; /* o valor padrão é 0 */
    flex-grow: <numero>; /* o valor default (padrão) é 0 */
    flex-shrink: <número>; /* o valor padrão é 0 */
    flex-basis: flex-basis:  | auto; /* o valor padrão é auto */
    flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
    align-self: auto | flex-start | flex-end | center | baseline | stretch;
  }
```

Para que as propriedades funcionem nos elementos-filhos, as pais devem ter propriedade display: flex;.

## HTML e CSS: cabeçalho, footer e variáveis CSS

```
<head>
</head>

<body>
  <header>
    <nav>
    </nav>
  </header>

  <main>
    <section>
    </section>
  </main>

  <footer>
  </footer>

</body>
```

### Navegando entre páginas

```
    <header>
        <nav>
            <a href="index.html">Home</a>
            <a href="about.html">Sobre mim</a>
        </nav>
    </header>
```

## HTML e CSS: trabalhando com responsividade e publicação de projetos

### Srcset

## HTML e CSS: praticando HTML/CSS

## HTML e CSS: responsividade com mobile-first
