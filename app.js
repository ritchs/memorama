document.addEventListener("DOMContentLoaded", () => {
  //card options
  let tiempo;
  let pausa=true;
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
      let size = Math.ceil(screen.height/cardArray.length)/2;
      console.log(size);
      const card = document.createElement("img");
      card.style.width = `${size*10}px`;
      card.style.height = `${size*10}px`;
      card.setAttribute("class", "img-fluid img-thumbnail");
      card.setAttribute("alt", "Responsive image");
      card.setAttribute("src", "images/cubo3d.png");
      card.setAttribute("data-id", i);
      card.addEventListener("click", flipCard);
      grid.appendChild(card);
      if (pausa) {
        drawScore();
      }
     
    }
  }

  function drawScore() {
    
    var n = 0;
    let m = 0;
    var l = document.getElementById("tiempo");
    window.setInterval(function () {
      if (n == 60) {
        n = 0;
        m++;
      }
      if (n<=9) {
        n = `0${n}`;
      }
      l.innerHTML = `Time ${m}:${n}`;
      tiempo = `${m}:${n}`;
      n++;
    }, 1000);
  }
  //se consulta si son la misma imagen o no 
  function checkForMatch() {
    const cards = document.querySelectorAll("img");
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];

    if (optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute("src", "images/cubo3d.png");
      cards[optionTwoId].setAttribute("src", "images/cubo3d.png");
      Swal.fire({
        position: "center",
        icon: "info",
        title: "Diste click en la misma imagen",
        showConfirmButton: false,
        timer: 1000
      });
    } else if (cardsChosen[0] === cardsChosen[1]) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Encontraste el par",
        showConfirmButton: false,
        timer: 1000
      });
  
      cards[optionOneId].setAttribute("src", "images/404.png");
      cards[optionTwoId].setAttribute("src", "images/404.png");
      cards[optionOneId].removeEventListener("click", flipCard);
      cards[optionTwoId].removeEventListener("click", flipCard);
      cardsWon.push(cardsChosen);
    } else {
      cards[optionOneId].setAttribute("src", "images/cubo3d.png");
      cards[optionTwoId].setAttribute("src", "images/cubo3d.png");
      Swal.fire({
        position: "center",
        icon: "warning",
        title: "Lo Siento Vuelve Intentar",
        showConfirmButton: false,
        timer: 1000
      });
    }
    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent =`Score: ${cardsWon.length}`;
    if (cardsWon.length === cardArray.length / 2) {
      resultDisplay.resultDisplay = "G  A  N  A  S  T  E";
    }
    if (cardsWon.length === cardArray.length / 2) {
      for (let index = 0; index < 10; index++) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "G  A  N  A  S  T  E",
          html: `<b>Terminaste con un tiempo de </b>${tiempo}`,
          showConfirmButton: false,
          timer: 1500
        });
        setTimeout(() => {
          Swal.fire({
            title: "Quieres volver a jugar?" ,
            padding: "3em",
            color: "#716add",
            background: "#fff url(/images/trees.png)",
            backdrop: `
              rgba(0,0,123,0.4)
              url("https://media.giphy.com/media/p0AoJQSxqcS0r6LIaD/giphy.gif")
              center
              no-repeat
            `,
            showDenyButton: true,
            confirmButtonText: "SI",
            denyButtonText: `NO`
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
              Swal.fire("Reiniciando!", "", "success");
              window.location.reload();
            } else if (result.isDenied) {
              Swal.fire("Changes are not saved", "", "info");
            }
          });
        }, "2000");
  
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
