const planets = [
    {
        name:'Earth',
        gravity: 9.8
    },
    {
        name:'Mercury',
        gravity: 3.61
    },
    {
        name:'Venus',
        gravity: 8.83
    },
    {
        name:'Mars',
        gravity: 3.75
    },
    {
        name:'Jupiter',
        gravity: 26.0
    },
    {
        name:'Saturn',
        gravity: 11.2
    },
    {
        name:'Uranus',
        gravity: 10.5
    },
    {
        name:'Neptune',
        gravity: 13.3
    },
    {
        name:'Pluto',
        gravity: 0.61
    },
    {
        name:'Moon',
        gravity:1.62
    }
]

function calcWeight(){
    let mass = document.getElementById('num').value
    
    // mass.addEventListener('change', calc)
    let selectedPlanet =  document.getElementById('planets').value
        console.log(selectedPlanet)

    for(let i =0; i<planets.length; i++){ 
        
        if(planets[i].name.toLowerCase() == selectedPlanet.toLowerCase()){
            // let acc = planets[i].name.includes(selectedPlanet)
            // console.log(acc)
            console.log(planets[i].gravity)
            let answer = planets[i].gravity * mass;

            let returnStatement = document.getElementById('resultGroup')
            
            returnStatement.innerHTML = 
            
            `
            <p class="reultPrg">The result of the object on <strong>${selectedPlanet}</strong></p>
            <div id="result"><span> ${answer.toFixed(2)}N</span></div>
        
            `
           
            return returnStatement;
            // console.log(planets[i].gravity * mass)
        }

    }
    return alert(`invalid entry`);



}

