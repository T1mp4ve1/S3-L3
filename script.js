/* ESERCIZIO 1
       Scrivi una funzione per cambiare il titolo della pagina in qualcos'altro
    */

const changeTitle = function () {};

/* ESERCIZIO 2
       Scrivi una funzione per aggiungere al titolo della pagina una classe "myHeading"
    */

const addClassToTitle = function () {};

/* ESERCIZIO 3
       Scrivi una funzione che cambi il testo dei p figli di un div
      */

const changePcontent = function () {};

/* ESERCIZIO 4
       Scrivi una funzione che cambi la proprietà href di ogni link (tranne quello nel footer) con il valore https://www.google.com
      */

const changeUrls = function () {};

/* ESERCIZIO 5
       Scrivi una funzione che aggiunga un nuovo elemento lista alla seconda lista non ordinata
    */

const addToTheSecond = function () {};

/* ESERCIZIO 6
       Scrivi una funzione che aggiunga un paragrafo al primo div
    */

const addParagraph = function () {};

/* ESERCIZIO 7
       Scrivi una funzione che faccia scomparire la prima lista non ordinata
    */

const hideFirstUl = function () {};

/* ESERCIZIO 8 
       Scrivi una funzione che renda verde il background di ogni lista non ordinata
      */

const paintItGreen = function () {};

/* ESERCIZIO 9
       Scrivi una funzione che rimuova l'ultima lettera dall'h1 ogni volta che l'utente lo clicca
      */

const makeItClickable = function () {};

/* ESERCIZIO 10
       Crea una funzione che, al click sul footer, riveli l'URL del link interno come contenuto di un alert()
      */

const revealFooterLink = function () {};

/* ESERCIZIO 11
       Crea una funzione che crei una tabella nell'elemento con id "tableArea". 
       La tabella avrà 5 elementi e questa struttura: immagine, nome prodotto, quantità, prezzo
       */

const generateTable = function () {
  // const tableArea = document.getElementById("tableArea");
  const table = document.createElement("table");
  table.id = "products-table";
  // tableArea.appendChild(table);
  // document.body.insertBefore(table, footer);

  // generare gli elementi della tabella

  // 1. genera la prima tr
  const firstTr = document.createElement("tr");
  // 2. genera tutti i th

  const thImg = document.createElement("th");
  const thName = document.createElement("th");
  const thQty = document.createElement("th");
  const thPrice = document.createElement("th");

  thImg.innerText = "Immagine";
  thName.innerText = "Nome prodotto";
  thQty.innerText = "Quantità";
  thPrice.innerText = "Prezzo";

  // e inserirli all'interno
  // 3. inserisci i th nella tr
  firstTr.append(thImg, thName, thQty, thPrice);
  // 4. inserisci la tr nella table
  table.appendChild(firstTr);

  const tableData = [
    {
      imgSrc:
        "https://images.unsplash.com/photo-1754373383763-cb8b845de06a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Natura morta",
      quantity: 5,
      price: 300
    },
    {
      imgSrc:
        "https://images.unsplash.com/photo-1752407828488-1c6fafa47c50?q=80&w=653&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Camera da letto",
      quantity: 50,
      price: 1300
    },
    {
      imgSrc:
        "https://images.unsplash.com/photo-1754338785183-70cd3cce3d21?q=80&w=685&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Bar in Paris",
      quantity: 1,
      price: 30000
    },
    {
      imgSrc:
        "https://images.unsplash.com/photo-1754075756602-33e079cbc022?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Tokio trip",
      quantity: 1,
      price: 2000
    }
  ];

  // per poi inserire la tabella in una qualche posizione del DOM in modo che diventi visibile

  const footer = document.querySelector("footer");
  footer.insertAdjacentElement("beforebegin", table);

  // creiamo una serie di dati interni alla tabella

  tableData.forEach(dataObj => {
    // const newTr = document.createElement("tr");

    // const tdImg = document.createElement("td");
    // const firstImg = document.createElement("img");
    // firstImg.src = dataObj.imgSrc;
    // firstImg.alt = dataObj.name;

    // const tdName = document.createElement("td");
    // const tdQty = document.createElement("td");
    // const tdPrice = document.createElement("td");

    // tdImg.appendChild(firstImg);
    // tdName.innerText = dataObj.name;
    // tdQty.innerText = dataObj.quantity;
    // tdPrice.innerText = dataObj.price + "€";

    // newTr.append(tdImg, tdName, tdQty, tdPrice);

    // table.appendChild(newTr);

    addRow(dataObj.imgSrc, dataObj.name, dataObj.quantity, dataObj.price);
  });
};

generateTable();

/* ESERCIZIO 12
       Crea una funzione che aggiunga una riga alla tabella precedentemente creata e fornisca i dati necessari come parametri
    */

function addRow(imgSrc, name, qty, price) {
  const table = document.getElementById("products-table");

  const newTr = document.createElement("tr");

  const tdImg = document.createElement("td");
  const firstImg = document.createElement("img");
  firstImg.src = imgSrc;
  firstImg.alt = name;

  const tdName = document.createElement("td");
  const tdQty = document.createElement("td");
  const tdPrice = document.createElement("td");

  tdImg.appendChild(firstImg);
  tdName.innerText = name;
  tdQty.innerText = qty;
  tdPrice.innerText = price + "€";

  newTr.append(tdImg, tdName, tdQty, tdPrice);

  table.appendChild(newTr);
}

/* ESERCIZIO 14
      Crea una funzione che nasconda le immagini della tabella quando eseguita
    */

const hideAllImages = function () {
  const table = document.getElementById("products-table");

  const imgs = table.querySelectorAll("img");

  imgs.forEach(img => (img.style.display = "none"));
  // const imgs = document.querySelectorAll("table img")
};

/* EXTRA ESERCIZIO 15
      Crea una funzione che cambi il colore del h2 con id "changeMyColor" con un colore random ad ogni click ricevuto
    */

const changeColorWithRandom = function () {};
