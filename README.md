# Projeto criado junto com a JORNADA FULLSTACK da Ebac

Para escolha do nosso projeto pegamos como base o TikTok, onde iremos fazer um clone deste app.

Para preparar o ambiente de desenvolvimento, instalamos o `node` para podermos criar nosso projeto com o `react`.

Após ter instalado o `node`, partimos para a criação do nosso projeto com o `react` rodando o comando `npx create-react-app tiktok` e verificamos se tudo ocorreu certo com a instalação, rodando o servidor com o comando `npm start`.

Instalamos algumas extensões no nosso VS Code para nos auxiliar durante o projeto:

- HTML CSS support
- JavaScript (ES6) code snippets
- Material Icon Theme
- ES7+ React/Redux/React-Native snippets
- Prettier - Code formatter

## Começando o projeto

Para iniciarmos nosso projetos excluimos alguns arquivos que não serão necessarios, como por exemplo os arquivos `setupTests.js`, `reportWebVitals.js`, `logo.svg` e `App.test.js`.

Após ter feito isso corrigimos alguns erros de importação e partimos para o desenvolvimento.

Começamos então preparando nossa estilização para o nosso clone e arquitetura de nosso html.

Trecho da estilização no arquivo `App.css`

```css
html {
  scroll-snap-type: y mandatory;
}

.App {
  background-color: black;
  height: 100vh;
  /*centralizando*/
  display: grid;
  place-items: center;
}

.app__videos {
  height: 100vh;
  max-height: 800px;
  width: 80%;
  max-width: 500px;
  border: 1px solid black;
  border-radius: 20px;
  overflow: scroll;
  scroll-snap-type: y mandatory;
  position: relative;
}

/* esconde a scroll bar no chrome, safari e opera */

.app__videos::-webkit-scrollbar {
  display: none;
}

/* esconde a scroll bar no internet explorer, edge e firefox*/

.app__videos {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
```

Trecho da arquitetura do html no arquivo `App.js`

```javascript
import "./App.css";
import Video from "./pages/video";

function App() {
  return (
    <div className="App">
      <div className="app__videos">
        <Video />
      </div>
    </div>
  );
}

export default App;
```

### Criando componente

Após estilizar e arquitetar nosso arquivo `App.js`, criamos nosso primeiro componente para a exibição de nossos videos. Dentro da pasta **src** criamos outra pasta chamada **pages** e os arquivos `video.js` e `video.css`.

Aqui vai um trecho do nosso arquivo `video.css`

```css
.video {
  height: 100%;
  width: 100%;
  scroll-snap-align: start;
  position: relative;
}

.video__player {
  height: 100%;
  width: 100%;
  object-fit: fill;
}
```

e também de nosso arquivo `video.js`

```javascript
import React, { useRef, useState } from "react";
import "./video.css";

function Video() {
  const videoRef = useRef(null);
  const [play, setPlay] = useState(false);

  function handdleStart() {
    if (!play) {
      videoRef.current.play();
      setPlay(true);
    } else {
      videoRef.current.pause();
      setPlay(false);
    }
  }

  return (
    <div className="video">
      <video
        className="video__player"
        ref={videoRef}
        onClick={handdleStart}
        loop
        src="https://firebasestorage.googleapis.com/v0/b/jornada2-eb156.appspot.com/o/ZqU6oFX6.mp4.mp4?alt=media&token=9839e872-2d5e-4da3-9299-17eb2949831d
        "
      ></video>
    </div>
  );
}

export default Video;
```

Para criarmos a funcionalidade de nossos videos de **play** e **pause** temos que criar uma referencia, e para isso foi instanciado a variavel _videoRef_ com o ReactHook `useRef` e para a funcionalidade usamos o `useState` com as variaves _play_ e _setPlay_.

Após ter instanciados nossa variaves de referencia e funcionalidade, criamos a função `handdleStart()` para de fato mudarmos o estado de **play** e **pause** de nosso video.

<<<<<<< HEAD

## Fazendo o footer do video

Para criamos o footer de nosso video, criamos mais um componente chamado `VideoFooter` dentro das pastas `components\footer`.

E inserimos dentro do componente `Video`

```javascript
import React, { useRef, useState } from "react";
import VideoFooter from "./components/footer/VideoFooter";
import "./video.css";

function Video() {
  const videoRef = useRef(null);
  const [play, setPlay] = useState(false);

  function handdleStart() {
    if (!play) {
      videoRef.current.play();
      setPlay(true);
    } else {
      videoRef.current.pause();
      setPlay(false);
    }
  }

  return (
    <div className="video">
      <video
        className="video__player"
        ref={videoRef}
        onClick={handdleStart}
        loop
        src="https://static.videezy.com/system/resources/previews/000/034/644/original/Boy_plane8.mp4"
      ></video>
      {/* Side bar*/}
      {/* Footer */}
      <VideoFooter />
    </div>
  );
}

export default Video;
```

