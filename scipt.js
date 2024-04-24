let ville = 'Achères'
const temperature = document.getElementById('temperature')
const city = document.getElementById('city')
const max = document.getElementById('max')
const min = document.getElementById('min')
const changerDeVille = document.getElementById('changerDeVille')
let villeChoisie 


recevoirTemperature('Achères')

changerDeVille.addEventListener('click', function(){
    villeChoisie = window.prompt('Pour quelle ville souhaitez-vous consulter la météo ?')
    if (villeChoisie) {
        recevoirTemperature(villeChoisie)
    }
})

function recevoirTemperature(villeChoisie) {
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + villeChoisie + '&appid=8df139d40f540be386e820befb2e4f7e&units=metric'
    
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Un problème est survenu, merci de revenir plus tard.')
            }
            return response.json()
        })
        .then(data => {
            temperature.textContent = Math.trunc(data.main.temp)
            city.textContent = data.name
            max.textContent = Math.trunc(data.main.temp_max)
            min.textContent = Math.trunc(data.main.temp_min)
        })
        .catch(error => {
            console.log('Erreur lors de la récuperation des données:', error.meassage);
        })
}