document.querySelector("form").addEventListener("submit", addJoke);
const message = document.querySelector('#message')

function addJoke(event) {
    event.preventDefault();
    let inputField = document.querySelector('input')
  
    const joke = document.createElement('li')
  
    const jokeTitle = document.createElement("span");
    jokeTitle.textContent = inputField.value;
    jokeTitle.addEventListener("click", crossOffJoke);
    joke.appendChild(jokeTitle)
  
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "x";
    deleteBtn.addEventListener("click", deletejoke);
    //this will remove all the whitespace from user's input to use as an id, which could then be used as a selector
    const jokeId = inputField.value.replace(/\s+/g, '');
    deleteBtn.setAttribute('id', jokeId);
    joke.appendChild(deleteBtn);
  
    const list = document.querySelector("ul");
    list.appendChild(joke);
  
    inputField.value = ''
  }
  
  function deletejoke(event) {
      message.textContent = `${event.target.parentNode.firstChild.textContent} deleted!`
      
      revealMessage()
  
      event.target.parentNode.remove();
  }
  
  function crossOffJoke(event) {
      event.target.classList.toggle('checked')
  
      if (event.target.classList.contains('checked') === true) {
          message.textContent = `${event.target.textContent} heard!`
      } else {
          message.textContent = `${event.target.textContent} added back!`
      }
  
      revealMessage()
  }
  
  function revealMessage() {
      message.classList.remove('hide')
      
      setTimeout(() => {
          message.classList.add('hide')
      }, 1000)
  }