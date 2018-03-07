// recursive function
function run(genFun, ...ids) {

    // generator object
    const genObj = genFun(...ids);

    // iterative function
    function iterate(iteration) {

        // if generator function reached the final yield
        if(iteration.done) {
            // resolve with final value
            return Promise.resolve(iteration.value);
        }

        // if not final yield return the value as promise
        return Promise
            .resolve(iteration.value)               // resolve with the current yield value
            .then(x => iterate(genObj.next(x)))     // take the value and pass it to the same iterate function
            .catch(x => iterate(genObj.throw(x)));
    }

    try {
        return iterate(genObj.next());
    } catch(e) {
        return Promise.reject(e);
    }

}

function* gen(...ids) {
    // convert ids into fetch array promises
    const requests = yield Promise.all(ids.map(id => fetch(`http://swapi.co/api/starships/${id}`)));
    // convert requests into array results
    const results = yield Promise.all(requests.map(req => !req.ok ? Promise.reject(req.status) : Promise.resolve(req.json()) ));
    return results;
}

// options data
const starshipData = [
    { name: 'CR90 Corvette', id: 2 },
    { name: 'V-wing', id: 75 },
    { name: 'Belbullab', id: 22 },
    { name: 'Starfighter', id: 74 },
    { name: 'Jedi Interceptor', id: 65 },
    { name: 'Star Destroyer', id: 3 },
    { name: 'Trade Fedaration Cruiser', id: 59 },
    { name: 'Solar Sailer', id: 58 },
    { name: 'Republic Attack Cruiser', id: 63 },
    { name: 'A-wing', id: 28 },
    { name: 'B-wing', id: 29 },
    { name: 'Naboo Fighter', id: 39 },
    { name: 'Millenium Falcon', id: 10 },
];

// convert data into inputs
const opts = starshipData.map(c => `<option value="${c.id}">${c.name}<\/option>`).join("\n");

// ship 1 select reference
const s1 = document.querySelector('#ship-1');

// attach options to ship 1
s1.innerHTML = opts;

// ship 2 select reference
const s2 = document.querySelector('#ship-2');

// attach options to ship 2
s2.innerHTML = opts;

// compare button reference
const comp = document.querySelector('#compare');

// attach compare button click listener
comp.addEventListener('click', e => {

    // retrieve ids
    const s1Id = s1.options[s1.selectedIndex].value;
    const s2Id = s2.options[s2.selectedIndex].value;

    run(gen, s1Id, s2Id).then(x => {

        const s1Name = document.querySelector('#s1-name');
        const s2Name = document.querySelector('#s2-name');
        s1Name.innerHTML = x[0].name;
        s2Name.innerHTML = x[1].name;

        const s1Cost = document.querySelector('#s1-cost');
        const s2Cost = document.querySelector('#s2-cost');
        s1Cost.innerHTML = x[0].cost_in_credits;
        s2Cost.innerHTML = x[1].cost_in_credits;

        s1Cost.style.backgroundColor = s2Cost.style.backgroundColor = "white";

        if(x[0].cost_in_credits > x[1].cost_in_credits) {
            s1Cost.style.backgroundColor = "red";
        }else{
            s2Cost.style.backgroundColor = "red";
        }

        const s1Speed = document.querySelector('#s1-speed');
        const s2Speed = document.querySelector('#s2-speed');
        s1Speed.innerHTML = x[0].max_atmosphering_speed;
        s2Speed.innerHTML = x[1].max_atmosphering_speed;

        s1Speed.style.backgroundColor = s2Speed.style.backgroundColor = "white";

        if(x[0].max_atmosphering_speed > x[1].max_atmosphering_speed) {
            s1Speed.style.backgroundColor = "red";
        }else{
            s2Speed.style.backgroundColor = "red";
        }

        const s1Size = document.querySelector('#s1-size');
        const s2Size = document.querySelector('#s2-size');
        s1Size.innerHTML = x[0].cargo_capacity;
        s2Size.innerHTML = x[1].cargo_capacity;

        s1Size.style.backgroundColor = s2Size.style.backgroundColor = "white";

        if(x[0].cargo_capacity > x[1].cargo_capacity) {
            s1Size.style.backgroundColor = "red";
        }else{
            s2Size.style.backgroundColor = "red";
        }

        const s1Passengers = document.querySelector('#s1-passengers');
        const s2Passengers = document.querySelector('#s2-passengers');
        s1Passengers.innerHTML = x[0].passengers;
        s2Passengers.innerHTML = x[1].passengers;

        s1Passengers.style.backgroundColor = s2Passengers.style.backgroundColor = "white";

        if(x[0].cargo_capacity > x[1].cargo_capacity) {
            s1Passengers.style.backgroundColor = "red";
        }else{
            s2Passengers.style.backgroundColor = "red";
        }


    }).catch(err => {

        // in case of error
        console.error('Error found:', err);

    });
});

