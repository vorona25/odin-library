// submit_button connected to submit in pop up form
let submit_button = document.querySelector(".submit")

// book_form references form in html
let book_form = document.querySelector(".form_container")

// Access html book table
let book_table = document.querySelector(".book_table")

// Access book table body from html to add table rows with new books
let table_body = document.querySelector(".book_table_body")

// Access all the delete buttons connected to each book in table
let delete_button2 = document.getElementsByClassName("btn_delete");


// library array to keep track of all the books read
let myLibrary = [];

// Book constructor which creates book object that can be used to store all associated values
function Book(title, author, totalPages, readStatus) {
    // constructor
    this.title = title;
    this.author = author;
    this.totalPages = totalPages;
    this.readStatus = readStatus;
}

// Prototype function to use all constructor elements and create array storing them all
Book.prototype.makeArray = function() {
    bookArray = [this.title, this.author, this.totalPages, this.readStatus];
    return bookArray;
}

// Add initial table book values to library
let testBook1 = new Book("Moby Dick", "Herman Melville", 378, "Read");
myLibrary.push(testBook1);
let testBook2 = new Book("Count of Monte Christo", "Alexandre Dumas", 640, "Read")
myLibrary.push(testBook2)


// function that takes in array and stores book in library and displays on page   
function addBookToLibrary() {

    // Get values of title, author, number of pages, read status from form inputs
    let bookTitle = document.getElementById("book_title").value;
    let bookAuthor = document.getElementById("book_author").value;
    let bookPages = document.getElementById("book_pages").value;
    // use checkbox true/false value to turn into read or not read
    let readStatus = ""
    if (document.getElementById("completed").checked == true) {
        readStatus = "Read"
    }
    else if (document.getElementById("completed").checked == false) {
        readStatus = "Not Read"
    }

    // Create new book and store in library array
    let newBook = new Book(bookTitle, bookAuthor, bookPages, readStatus)
    myLibrary.push(newBook)

    console.log(myLibrary)
    console.log(newBook)


    // use prototype to make book array
    bookArray = newBook.makeArray();
    // Use function to add values of book to html table
    addBookToTable(bookArray);
}

// function that takes in book array and adds it to html table
function addBookToTable(bookArray) {

    // create new table row
    let tableRow = document.createElement("tr");

    // loop through book array and add values to each cell of table
    for (let i = 0; i < bookArray.length - 1; i++) {

        tableCell = document.createElement("td")
        text = document.createTextNode(bookArray[i])

        tableCell.appendChild(text)
        tableRow.appendChild(tableCell)
    }

    // Create specific button for readStatus
    readButtonCell = document.createElement("td");
    // create button, give it read/not read text and class to apply styling from css and onclick
    readButton = document.createElement("button");
    readButton.textContent = bookArray[3]; // readStatus stored in bookArray[3]
    readButton.classList.add("btn_read");
    readButton.setAttribute("onclick", "bookRead()");
    // Add button to parent td
    readButtonCell.appendChild(readButton);
    // add button to end of table row
    tableRow.appendChild(readButtonCell);


    // Add delete button at end of row
    // Create td for button to be stored in
    tableButtonCell = document.createElement("td");
    // create button, give it delete text and class to apply styling from css and onclick
    tableButton = document.createElement("button");
    tableButton.textContent = "Delete";
    tableButton.classList.add("btn_delete");
    tableButton.setAttribute("onclick", "deleteBook()");
    // Add button to parent td
    tableButtonCell.appendChild(tableButton);
    // add button to end of table row
    tableRow.appendChild(tableButtonCell);

    // Add finished row to table
    table_body.appendChild(tableRow);

    console.log("new book row index: " + tableRow.rowIndex);
}

function bookRead() {

    // get button that was clicked from DOM
    let read_button = event.currentTarget;

    // Get specific book using index and from library array
    book_index = read_button.closest("tr").rowIndex - 1;
    current_book = myLibrary[book_index];
    console.log(current_book)

    // if else to swap between Read and Not Read on webpage and constructor value
    if (current_book.readStatus == "Read") {

        current_book.readStatus = "Not Read"
        read_button.textContent = "Not Read";
    }
    else if (current_book.readStatus = "Not Read") {
        current_book.readStatus = "Read"
        read_button.textContent = "Read";
    }

    console.log(current_book)
}

function deleteBook() {

    // get button that was clicked from DOM
    let delete_button = event.currentTarget;

    // get index of row of book using button
    book_index = delete_button.closest("tr").rowIndex;
    console.log("book index: " + book_index)

    // use book index to delete row from table
    book_table.deleteRow(book_index);

    // delete book from library array (use book_index-1 insce row has header at 0 index)
    myLibrary.splice(book_index - 1, 1);
    console.log(myLibrary)             
}



// function to open pop up form
function openForm() {
    document.getElementById("myForm").style.display = "block";
}
  
// function to close pop up form
function closeForm() {
    document.getElementById("myForm").style.display = "none";
}


// function to work with submitting pop up form, store inputs put in form by user
function submitForm() {

  
    book_form.addEventListener("submit", e => {

        // prevent immediate refresh
        e.preventDefault();

        // Add book to library and html page
        addBookToLibrary();
  
        // close form after have everything stored
        closeForm();

        // clears form so can submit new book
        book_form.reset();
    })
}

document.addEventListener("DOMContentLoaded", function() {

    submitForm();
})






