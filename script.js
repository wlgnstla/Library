/* eslint-disable space-before-blocks */
let myLibrary = [];

function Book() {
  (this.author = author),
    (this.title = title),
    (this.pages = pages),
    (this.read = read);
}

function addBookToLibrary() {
  let book = new Book();
  book.author = document.getElementById("author").value;
  book.title = document.getElementById("title").value;
  book.pages = document.getElementById("pages").value;
  book.read = document.getElementById("read").value;
  myLibrary.push(book);
}

function displayBook() {

  let shelf = document.querySelector('.shelf');

  addBookToLibrary();

  while(shelf.hasChildNodes()){
    shelf.removeChild(shelf.firstChild);
  }


  myLibrary.forEach((book) => {
  let bookCard = document.createElement("div");
  bookCard.classList.add("book-card");
  bookCard.setAttribute("id", myLibrary.indexOf(book));

  let author = document.createElement("p");
    author.textContent = "Author: " + book.author;

  let title = document.createElement("p");
    title.textContent = "Title: " + book.title;

  let pages = document.createElement("p");
    pages.textContent = "# of Pages: " + book.pages;

  let read = document.createElement("p");
    read.textContent = "Has Read?: " + book.read;

  let rid = document.createElement("button");
  rid.classList.add("annihilate");
  rid.textContent = "ANNIHILATE";

  let update = document.createElement("button");
  update.classList.add("update");
  update.textContent = "UPDATE";
  
  rid.addEventListener("click", function removeBook() {
    bookCard.remove();     
    myLibrary.splice(myLibrary.indexOf(book), 1);
  })

  update.addEventListener("click", function UpdateStatus() { 
    if(book.read == "Yes") {
      book.read = "No";
      read.textContent = "Has Read?: " + book.read;

    }

    else {
      book.read = "Yes";
      read.textContent = "Has Read?: " + book.read;
    }

  })

  bookCard.appendChild(author);
  bookCard.appendChild(title);
  bookCard.appendChild(pages);
  bookCard.appendChild(read);
  bookCard.appendChild(rid);
  bookCard.appendChild(update);
  shelf.appendChild(bookCard);

  })
}




let button = document.getElementById("btn");

button.addEventListener("click", displayBook);


