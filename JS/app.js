
function askName() {
    var username = prompt('What is your name?');
    return document.write('<h3>' + 'Hello, ' + username + '</h3>');
}

function addGreeting() {
    var today = new Date();
    var hourNow = today.getHours();
    var greeting;
    if (hourNow > 18) {
        greeting = 'Good Evening!';
    } else if (hourNow > 12) {
        greeting = 'Good Afternoon';
    } else if (hourNow > 0) {
        greeting = 'Good Morning!';
    } else {
        greeting = 'Welcome!';
    }
    return document.write('<h3>' + greeting + '</h3>');
}

function getItemType() {
    var response = prompt('Would you like to book a tour to Ireland or Scotland?');
    var Message;
  
    while (response !== 'Ireland' && response !== 'Scotland') {
      response = prompt('PLEASE ANSWER EXACT!  Would you like to book a tour to Ireland or Scotland?')
    }
    if (response === 'Ireland') {
      Message = 'Great! The Ireland tour leaves in June.';
    } else if (response === 'Scotland') {
      Message = 'Great! The Scotland tour leaves in July.';
    }
    return document.write('<h3>' + Message + '</h3>');
  }

  function howMany(){
    var count = prompt('Great, how many people are in your party?');
  
    while(isNaN(count) || count === ''){
      count = prompt('PLEASE ENTER A NUMBER! How many people are in your party?')
    }
    return document.write('<h3>' + count + '</h3>');
  }

function askPreference() {
    var response = prompt('Do you like to travel?');
    var message;
    if (response === 'Yes') {
        message = 'Great! Me too';
    } else if (response === 'No') {
        message = 'Oh, well. You can live vicariously through my blog!'
    } else {
        message = 'Ok, thanks for stopping by!'
    }
    return document.write('<p>' + message + '</p>');
}

