

// NASA API
const count = 10;
const apiKey = 'DEMO_KEY';
const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=${count}`;

let resutltsArray = [];

// Get 10 Images from NASA API
async function getNasaPictures () {
    try {
        const response = await fetch (apiUrl);
        resutltsArray = await response.json();
        console.log(resutltsArray);
    } catch (error) {
        // Catch Error Here
        console.log('error made', error);
    }
}

// On Load
getNasaPictures();