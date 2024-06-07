const url = "https://anapioficeandfire.com/api/books/";

const $app = $("#books");
const $loading = $("#loading");

const addBookToDOM = (item) => {
  console.log(item);
  let $element = $("<div></div>");
  let $title = $("<h4></h4>");
  let $author = $("<p></p>");
  let $published = $("<p></p>");
  let $pages = $("<p></p>");

  $element.css({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "20px",
  });

  $title.text(item.name);
  $author.text(`by ${item.authors[0]}`);
  $published.text(item.released.substr(0, 4));
  $pages.text(`${item.numberOfPages} pages`);

  $element.append($title);
  $element.append($author);
  $element.append($published);
  $element.append($pages);

  $app.append($element);
};

const fetchData = (url) => {
  $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    success: (data) => {
      data.forEach((item) => {
        addBookToDOM(item);
      });
    },
    error: (error) => {
      console.log(error);
      let $error = $("<div></div>").text(
        "An error occurred. Please try again."
      );
      $app.append($error);
    },
    complete: () => {
      $loading.remove();
    },
  });
};

fetchData(url);
