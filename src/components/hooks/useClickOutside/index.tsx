// Stwórz hooka useClickOutside, który bedzie działać np z customowymi
// componentami typu dropdown lub select:

// interface Props {
//   onStartListeningClickOutside: (
//     event: React.MouseEvent<HTMLButtonElement>
//   ) => void;
//   waitingOnClickOutside: (event: React.MouseEvent<HTMLButtonElement>) => void;
//   onClickOutside: (event: React.MouseEvent<HTMLButtonElement>) => void;
// }

export const useClickOutside = () => {
  const onStartListeningClickOutside = () => {
    console.log("mlem");
    // return (
    //   // <div style={{ zIndex: "500" }}>
    //   //   <Component />
    //   // </div>
    // );
  };
  const waitingOnClickOutside = () => {
    // jeśli wywołano onStartListeningClickOutside to zwróć true
    return true;
  };
  const onClickOutside = () => {
    return "blep";
  };
  return {
    onStartListeningClickOutside,
    waitingOnClickOutside,
    onClickOutside,
  };
};

// który będzie działać wg poniższych wytycznych:

// działanie 1:
// -- zwraca prop onStartListeningClickOutside
// --- jeśli ta funkcja zostanie wywołana dany komponent zyskuje z-index najwyższy na stronie
// --- pod komponentem pojawia się półprzeźroczyste ciemne tło, w które można kliknąć zamykając komponent

// działanie 2:
// -- zwraca prop waitingOnClickOutside
// --- zwraca true/false jeśli została wywołana metoda onStartListeningClickOutside

// działanie 3:
// -- prop onClickOutside
// --- jesli ta funkcja zostanie wywołana komponent wraca na swoje miejsce z odpowiednim z-index
// --- znika półprzeźroczyste szare tło spod komponentu
