// ----------------- Define Varibles -------------
let numberSecret = 0;
let attempts = 0;
let NumMax = 10;
let numbersList = [];


// ------------ Edit the HTML tags ---------------
function editHTML(tag, text){
    let elementHTMl = document.querySelector(tag);//Select the element by its tag
    elementHTMl.innerHTML = text;
    return;
}

// ----------- Generate a random number -----------
function numberRandom(){
    let intRandom =  Math.floor(Math.random()*NumMax)+1;
    // console.log(intRandom);
    // console.log(numbersList);
    
    if(numbersList.length == NumMax){
        editHTML('p','All numbers have been guessed. Please restart the Game');
        return null;
    }else{
        if(numbersList.includes(intRandom)){
            return numberRandom();
        }else{
            numbersList.push(intRandom);
            return intRandom;
        }
    }    
}

// -------------- Verify Attempt ---------------
function verifyAttempt(){
    let buttonTry = parseInt(document.getElementById('valueUser').value);//Capture the value from the input

    if (buttonTry === numberSecret){
        editHTML('p', `Congratulations! You found the hidden number in ${attempts} ${attempts > 1 ? 'attempts' : 'attempt'}.`)
        document.getElementById('restart').removeAttribute('disabled');//Disable 'New Game' button
    }else{
        if(buttonTry > numberSecret){
            editHTML('p', 'The hidden number is lower');
        }else{
            editHTML('p','The hidden number is higher')
        }
        
        attempts++;
        clearInput();
    }
    return;   
}
// ------------Function clear ---------------
function clearInput(){
    document.querySelector('#valueUser').value = '';
}

// ------------ Initial Conditions ---------------
function initialConditions(){
    
    editHTML('h1','Guess Number');//Set initial texts
    editHTML('p', `Enter a number from 1 to ${NumMax}`);
    numberSecret =  numberRandom();//Call the function to generate a random number
    attempts = 1; //To initialize the variable attempts
    clearInput();//Call the function to clear input
 
    return;
}
// -------- To initialize a New Game -----------
function newGame(){ 
    initialConditions();
    document.querySelector('#restart').setAttribute('disabled', true);//Disable 'New Game' button    
}

// ------------ Function initial ---------------
initialConditions();