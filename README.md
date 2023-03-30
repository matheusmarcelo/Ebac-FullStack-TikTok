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

```
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

```
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

```
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

```
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

![image](https://user-images.githubusercontent.com/76077366/228705880-55eeec00-2de8-43f6-9e28-bf11f5d589e5.png)
