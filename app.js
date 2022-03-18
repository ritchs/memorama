document.addEventListener("DOMContentLoaded", () => {
  //card options
  const cardArray = [
    {
      name: "binario",
      img: "images/binario.png",
    },
    {
      name: "rj45",
      img: "images/rj45.png",
    },
    {
      name: "bitcoin",
      img: "images/bitcoin.png",
    },
    {
      name: "camara",
      img: "images/camara.png",
    },
    {
      name: "nube",
      img: "images/nube.png",
    },
    {
      name: "pantalla",
      img: "images/pantalla.png",
    },
    {
      name: "usb",
      img: "images/usb.png",
    },
    {
      name: "cpu",
      img: "images/cpu.png",
    },
    {
      name: "ram",
      img: "images/ram.png",
    },
    {
      name: "disco",
      img: "images/disco.png",
    },
    {
      name: "mouse",
      img: "images/mouse.png",
    },
    {
      name: "teclado",
      img: "images/teclado.png",
    },
    {
      name: "rj45",
      img: "images/rj45.png",
    },
    {
      name: "binario",
      img: "images/binario.png",
    },
    {
      name: "bitcoin",
      img: "images/bitcoin.png",
    },
    {
      name: "camara",
      img: "images/camara.png",
    },
    {
      name: "nube",
      img: "images/nube.png",
    },
    {
      name: "pantalla",
      img: "images/pantalla.png",
    },
    {
      name: "usb",
      img: "images/usb.png",
    },
    {
      name: "cpu",
      img: "images/cpu.png",
    },
    {
      name: "ram",
      img: "images/ram.png",
    },
    {
      name: "disco",
      img: "images/disco.png",
    },
    {
      name: "mouse",
      img: "images/mouse.png",
    },
    {
      name: "teclado",
      img: "images/teclado.png",
    },
  ];
  //se crea el random de imagenes
  cardArray.sort(() => 0.5 - Math.random());
  const resultDisplay = document.querySelector("#score");
  const grid = document.querySelector(".grid");
  let cardsChosen = [];
  let cardsChosenId = [];
  let cardsWon = [];

  //se muestra la imagenes volteadas
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement("img");
      card.setAttribute("src", "images/cubo3d.png");
      card.setAttribute("data-id", i);
      card.addEventListener("click", flipCard);
      grid.appendChild(card);
    }
  }

  //se consulta si son la misma imagen o no
  function checkForMatch() {
    const cards = document.querySelectorAll("img");
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];

    if (optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute("src", "images/cubo3d.png");
      cards[optionTwoId].setAttribute("src", "images/cubo3d.png");
      UIkit.notification({
        message: "Diste click en la misma imagen",
        status: "warning",
        timeout: 200,
      });
    } else if (cardsChosen[0] === cardsChosen[1]) {
      UIkit.notification({
        message: "Encontraste el par",
        status: "primary",
        timeout: 200,
      });
      cards[optionOneId].setAttribute("src", "images/404.png");
      cards[optionTwoId].setAttribute("src", "images/404.png");
      cards[optionOneId].removeEventListener("click", flipCard);
      cards[optionTwoId].removeEventListener("click", flipCard);
      cardsWon.push(cardsChosen);
    } else {
      cards[optionOneId].setAttribute("src", "images/cubo3d.png");
      cards[optionTwoId].setAttribute("src", "images/cubo3d.png");
      UIkit.notification({
        message: "Lo Siento Vuelve Intentar",
        status: "danger",
        timeout: 200,
      });
    }
    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = cardsWon.length;
    if (cardsWon.length === cardArray.length / 2) {
      resultDisplay.textContent = "G  A  N  A  S  T  E";
    }
    if (cardsWon.length === cardArray.length / 2) {
      for (let index = 0; index < 10; index++) {
        UIkit.notification({
          message: "---------- !G A N A S T E¡ ---------",
          pos: "top-left",
          status: "success",
          timeout: 200,
        });
        UIkit.notification({
          message: "---------- !G A N A S T E¡ ---------",
          pos: "top-center",
          status: "success",
          timeout: 200,
        });
        UIkit.notification({
          message: "---------- !G A N A S T E¡ ---------",
          pos: "top-right",
          status: "success",
          timeout: 200,
        });
        UIkit.notification({
          message: "---------- !G A N A S T E¡ ---------",
          pos: "bottom-left",
          status: "success",
          timeout: 200,
        });
        UIkit.notification({
          message: "---------- !G A N A S T E¡ ---------",
          pos: "bottom-center",
          status: "success",
          timeout: 200,
        });
        UIkit.notification({
          message: "---------- !G A N A S T E¡ ---------",
          pos: "bottom-right",
          status: "success",
          timeout: 200,
        });
        UIkit.modal.confirm("Quieres volver a jugar?").then(function () {
          console.log("Confirmed.");
          window.location.reload();
        });
      }
    }
  }

  //se voltea la imagen
  function flipCard() {
    let cardId = this.getAttribute("data-id");
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute("src", cardArray[cardId].img);
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  }

  createBoard();
});
