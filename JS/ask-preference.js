var response = prompt ('Do you like to travel?');
var message;

if (response === 'Yes'){
    message = 'Great! Me too';
}   else if (response === 'no'){
    message = 'Oh, well. You can live vicariously through my blog!'
}   else {
    message = 'Ok, thanks for stopping by!'
}

document.write('<h3>' + message + '</h3>');