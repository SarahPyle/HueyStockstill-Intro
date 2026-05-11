
function getCubicFeet(l, w, d) {
    cubicFeet = (l * w * (d / 12)) ; 
    return cubicFeet;
}


document.getElementById('calcBtn').addEventListener('click', function() {
    // Pull values from HTML
    const l = parseFloat(document.getElementById('length').value);
    const w = parseFloat(document.getElementById('width').value);
    const d = parseFloat(document.getElementById('depth').value);
    const weightPerFoot = 145; //Average weight of Asphalt per cubic foot in pounds

    
    const volume = getCubicFeet(l, w, d);
    
    const totalWeight = volume * weightPerFoot;
    const totalWeightTons = totalWeight / 2000; // Convert pounds to tons

    // Send result back to HTML
    document.getElementById('display').innerText = `Total Weight: ${totalWeightTons.toFixed(2)} tons`;
});