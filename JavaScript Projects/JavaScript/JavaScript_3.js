function displayType(character) {
    var characterType = character.getAttribute("data-character-type");
    alert(characterType + " is in the " + character.innerHTML + " universe!");
}

function showData() {
    const compound = document.getElementById("water");
    var water_boil = compound.dataset.boil;
    var water_melt = compound.dataset.melt;
    compound.dataset.density = "1.0";
    var water_density = compound.dataset.density;
    var water_data = "Water has a density of " + water_density + " grams per cubic centemeter @ 4 Deg C" +
        "<br>" + "Water melts at " + water_melt + " Deg C" +
        "<br>" + "Water boils at " + water_boil + " Deg C";
    document.getElementById("facts").innerHTML = water_data;
}