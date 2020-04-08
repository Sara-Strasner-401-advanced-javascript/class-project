
// function askName() {
//     var username = prompt('What is your name?');
//     return document.write('<h3>' + 'Hello, ' + username + '</h3>');
// }

// function getItemType() {
//     var response = prompt('Would you like to book a tour to Ireland or Scotland?');
//     var Message;

//     while (response !== 'Ireland' && response !== 'Scotland') {
//         response = prompt('PLEASE ANSWER EXACT!  Would you like to book a tour to Ireland or Scotland?')
//     }
//     if (response === 'Ireland') {
//         Message = 'Great! The Ireland tour leaves in June.';
//     } else if (response === 'Scotland') {
//         Message = 'Great! The Scotland tour leaves in July.';
//     }
//     return document.write('<h3>' + Message + '</h3>');
// }

// function howMany() {
//     var count = prompt('Great, how many people are in your party?');
//     for (var i = 0; i < howMany; i++) {
//         result = result + '<p>' + howMany + '</p>';
//     }
//     return document.write(result);

function getItemType() {
    var response = prompt('Would you like to book a tour to Ireland or Scotland?');
    var item;
  
    while (response !== 'Ireland' && response !== 'Scotland') {
      response = prompt('PLEASE ANSWER EXACT! Would you like to purchase Ireland or Scotland?')
    }
    if (response === 'Ireland') {
      item = '<img src="images/ireland.jpg">';
    } else if (response === 'Scotland') {
      item = '<img src="images/scotland.png">'
    }
    return item;
  }
  
  function howMany(){
    var count = prompt('Great, how many would people are in your party?');
  
    while(isNaN(count) || count === ''){
      count = prompt('PLEASE ENTER A NUMBER!  how many would you like?')
    }
    return count;
  }
  
  function showOrder(){
    var result = '';
  
    //get the item type
    var itemType = getItemType(); 
  
    //find how many they want
    var orderTotal = howMany();
  
    //create a result with correct number of products
    for (var i = 0; i < orderTotal; i++){
      result = result + '<p>' + itemType + '</p>';
    }
  
    // send that order to the web page
    return document.write(result);
  }
  






// function addGreeting() {
//     var today = new Date();
//     var hourNow = today.getHours();
//     var greeting;
//     if (hourNow > 18) {
//         greeting = 'Good Evening!';
//     } else if (hourNow > 12) {
//         greeting = 'Good Afternoon';
//     } else if (hourNow > 0) {
//         greeting = 'Good Morning!';
//     } else {
//         greeting = 'Welcome!';
//     }
//     return document.write('<h3>' + greeting + '</h3>');
// }

// function askPreference() {
//     var response = prompt('Do you like to travel?');
//     var message;
//     if (response === 'Yes') {
//         message = 'Great! Me too';
//     } else if (response === 'No') {
//         message = 'Oh, well. You can live vicariously through my blog!'
//     } else {
//         message = 'Ok, thanks for stopping by!'
//     }
//     return document.write('<p>' + message + '</p>');
// }

