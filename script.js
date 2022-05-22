fetch('../books.json') //path to the file with json data
        .then(response => {
            return response.json();
        })
        .then(data => {
            javascriptCoder(data);
        });


//create the main page
function javascriptCoder(data) {
    const header = document.createElement("header");
    const mainImg = document.createElement("img");
    const welcome = document.createElement("h1");
    
    header.className = "header";
    mainImg.setAttribute("src", "/images/starting-pg.jpg");
    mainImg.setAttribute("alt", "Main bookshop picture");
    welcome.innerHTML = 'Welcome to the world of books!';
    header.appendChild(mainImg);
    header.appendChild(welcome);

    let fragment = new DocumentFragment();
    fragment.append(header);

    const mainContainer = document.createElement("div");
    const columns = document.createElement("div");
    const columnTitle = document.createElement("div");
    const headingColumn1 = document.createElement("h2");
    
    mainContainer.className = "main-container";
    columns.className = "bookshop-columns";
    columnTitle.className = "column-title";
    headingColumn1.innerHTML = "Book Catalog";

    columnTitle.appendChild(headingColumn1);
    columns.appendChild(columnTitle);
    mainContainer.appendChild(columns);

    for (var i = 0; i < data.length; i++) {
    
    const books = document.createElement("div");
    const bookPicture = document.createElement("div");
    const bookImg = document.createElement("img");
    const information = document.createElement("div");
    const description = document.createElement("div");
    const informationh3 = document.createElement("h3");
    const informationh2 = document.createElement("h2");
    const informationh31 = document.createElement("h3");
    const activeBtn = document.createElement("div");
    const moreInfo = document.createElement("button");
    const addToBag = document.createElement("button");
    //const readmore = document.createElement("div");


    
    books.className = "books";
    bookPicture.className = "book-picture";
    bookImg.setAttribute("src", data[i].imageLink);
    bookImg.setAttribute("alt", "Book picture");
    bookImg.setAttribute("width", "300px");
    bookImg.setAttribute("height", "400px");
    information.className = "information";
    description.className = "description";
    informationh3.innerHTML = data[i].author;
    informationh2.innerHTML = data[i].title;
    informationh31.innerHTML = "Price: $" + data[i].price;
    activeBtn.className = "active-btn";
    moreInfo.className = "more-info";
    moreInfo.innerHTML = "Show more";
    addToBag.className = "add-to-bag";
    addToBag.innerHTML = "Add to bag";

    bookPicture.appendChild(bookImg);
    books.appendChild(bookPicture);
    description.appendChild(informationh3);
    description.appendChild(informationh2);
    description.appendChild(informationh31);
    information.appendChild(description);
    activeBtn.appendChild(moreInfo);
    activeBtn.appendChild(addToBag);
    information.appendChild(activeBtn);
    books.appendChild(information);
    columns.appendChild(books);

    //moreInfo.addEventListener("mouseenter", () => )

    }

    const columns2 = document.createElement("div");
    const columnTitle2 = document.createElement("div");
    const headingColumn2 = document.createElement("h2");

    columns2.className = "bookshop-columns";
    columnTitle2.className = "column-title";
    headingColumn2.innerHTML = "Shopping Bag";

    columnTitle2.appendChild(headingColumn2);
    columns2.appendChild(columnTitle2);
    mainContainer.appendChild(columns2);






    fragment.append(mainContainer);
    document.body.append(fragment);
}




// connect json and transfer data;

    




