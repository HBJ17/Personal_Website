let books = [];

document.getElementById("addBtn").addEventListener("click", addBook);

function addBook() {

    let title = document.getElementById("title").value.trim();

    let author = document.getElementById("author").value.trim();

    if (title === "" || author === "") {
        alert("Please fill all fields");
        return;
    }

    let book = {
        title: title,
        author: author,
        status: "Available"
    };

    books.push(book);

    displayBooks();

    clearFields();
}

function issueBook(index) {

    if (books[index].status === "Issued") {
        alert("Book already issued");
        return;
    }

    books[index].status = "Issued";

    displayBooks();
}

function returnBook(index) {

    books[index].status = "Available";

    displayBooks();
}

function countAvailableBooks() {

    let count = 0;

    for (let i = 0; i < books.length; i++) {

        if (books[i].status === "Available") {
            count++;
        }
    }

    return count;
}

function displayBooks() {

    let tableBody = document.getElementById("bookTableBody");

    tableBody.innerHTML = "";

    for (let i = 0; i < books.length; i++) {

        let row = `
            <tr>
                <td>${books[i].title}</td>

                <td>${books[i].author}</td>

                <td class="${books[i].status === 'Available'
                ? 'status-available'
                : 'status-issued'
            }">
                    ${books[i].status}
                </td>

                <td>
                    <button 
                        class="btn btn-success btn-sm"
                        onclick="issueBook(${i})">
                        Issue
                    </button>

                    <button 
                        class="btn btn-warning btn-sm"
                        onclick="returnBook(${i})">
                        Return
                    </button>
                </td>
            </tr>
        `;

        tableBody.innerHTML += row;
    }

    updateCounts();
}

function updateCounts() {

    let total = books.length;

    let available = countAvailableBooks();

    let issued = total - available;

    document.getElementById("totalBooks").innerText = total;

    document.getElementById("availableBooks").innerText = available;

    document.getElementById("issuedBooks").innerText = issued;
}

function clearFields() {

    document.getElementById("title").value = "";

    document.getElementById("author").value = "";
}