A estrutura do nosso componente `VideoFooter` ficou deste jeito

```javascript
import React from "react";
import "./VideoFooter.css";
import MusicNoteIcon from "@mui/icons-material/MusicNote";

function VideoFooter() {
  return (
    <div className="video__footer">
      <div className="videoFooter__text">
        <h3>@maatheus</h3>
        <p>Descrição do video</p>
        <div className="videoFooter__music">
          <MusicNoteIcon className="videoFooter__icon" />
          <div className="videoFooterMusic__text">
            <p>Titulo da musica</p>
          </div>
        </div>
      </div>
      <img
        className="videoFooter__record"
        alt="Imagem de um vinil girando"
        src="https://static.vecteezy.com/system/resources/previews/001/207/957/original/vinyl-record-png.png"
      />
    </div>
  );
}

export default VideoFooter;
```

Criamos a animação do texto saindo da direita para a esquerda com os `@keyframes` e também a imagem do vinil girando. Para alterarmos o fundo da imagem do vinil usamos o seguinte código dentro do css:

```css
/* mudando a cor do fundo da imagem */
filter: invert(1);
```

e assim ficou nosso arquivo `VideoFooter.css`

```css
.video__footer {
  position: relative;
  bottom: 20%;
  color: white;
  margin-left: 30px;
}

.videoFooter__text h3 {
  padding-bottom: 20px;
}

.videoFooter__text p {
  padding-bottom: 20px;
}

.videoFooter__music {
  display: flex;
}

.videoFooterMusic__text {
  width: 80%;
  overflow-x: hidden;
}

.videoFooterMusic__text p {
  animation: mooveTheText 2s infinite linear;
}

.videoFooter__record {
  animation: spinTheRecord 3s infinite linear;
  position: absolute;
  bottom: 5px;
  right: 20px;
  height: 50px;

  /* mudando a cor do fundo da imagem */
  filter: invert(1);
}

/* animando o vinil */
@keyframes spinTheRecord {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes mooveTheText {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}
```

### Criando a SideBar do video

Começamos criando mais uma pasta dentro da pasta **components** chamada de `sidebar` seguido dos dois arquivos `VideoSideBar.js` e `VideoSideBar.css`.

Importamos alguns icones do _Material Icons_ para a criação dos icones do nosso side bar:

```js
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatIcon from "@mui/icons-material/Chat";
import ShareIcon from "@mui/icons-material/Share";
```

E assim ficou a estrutura do arquivo `VideoSideBar.js`

```js
import React, { useState } from "react";
import "./VideoSideBar.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatIcon from "@mui/icons-material/Chat";
import ShareIcon from "@mui/icons-material/Share";

function VideoSideBar({ likes, messages, shares }) {
  const [liked, setLiked] = useState(false);

  function handdleLike() {
    setLiked(!liked);
  }

  return (
    <div className="video__sidebar">
      <div className="videoSideBar__options" onClick={handdleLike}>
        {liked ? (
          <FavoriteIcon fontSize="large" />
        ) : (
          <FavoriteBorderIcon fontSize="large" />
        )}
        <p>{liked ? likes + 1 : likes}</p>
      </div>
      <div className="videoSideBar__options">
        <ChatIcon fontSize="large" />
        <p>{messages}</p>
      </div>
      <div className="videoSideBar__options">
        <ShareIcon fontSize="large" />
        <p>{shares}</p>
      </div>
    </div>
  );
}

export default VideoSideBar;
```

Observe que usamos operadores ternarios para a exibição de icones e quantidade de likes. Criamos a função `handdleLikee()` para a aletaração dos icones "curtido" e não "curtido".

Adicionamos _props_ ao nosso componente onde passamos diretamente pelo nosso `App.js` para o componente `Video` e assim para os componentes `VideoSideBar` e `VideoFooter`.

### Componente `App`

```js
<Video
  likes={111}
  messages={222}
  shares={333}
  name="Matheus"
  description="Brecker the goalkeeper"
  music="Musica épica"
  url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4"
/>
```

### Componentes `VideoSideBar` e `VideoFooter`

```js
<VideoSideBar likes={likes} messages={messages} shares={shares} />;

<VideoFooter name={name} description={description} music={music} />;
```

Após estes passos criamos então nossa estilização

```css
.video__sidebar {
  position: absolute;
  top: 50%;
  right: 10px;
  color: white;
}

.videoSideBar__options {
  padding: 20px;
  text-align: center;
}
```
