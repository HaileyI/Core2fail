// Dom references
const keybordEventElement = document.querySelector('div#keyboard')
const keyboardFeedbackElement = document.querySelector('div#keyboard-feedback')
const inputEventElement = document.querySelector('form#input')
const inputElement = document.querySelector('form#input input')
const inputFeedbackElement = document.querySelector('div#input-feedback')
console.log(inputElement.value, inputEventElement)

// Application Code

inputEventElement.addEventListener('submit', (event) => {
    console.log('submit')
    // Prevent Normal Submit Event Behavior
    event.preventDefault()
    // Get Form Value
    const value = inputElement.value
        //Create a New Element
        const feedbackElement = document.createElement('p')
        feedbackElement.innerHTML = "Input value: " + event.key
        //Add to Page
        inputFeedbackElement.appendChild(feedbackElement)
 


})  

const moviesArray = [
    {
        name: "The Royal Tenenbaums", 
        director: "Wes Anderson"
    },
    {
        name: "Moonrise Kingdom", 
        director: "Wes Anderson"
    },
    {
        name: "Fantastic Mr. Fox", 
        director: "Wes Anderson"
    },
    {
        name: "Isle of Dogs", 
        director: "Wes Anderson"
    },
    {
        name: "Grand Budapest Hotel", 
        director: "Wes Anderson"
    },
    {
        name: "Mid 90's", 
        director: "Jonah Hill"
    },  
    {
        name: "North Hollywood", 
        director: "Mikey Alfred"
    },  
    {
        name: "Eternal Sunshine of the Spotless Mind", 
        director: "Michel Gondry"
    },  
    {
        name: "Mr. Nobody", 
        director: "Jaco Van Dormael"
    },  
    {
        name: "Coyote Ugly", 
        director: "David McNally"
    },  
    {
        name: "Whiplash", 
        director: "Damien Chazelle"
    },  
    {
        name: "Interstellar", 
        director: "Christopher Nolan"
    },  
    {
        name: "Before Sunrise", 
        director: "Richard Linklater"
    },  
    {
        name: "Call Me by Your Name", 
        director: "Luca Guadagnino"
    },  
    {
        name: "Beautiful Boy", 
        director: "Felix Van Groeningen"
    },
    {
        name: "Lady Bird", 
        director: "Greta Gerwig"
    },
    {
        name: "The Florida Project", 
        director: "Sean Baker"
    },
    {
        name: "Waves", 
        director: "Trey Edward Shults"
    },
    {
        name: "The Hangover", 
        director: "Todd Phillips"
    },
    {
        name: "High Fidelity", 
        director: "Stephen Frears"
    },
    {
        name: "Sound of Metal", 
        director: "Darius Marder"
    },
    {
        name: "Candy", 
        director: "Neil Armfield"
    },
    {
        name: "Buffalo '66", 
        director: "Vincent Gallo"
    },
    {
        name: "The Matrix", 
        director: "Lana Wachowski, Lilly Wachowski"
    },
    {
        name: "Forrest Gump", 
        director: "Robert Zemeckis"
    },
    {
        name: "The Batman", 
        director: "Matt Reeves"
    },
    {
        name: "Trainspotting", 
        director: "Danny Boyle"
    },
    {
        name: "The Fifth Element", 
        director: "Luc Besson"
    },
    {
        name: "What Dreams May Become", 
        director: "Vincent ward"
    },
    {
        name: "Interview With the Vampire", 
        director: "Neil Jordan"
    },
    {
        name: "Clueless", 
        director: "Amy Heckerling"
    },
    {
        name: "The Crush", 
        director: "Alan Shapiro"
    },
    {
        name: "American Beauty", 
        director: "Sam Mendes"
    },
    {
        name: "The Rocky Horror Picture Show", 
        director: "Jim Sharman"
    },
    {
        name: "Underworld", 
        director: "Len Wiseman"
    },
    {
        name: "Blow", 
        director: "Ted Demme"
    },
    {
        name: "Help!", 
        director: "Richard Lester"
    },
    {
        name: "Dazed and Confused", 
        director: "Richard Linklater"
    },
    {
        name: "Insidious", 
        director: "James Wan"
    },
    {
        name: "Crazy Rich Asians", 
        director: "Jon M. Chu"
    },
    {
        name: "Hereditary", 
        director: "Ari Aster"
    },
    {
        name: "X", 
        director: "Ti West"
    },
    {
        name: "Parasite", 
        director: "Bong Joon-ho"
    },
    {
        name: "Fear of Loathing in Las Vegas", 
        director: "Terry Gilliam"
    },
    {
        name: "Good Will Hunting", 
        director: "Gus Van Sant"
    },
    {
        name: "The Conjuring", 
        director: "Michael Chaves, James Wan"
    },
    {
        name: "Empire Records", 
        director: "Allan Moyle"
    },
    {
        name: "It", 
        director: "Andrés Muschetti"
    },
    {
        name: "The Perks of Being a Wallflower", 
        director: "Stephen Chbosky"
    },
    {
        name: "Cruel Intentions", 
        director: "Roger Kumble"
    },
    {
        name: "The Virgin Suicides", 
        director: "Sofia Coppola"
    },
    {
        name: "Romeo and Juliet", 
        director: "Baz Luhrmann"
    },
    {
        name: "The Craft", 
        director: "Andrew Fleming"
    },
    {
        name: "Thirteen", 
        director: "Catherine Hardwicke"
    },
    {
        name: "500 Days of Summer", 
        director: "Marc Webb"
    }, 
    {
        name: "10 Things I Hate About You", 
        director: "Gil Junger"
    },


]

const randomIndex = Math.round(Math.random() * moviesArray.length - 1)
console.log(randomIndex)
console.log(moviesArray[randomIndex])