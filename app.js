document.querySelector('#form-section').addEventListener('submit', generateJokes);

function generateJokes(e) {
  const number = document.getElementById('number').value;

  const xhr = new XMLHttpRequest();

  xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

  xhr.onload = function() {

    if (this.status === 200) {
      jokes = JSON.parse(this.responseText);

      console.log(jokes);

      let output = '';

      if (jokes.type === 'success') {
        jokes.value.forEach(function(joke){
          output += `
            <ul>
              <li>${joke.joke}</li>
            </ul>
          `
        });
      } else {
        output += '<ul><li>Error</li></ul>'
      }

      document.querySelector('.jokes').innerHTML = output;
    }
  }

  xhr.send();

  e.preventDefault();
}

// CONTINUE 62