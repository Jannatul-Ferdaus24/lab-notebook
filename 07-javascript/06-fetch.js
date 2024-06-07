const url = "https://anapioficeandfire.com/api/books/";
const app = document.querySelector("#books");
const loadingIndicator = document.getElementById("loading");

const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    const books = await response.json();
    loadingIndicator.style.display = "none";

    books.forEach((book) => {
      const bookElement = document.createElement("div");
      bookElement.classList.add("book", "my-3", "p-3", "border", "rounded");

      const title = document.createElement("h3");
      title.textContent = `Title: ${book.name}`;
      bookElement.appendChild(title);

      const author = document.createElement("p");
      author.textContent = `Author: ${book.authors.join(", ")}`;
      bookElement.appendChild(author);

      const published = document.createElement("p");
      published.textContent = `Published: ${new Date(
        book.released
      ).getFullYear()}`;
      bookElement.appendChild(published);

      const pages = document.createElement("p");
      pages.textContent = `Pages: ${book.numberOfPages}`;
      bookElement.appendChild(pages);

      app.appendChild(bookElement);
    });
  } catch (error) {
    console.error("Error fetching data:", error);
    loadingIndicator.textContent = "Error loading books";
  }
};

fetchData(url);
