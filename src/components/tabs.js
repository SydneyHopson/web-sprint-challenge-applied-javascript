import axios from "axios";



const Tabs = (topics) => {
 const container = document.createElement('div');
 container.classList.add('topics');


 topics.forEach(topic => { 
  const tab = document.createElement('div');
  tab.classList.add('tab');
  tab.textContent = topic
  container.appendChild(tab);
})
return container

 



 
 

  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //
}
console.log(Tabs(['javascript', 'bootstrap', 'technology']));

const tabsAppender = (selector) => {
  
  const url = `http://localhost:5001/api/topics`

   axios.get(url)
   .then( resp => {
    console.log(resp.data.topics)
    const tabs1 = document.querySelector(selector)
    tabs1.appendChild(Tabs(resp.data.topics));



   })
   .catch( err => { 
    console.log(err)

   });


  

  



  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5001/api/topics` (test it with a console.log!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
}
tabsAppender('div')
export { Tabs, tabsAppender }
