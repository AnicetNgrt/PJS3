/*
       Script pour l'animation des chiffres
   */
var discovered = false;
var values = [3000, 1100, 170, 750, 84];

// animation des valeurs de façon recursive
function roll(id, val) {
    var element = document.getElementById('chiffre_' + id);
    if (val > values[id]) {
        element.innerHTML = values[id];
        return;
    }
    element.innerHTML = Math.floor(val);
    setTimeout((id, val) => {
        roll(id, val + (values[id] / 50));
    }, 25, id, val);
}

// détection du scroll
window.addEventListener('scroll', function () {
    var element = document.getElementById("chiffres_trigger");
    var position = element.getBoundingClientRect();

    if (position.top < window.innerHeight && position.bottom >= 0) {
        if (!discovered) {
            discovered = true;
            for (let i = 0; i < 5; i++) {
                setTimeout((id, val) => {
                    roll(id, val + (values[id] / 50));
                }, 300, i, 0);
            }
        }
    }
});