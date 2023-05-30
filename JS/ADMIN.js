function hashMessage() {
    var message = document.getElementById("messageInput").value;
    var hash = CryptoJS.SHA256(message).toString();
    document.getElementById("hashedOutput").value = hash;
}

function hashMessageTwo() {
    var messageTwo = document.getElementById("hashedOutput").value;
    var hashTwo = CryptoJS.SHA256(messageTwo).toString();
    document.getElementById("hashedOutputTwo").value = hashTwo;
}

function scrambleKey() {
    var hashKey = document.getElementById("hashedOutputTwo").value;
    var obfuscatedKey = obfuscateString(hashKey);
    document.getElementById("obfuscatedOutput").value = obfuscatedKey;
}

function hashMessageThree() {
    var messageThree = document.getElementById("obfuscatedOutput").value;
    var hashThree = CryptoJS.SHA256(messageThree).toString();
    document.getElementById("hashThree").value = hashThree;
}

function scrambleKeyTwo() {
    var hashKeyTwo = document.getElementById("hashThree").value;
    var obfuscatedKeyTwo = obfuscateStringTwo(hashKeyTwo);
    document.getElementById("obfuscatedOutputTwo").value = obfuscatedKeyTwo;
}

function obfuscateString(inputString) {
    var obfuscatedString = "";
    for (var i = 0; i < inputString.length;) {
        var charCode = inputString.charCodeAt(i);
        charCode -= 10;
        obfuscatedString += String.fromCharCode(charCode);
        i++;
        charCode = inputString.charCodeAt(i);
        charCode += 10;
        obfuscatedString += String.fromCharCode(charCode);
        i++;
    }
    return obfuscatedString;
}

function obfuscateStringTwo(inputString) {
    var obfuscatedString = "";
    for (var i = 0; i < inputString.length;) {
        var charCode = inputString.charCodeAt(i);
        charCode += 10;
        obfuscatedString += String.fromCharCode(charCode);
        i++;
        charCode = inputString.charCodeAt(i);
        charCode -= 10;
        obfuscatedString += String.fromCharCode(charCode);
        i++;
    }
    return obfuscatedString;
}

function addBackslashes() {
    var input = document.getElementById("obfuscatedOutputTwo").value;
    var output = input.replace(/\\/g, '\\\\');
    document.getElementById("backslashes").value = output;
}

const textbox = document.getElementById('messageInput');
textbox.addEventListener('input', function() {
    hashMessage();
    hashMessageTwo();
    scrambleKey();
    hashMessageThree();
    scrambleKeyTwo();
    addBackslashes();
    console.log('Textbox content updated:', textbox.value);
});

window.addEventListener('DOMContentLoaded', function() {
    var reloaded = localStorage.getItem('reloaded');
    
    if (!reloaded) {
        localStorage.setItem('reloaded', 'true');
    } else {
        console.log("Page is being reloaded...");
        localStorage.removeItem('reloaded');
        window.location.href = "../HTML/CheatSheet.html";
    }
});




function solveEquation() {
    var equation = document.getElementById("equationInput").value;
    
    equation = equation.replace(/\^/g, '**');
    
    equation = equation.replace(/sqrt\(([^)]+)\)/g, function(match, number) {
        return "math.sqrt(" + number + ")";
    });
    
    try {
        var resultE = eval(equation);
        document.getElementById("equationOut").value = resultE;
    } catch (error) {
        document.getElementById("equationOut").value = "Error: Invalid equation";
    }
}




function evaluateIntegral() {
    var equationI = document.getElementById("integralInput").value;
    var lowerBound = parseFloat(document.getElementById("lowerBound").value);
    var upperBound = parseFloat(document.getElementById("upperBound").value);
    var numIntervals = parseInt(document.getElementById("numIntervals").value);

    try {
        var h = (upperBound - lowerBound) / numIntervals;
        var sum = 0;
        var x;

        for (var i = 1; i < numIntervals; i++) {
            x = lowerBound + i * h;
            sum += math.evaluate(equationI, { x: x });
        }

        var integral = (h / 2) * (math.evaluate(equationI, { x: lowerBound }) + math.evaluate(equationI, { x: upperBound }) + 2 * sum);

        document.getElementById("integralOut").value = integral;
    } catch (error) {
        document.getElementById("integralOut").value = "Error: Invalid equation";
    }
}


const equationTextbox = document.getElementById('equationInput');
equationTextbox.addEventListener('input', function() {
    solveEquation();
    console.log('Textbox content updated:', textbox.value);
});







var files = JSON.parse(localStorage.getItem('uploadedFiles')) || [];
          
document.getElementById('fileInput').addEventListener('change', function(event) {
    var file = event.target.files[0];
    var fileName = file.name;
    var fileExtension = fileName.split('.').pop().toLowerCase();
  
    if (['js', 'html', 'css'].includes(fileExtension)) {
        var fileReader = new FileReader();
        
        fileReader.onload = function(event) {
            var fileContent = event.target.result;
            var fileLink = document.createElement('a');
            fileLink.href = URL.createObjectURL(file);
            fileLink.textContent = fileName;
            document.getElementById('fileList').appendChild(fileLink);
            files.push({
                name: fileName,
                content: fileContent
            });

            localStorage.setItem('uploadedFiles', JSON.stringify(files));
        };
        
        fileReader.readAsText(file);
    } 
    else {
        alert('Invalid file format. Please select a .js, .html, or .css file.');
    }
});
function updateFileLinks() {
    var linksDiv = document.getElementById('fileList');
    linksDiv.innerHTML = '';

    files.forEach(function(file) {
        var fileLink = document.createElement('a');
        fileLink.href = URL.createObjectURL(new Blob([file.content], { type: 'text/plain' }));
        fileLink.textContent = file.name;
        linksDiv.appendChild(fileLink);
        linksDiv.appendChild(document.createElement('br'));
    });
}
files.forEach(function(file) {
    var fileLink = document.createElement('a');
    fileLink.href = URL.createObjectURL(new Blob([file.content], { type: 'text/plain' }));
    fileLink.textContent = file.name;
    document.getElementById('fileList').appendChild(fileLink);
    document.getElementById('fileList').appendChild(document.createElement('br'));
});

function removeLink() {
    var searchBox = document.getElementById('searchBox');
    var fileName = searchBox.value;

    var fileIndex = files.findIndex(function(file) {
        return file.name === fileName;
    });

    if (fileIndex > -1) {
        files.splice(fileIndex, 1);

        // Remove the link from the file list
        var fileList = document.getElementById('fileList');
        fileList.innerHTML = '';

        files.forEach(function(file) {
            var fileLink = document.createElement('a');
            fileLink.href = URL.createObjectURL(new Blob([file.content], { type: 'text/plain' }));
            fileLink.textContent = file.name;
            fileList.appendChild(fileLink);
            fileList.appendChild(document.createElement('br'));
        });

        // Save the updated files array in Local Storage
        localStorage.setItem('uploadedFiles', JSON.stringify(files));

        searchBox.value = '';
    } 
    else {
      alert('No file found with that name.');
    }
}