<h1 align="center"> 
  B.S Callister 
</h1>

<h2 align="center"> 
     <img src='https://i.imgur.com/edU3At2.png' width='25px'>
     Language:
</h2>

<p align='center'>
  <img src='https://img.shields.io/badge/lang-en-blue'>
  <img src='https://img.shields.io/badge/lang-pt--br-brightgreen'>
</p>

<h2 align="center">
  <img src='https://i.imgur.com/eR3h2po.png' width='25px'>
  Informação sobre o projeto: 
</h2>

<p align='justify'>
  Esse projeto tem como base criar uma landing page do zero, com intuito de colocar em práticas conhecimentos relacionados a JavaScript sem ter que seguir algum roteiro de algum curso ou algo do gênero, um amigo e programador chamado <a href='https://github.com/Gustavo-Alberico'>Gustavo Alberico</a> deu uma sugestão de fazer uma landing page com o tema de turismo espacial, utilizando um protótipo que o mesmo criou e seguindo suas ideias de projeto, como se fosse um cliente pedindo um projeto.
</p>
<p align= 'justify'>
  A partir dessa ideia, surgiu o B.S Callister, utilizando sites de hoteis famosos como inspiração e usando as recentes notícias sobre o famoso hotel 
  <a href='https://www.istoedinheiro.com.br/voyager-station-o-primeiro-hotel-de-luxo-no-espaco/'>
    <b>
      Voyager Station
    </b>
  </a>
  que tem previsão para iniciar sua construção a partir de 2025, utilizei ele como uma forte inspiração para a criação dessa landing page.
</p>

<h2 align='center'>
  <img src='https://i.imgur.com/4wdvRVQ.png' width='25px'>
  Baixe o projeto
</h2>

```
# Clone o repositório
$ git clone https://github.com/blueishot/B.S-Callister.git

# Entre no diretório
$ cd B.S-Callister
```

<h2 align="center">
  <img src='https://i.imgur.com/X7mSAhJ.png' width='25px'>
  Visão Geral:
</h2>

<p align='justify'>
  Inicialmente, ao começar o projeto foi preciso achar algum nome que não saísse muito do escopo do projeto, algo que ao ver o nome você consegue atrelar ao tema, logo pensei em utilizar como referência o nome de um episódio da série 
  <b>
    Black Mirror: 
    <a href='https://www.youtube.com/watch?v=qgTtyfgzGc0'>
      U.S.S. Callister
    </a>
  </b>
  .
</p>

<p align='justify'>
    Após a escolha do nome, a primeira coisa que pensei em fazer foi o menu, primeiramente pensei que tipo de menu seria viável para um hotel, quais botões deverão ser necessários para uma landing page voltada para isso, fiz um "logo" com apenas o nome do projeto e com 4 botões diferentes: Booking, About, Contact e por fim Login, como se trata de uma landing page não se espera algo tão complexo, por isso não pensei em fazer um menu de tooltip, porém um botão que irá levar a alguma sessão da página, então ao clicar em cada botão ele irá te levar a alguma parte da página, menos o login.
</p>

<p align='center'>
    O menu:
</p>
<p align='center'>
    <img src='https://i.imgur.com/AuUAMEO.png'>
</p>

<p align='justify'>
    Após o menu estar pronto, comecei a fazer a primeira página, onde de acordo com o pedido do <a href='https://github.com/Gustavo-Alberico'>Gustavo Alberico</a> seria fazer uma hero com uma imagem e um bloco de informação ao lado, e com as escolhas das imagens que ele escolheu optei por colocar inicialmente uma imagem que refletia o céu para combinar com a imagem escolhida, basicamente nessa primeira parte não utilizei quase nada de Javascript, porém utilizei algumas funções de CSS como por exemplo o abuso de display flex:
</p>

<p align='center'>
    Primeira página:
</p>

<p align='center'>
    <img src='https://i.imgur.com/tAtbt4l.png'>
</p>

<p align='justify'>
    A segunda página foi quando começou o projeto de verdade, com a utilização de Javascript criei um "slide", primeiramente criei várias arrays e tornei elas um object com a utilização de <b>map</b>, cada array tinha uma informação para o slide: título, descrição, preço e imagem, então utilizando uma função de contador de alteração de número, sempre que houvesse um onclick esse número aumentava ou diminuiria de acordo com a seta que o usuário clicaria, tornando basicamente um slide utilizando object, já em questões de cores, utilizei o background com uma mistura de cores do fim do background de cima e começo do background de baixo para dar uma sensação de continuidade.
</p>

<p align='center'>
    Slide:
</p>

<p align='center'>
    <img src='https://i.gyazo.com/7e2fc1ca952d37621f993d526310273c.gif' width='450px'>
</p>

<p align='justify'>
    A terceira página foi basicamente utilizando o mesmo principio, ter um conteúdo e uma imagem, porém dessa vez era necessário um conteúdo escrito mais elaborado, portanto utilizei essa parte para fazer sobre o About, utilizei uma espécie de Slide novamente, porém apenas nas imagens, utilizando apenas um texto fixo e em cima um slide que muda cada imagem, entretanto, a execução pelo Javascript foi diferente, utilizei apenas a ferramente de concetenação de string (${}) e fui mudando o número da imagem de acordo com o contador.
</p>

<p align='center'>
    Terceira página:
</p>

<p align='center'>
    <img src='https://i.gyazo.com/3a52ccf32e4dc0217629f89b92f197de.gif' width='450px'>
</p>

<p align='justify'>
    E por fim, o último pedido que era o <b>Footer</b>, basicamente apenas utilizei css puro nele.
</p>

<p align='center'>
    <img src='https://i.imgur.com/cGrchZ5.png'>
</p>

<p align='justify'>
    Adicionei uma função de um botão utilizando o position fixed, que ao deslocar a página para baixo ele irá aparecer e ao clicar nesse botão será redirecionado para o começo da página utilizando também um scroll smooth, tudo isso usando no javascript <b>scrollTop</b> e <b>scrollTo</b>.
</p>

<p align='center'>
    Botão:
</p>

<p align='center'>
    <img src='https://i.gyazo.com/974939331f8b20c16a531a3a77d2213e.gif'>
</p>

<h2 align='center'>
  <img src='https://i.imgur.com/DBKxyXS.png' width='25px'>
    Ferramentas:
</h2>

<ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>Javascript</li>
    <li>Mycolor.space</li>
    <li>RGABColorPicker</li>
    <li>Pinterest</li>
    <li>W3School</li>
