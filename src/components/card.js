import axios from "axios";

const Card = (article) => {
  const divMain = document.createElement('div');
  const divheadline = document.createElement('div');
  const divAuthor = document.createElement('div');
  const divImage = document.createElement('div');
  const spanAuthname = document.createElement('span');
  const img = document.createElement("img");
  img.src = article.authorPhoto
  divMain.classList.add("card");
  divheadline.classList.add("headline");
  divAuthor.classList.add("author");
  divImage.classList.add("img-container")
  spanAuthname.classList.add("authorName")
  divheadline.textContent = article.headline; 
  spanAuthname.textContent = article.authorName;

  divMain.appendChild(divheadline);
  divMain.appendChild(divAuthor);
  divAuthor.appendChild(divImage);
  divImage.appendChild(img);
  divAuthor.appendChild(spanAuthname)
   return divMain
  

  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
}

const cardAppender = async (selector) => {
  const res = await fetch('http://localhost:5001/api/articles')
  const json = await res.json()
  const articles = Object.values(json.articles).flat()
  const container = document.querySelector(selector)
  articles.forEach(article => container.appendChild(Card(article)))


  
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
}

export { Card, cardAppender }
