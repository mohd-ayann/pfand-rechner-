function calculate() {
    const bottles = parseInt(document.getElementById('bottles').value) || 0;
    const type = parseFloat(document.getElementById('type').value) || 0;

    if(bottles < 0) {
        alert("Ungultige Eingabe!");
        return;
    }

    const total = bottles * type;
    document.getElementById('result').innerHTML = `
        <h3>Gesamtpfand: €${total.toFixed(2)}</h3>
        <small>${bottles} Flaschen * €${type.toFixed(2)}</small>
  `;    
}

