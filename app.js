'use strict';

 let scammer = prompt('Are you a scammer? Please answer yes or no only');
    if (scammer === 'no') {
        alert('Okay! Amazing please continue.'); 
            console.log('Okay cool! No scammers please');        
    } else if (scammer === 'yes') {
        alert('Wow that is aweful. Please do not proceed');
            console.log('Scary. Please leave.');
    }   

let name = prompt('What is you name?');
    alert('Hello ' + name); 
    console.log('Hi '+ name);

let answer = 7;
for (let attempt = 1; attempt < 4; attempt++) {
    let guess = prompt('Guess a number between 0 and 10:');
    if (guess < answer) {
        alert("Too low! Guess higher.");
    } else if (guess > answer) {
        alert("Too high! Guess lower.");
    } else if (guess === '7') {
        alert('Congratulations '+ name + ' You guessed the number '+ guess + 'in '+ attempt + ' attempts.');
        break;    
    }
}        

let age = prompt('Are you 18 years old or older?')
if (age === 'yes') {
    alert('Since ' + name + ' is of age, you can proceed'); 
    console.log('No underage please!')
} else if (age === 'no') {
    alert('You are not allowed to continue to this site');
    console.log('Only of age can proceed.');
}

let hire = prompt('Are you a hiring manager or similar?');
if (hire === 'yes') {
    console.log(name + ' is a hiring manager or similar')    
}

let company = prompt('Which company are you from?');
    alert('Hello '+ name + ' from '+ company + ', I am glad that you are not a scammer. You are more than welcome to check my page.');
    console.log(name + ' from '+ company + ' is not a scammer.')




