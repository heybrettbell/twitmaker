// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
document.addEventListener("DOMContentLoaded", function() {

var submitTweet = document.querySelector('#new_tweet');
var allTweets = document.querySelector('.tweets');
var button = document.querySelector('#create-tweet');

submitTweet.addEventListener('submit', function(event) {
  event.preventDefault();

    var request = $.ajax ({
      url: this.action,
      method: this.method,
      data: $(this).serialize(),
      dataType: 'json'
    }).done(function(responseData){
      console.log(responseData);
      var li = document.createElement('li');
      var p = document.createElement('p');
      li.className = 'tweet';
      p.innerText = responseData.message;
      li.append(p);

      var postTime = document.createElement('time');
      postTime.innerText = new Date();
      li.append(postTime);
      allTweets.prepend(li);

      submitTweet.reset();

      button.removeAttribute('disabled');
      button.removeAttribute('data-disable-with');
    });
  });
});

//       var inputElement = document.createElement('input');
//         inputElement.setAttribute('type', 'checkbox');
//         inputElement.setAttribute('value', data.id);
//         inputElement.setAttribute('name', 'todos[]');
//         inputElement.className = 'todo-complete';
//
// // c. Create a label element with the task field
// var labelElement = document.createElement('label');
// labelElement.innerHTML = data.task;
//
// var newElement = document.createElement('li');
// var newP = document.createElement('p');
// newP.innerText = data.message;
// newElement.append(newP);
// var newTime = document.createElement('time');
// newTime.innerText = new Date();
// newElement.append(newTime);
// newElement.classList = 'tweet';
// allTweets.prepend(li);
//
// newTweet.reset();
