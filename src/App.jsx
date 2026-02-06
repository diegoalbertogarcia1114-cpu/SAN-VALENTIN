import { useState, useEffect } from 'react';
import JSConfetti from 'js-confetti';

import mixpanel from './lib/mixpanel';

function App() {
  const jsConfetti = new JSConfetti();
  const [randomValor, setRandomValor] = useState({});

  const [valueSi, setValueSi] = useState(false);

  const [buttonPosition, setButtonPosition] = useState({ top: 0, left: 0 });
  const [position, setPosition] = useState('relative');

  let random = [
    {
      id: 1,
      description: 'Di si por favor',
      img: 'https://i.pinimg.com/originals/db/aa/c1/dbaac13f6278b91a15e480752b8a7242.gif',
    },
    {
      id: 1,
      description: 'Piénsalo de nuevo.',
      img: 'https://i.pinimg.com/originals/77/6b/21/776b215bed3deeef47fd3aa657685a18.gif',
    },
    {
      id: 2,
      description: 'Vamos, atrévete a decir que sí.',
      img: 'https://media.tenor.com/DTmYqda3ZokAAAAi/peachandgoma.gif',
    },
    {
      id: 3,
      description: 'No tengas miedo, será genial.',
      img: 'https://i.pinimg.com/originals/e1/c3/88/e1c388133e0f998e25bb17c837b74a14.gif',
    },
    {
      id: 4,
      description: 'Confía en mí, será divertido.',
      img: 'https://media.tenor.com/Bn88VELdNI8AAAAi/peach-goma.gif',
    },
    {
      id: 5,
      description: 'No tengas dudas, te hará sonreír.',
      img: 'https://i.pinimg.com/originals/c6/b3/0d/c6b30d1a2dc178aeb92de63295d4ae64.gif',
    },
    {
      id: 6,
      description: 'Te prometo que será inolvidable.',
      img: 'https://media.tenor.com/N2oqtqaB_G0AAAAi/peach-goma.gif',
    },
    {
      id: 7,
      description: 'No dejes que el miedo te detenga.',
      img: 'https://i.pinimg.com/originals/db/aa/c1/dbaac13f6278b91a15e480752b8a7242.gif',
    },
    {
      id: 8,
      description: 'Confía en el destino, nos está dando una señal.',
      img: 'https://media.tenor.com/cbEccaK9QxMAAAAi/peach-goma.gif',
    },
    {
      id: 9,
      description: 'Confía en mí.',
      img: 'https://i.pinimg.com/originals/db/aa/c1/dbaac13f6278b91a15e480752b8a7242.gif',
    },
    {
      id: 10,
      description: 'No te arrepentirás.',
      img: 'https://media.tenor.com/I7KdFaMzUq4AAAAi/peach-goma.gif',
    },
    {
      id: 11,
      description: 'Ya pon que siiii',
      img: 'https://media.tenor.com/_4KFcz84OGMAAAAj/cute.gif',
    },
    {
      id: 12,
      description: 'Dale, no seas mala',
      img: 'https://media.tenor.com/Az64YfoL7JcAAAAj/rawr.gif',
    },
  ];

  const randomResponse = () => {
    mixpanel.track('Boton No Clickeado');

    let randX = Math.random() * 70;
    let randY = Math.random() * 80;

    let index = Math.floor(Math.random() * random.length);
    setPosition('absolute');
    setButtonPosition({ top: randY, left: randX });
    setRandomValor(random[index]);
  };

  useEffect(() => {
    mixpanel.track('Pagina Cargada');
  }, []);

  return (
    <main
      id="canvas"
      className="w-screen relative min-h-screen fondo flex items-center justify-center p-4"
    >
      {!valueSi ? (
        <div className="glass-card grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side: Question and Buttons */}
          <div className="flex flex-col items-center space-y-8 order-2 lg:order-1">
            <h1 className="font-bold text-4xl md:text-5xl text-center text-white drop-shadow-lg title-animate">
              ¿Quieres ser mi San Valentin?
            </h1>

            <div className="relative w-full flex justify-center">
              <img
                src={
                  Object.keys(randomValor).length === 0
                    ? 'https://i.pinimg.com/originals/db/aa/c1/dbaac13f6278b91a15e480752b8a7242.gif'
                    : randomValor.img
                }
                alt="San Valentin"
                className="rounded-2xl object-cover h-[180px] shadow-xl transition-all duration-500 hover:scale-105"
              />
            </div>

            <div className="flex flex-col sm:flex-row w-full gap-5 items-center justify-center">
              <button
                onClick={() => {
                  mixpanel.track('Boton Si Clickeado');
                  setValueSi(true);
                  jsConfetti.addConfetti({
                    emojis: ['😍', '🥰', '❤️', '😘', '🌹', '✨'],
                    emojiSize: 70,
                    confettiNumber: 250,
                  });
                }}
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-12 rounded-full text-2xl btn-premium w-full sm:w-auto overflow-hidden relative"
              >
                ¡Si!
              </button>
              <button
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-full text-xl btn-premium min-w-[180px]"
                onMouseOver={randomResponse}
                style={{
                  position: position,
                  top: position === 'absolute' ? `${buttonPosition.top}%` : 'auto',
                  left: position === 'absolute' ? `${buttonPosition.left}%` : 'auto',
                  zIndex: 50
                }}
              >
                {Object.keys(randomValor).length === 0
                  ? 'No'
                  : randomValor.description}
                <span hidden>
                  {
                    (document.title =
                      Object.keys(randomValor).length === 0
                        ? '¿Quieres ser mi San Valentin?'
                        : randomValor.description)
                  }
                </span>
              </button>
            </div>
          </div>

          {/* Right Side: Couple Personalization */}
          <div className="flex flex-col items-center space-y-6 order-1 lg:order-2">
            <div className="photo-frame">
              <img
                src="https://r.jina.ai/i/0f52d431057e4e11a3db63116fc8c460"
                alt="DIEGO & DAYANA"
                className="w-full h-auto max-w-[300px] object-cover"
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=500&auto=format&fit=crop';
                }}
              />
            </div>
            <div className="text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold couple-names drop-shadow-md">
                DIEGO & DAYANA
              </h2>
              <p className="text-xl md:text-2xl anniversary-date mt-2 opacity-90 drop-shadow-sm font-light">
                25 / 07 / 2023
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="glass-card flex justify-center items-center flex-col space-y-8 animate-bounce-slow">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center drop-shadow-md">
            ¡Sabía que dirías que sí! ❤️
          </h1>
          <img
            src="https://i.pinimg.com/originals/9b/dc/c6/9bdcc6206c1d36a37149d31108c6bb41.gif"
            alt="Success"
            className="rounded-2xl shadow-2xl h-[250px] object-cover"
          />
          <span hidden>{(document.title = '¡Sabía que dirías que sí! ❤️')}</span>
        </div>
      )}
    </main>
  );
}

export default App;
