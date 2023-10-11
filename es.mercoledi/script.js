fetch("https://striveschool-api.herokuapp.com/books")
  .then((Response) => {
    if (Response.ok) {
      return Response.json();
    } else {
      throw new error("errore!");
    }
  })

  .then((books) => {
    console.log(books);
    const row = document.getElementById("row-libri");

    books.forEach((book) => {
      const col = document.createElement("div");
      col.classList.add("col", "col-4");

      const card = document.createElement("div");
      card.classList.add("card");
      const cardImg = document.createElement("img");
      cardImg.setAttribute("src", book.img);
      card.appendChild(cardImg);
      col.appendChild(card);
      row.appendChild(col);

      const cardBody = document.createElement("div");
      const title = document.createElement("div");
      title.innerText = book.title;
      card.appendChild(title);

      const price = document.createElement("div");
      price.innerText = book.price;
      card.appendChild(price);

      const button = document.createElement("button");
      button.innerText = "scarta";
      card.appendChild(button);

      function invisible() {
        card.classList.add("invisible");
      }

      button.addEventListener("click", invisible);
    });
  });
