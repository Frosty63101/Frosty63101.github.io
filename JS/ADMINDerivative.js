function evaluateDerivative() {
    var equationD = document.getElementById("inSimplified").value;
  
    equationD = equationD.replace(/sqrt\(([^)]+)\)/g, function(match, numberD) {
      return "math.sqrt(" + numberD + ")";
    });
  
    try {
      var derivative = math.derivative(equationD, 'x').toString();
  
      // Simplify the derivative expression
      derivative = simplifyDerivative(derivative);
  
      document.getElementById("derivativeOut").value = derivative;
    } catch (error) {
      document.getElementById("derivativeOut").value = "Error: Invalid equation";
    }
  }
  
  function simplifyDerivative(expression) {
    // Replace |x| with abs(x)
    expression = expression.replace(/\|(.+?)\|/g, 'abs($1)');
  
    try {
      // Use Math.js to simplify the expression
      const parsedExpression = math.parse(expression);
      const simplifiedExpression = parsedExpression.simplify();
  
      // Convert the simplified expression back to a string
      const simplifiedExpressionString = simplifiedExpression.toString();
  
      // Adjust the expression format to match the desired output
      const adjustedExpression = simplifiedExpressionString
        .replace(/x(\^(\d+))?/g, function(match, exponent) {
          if (exponent) {
            const num = parseInt(exponent);
            if (num === 1) return "|x|";
            else if (num === 2) return "x^2";
            else return `x^${num}`;
          } else {
            return "x";
          }
        })
        .replace(/(\d+)(\|x|)/g, '$1*$2'); // Add multiplication operator if a number is followed by |x|
  
      return adjustedExpression;
    } catch (error) {
      // Return the original expression if simplification fails
      return expression;
    }
  }
  
  
  function simplifyEquationOne() {
    // Retrieve input and output elements
    var inputElementOne = document.getElementById("derivativeInput");
    var outputElementOne = document.getElementById("inSimplified");
  
    // Retrieve the equation from the input element
    var equationOne = inputElementOne.value;
  
    // Simplify the equation
    var simplifiedEquationOne = simplifyEquationStringOne(equationOne);
  
    // Set the simplified equation as the value of the output element
    outputElementOne.value = simplifiedEquationOne;
  }

  
  function simplifyEquationStringOne(expression) {
    // Evaluate Math.sqrt(x^(34))
    expression = expression.replace(/sqrt\(([^)]+)\)/g, function(match, number) {
      const evaluatedSqrt = 'Math.sqrt(' + number + ')';
      try {
        return eval(evaluatedSqrt).toString();
      } catch (error) {
        return evaluatedSqrt;
      }
    });
  
    // Replace |x| with abs(x)
    expression = expression.replace(/\|(.+?)\|/g, 'abs($1)');
  
    try {
      // Use JavaScript's eval function to simplify the expression
      const simplifiedExpression = eval(expression);
  
      // Convert the simplified expression back to a string
      const simplifiedExpressionString = simplifiedExpression.toString();
  
      return simplifiedExpressionString;
    } catch (error) {
      // Return the original expression if simplification fails
      return expression;
    }
  }
  
  
  function simplifyEquation() {
    // Retrieve input and output elements
    var inputElement = document.getElementById("derivativeOut");
    var outputElement = document.getElementById("derivativeSimplified");
  
    // Retrieve the equation from the input element
    var equation = inputElement.value;
  
    // Simplify the equation
    var simplifiedEquation = simplifyEquationString(equation);
  
    // Set the simplified equation as the value of the output element
    outputElement.value = simplifiedEquation;
  }
  
  function simplifyEquationString(expression) {
    // Replace sqrt(x) with x^(1/2)
    expression = expression.replace(/sqrt\((.+?)\)/g, '($1)^(1/2)');
  
    // Replace |x| with abs(x)
    expression = expression.replace(/\|(.+?)\|/g, 'abs($1)');
  
    try {
      // Use Math.js to simplify the expression
      const simplifiedExpression = math.simplify(expression);
  
      // Simplify the exponents and absolute values
      const simplifiedExpressionString = simplifiedExpression
        .toString()
        .replace(/\^(\d+)/g, function(match, exponent) {
          const num = parseInt(exponent);
          if (num === 1) return "|x|";
          else if (num === 2) return "x^2";
          else return `x^${num}`;
        })
        .replace(/(\d+)\*(\|x\|)/g, '$1$2'); // Remove multiplication operator if a number is followed by |x|
  
      return simplifiedExpressionString;
    } catch (error) {
      // Return the original expression if simplification fails
      return expression;
    }
  }

// Custom pow() function
function pow(base, exponent) {
    return Math.pow(base, exponent);
  }
  
  function solveEquation() {
    // Get the equation and x value from input elements
    var equationS = document.getElementById('derivativeSimplified').value;
    var x = parseFloat(document.getElementById('xValue').value);
  
    // Replace '^' in the equation string with '**' for exponentiation
    equationS = equationS.replace(/\^/g, '**');
  
    // Add explicit multiplication operator
    equationS = equationS.replace(/(\d+)\s*([a-z\(])/gi, '$1*$2');
    equationS = equationS.replace(/([a-z\)\]]\s*)(\d+)/gi, '$1*$2');
    equationS = equationS.replace(/\)\s*\(/g, ')*('); // handle multiplication between parentheses
  
    // Replace 'x' in the equation string with the numeric value
    equationS = equationS.replace(/x/g, x);
  
    console.log(equationS);
  
    // Evaluate the equation using eval() function
    var result = 0;
    try {
      result = eval(equationS);
      document.getElementById('evaluateWXValue').value = result.toFixed(3);
    } catch (error) {
      document.getElementById('evaluateWXValue').value = 'Error: Invalid equation';
    }
  }
  

  
  const derivativeTextbox = document.getElementById('derivativeInput');
  derivativeTextbox.addEventListener('input', function() {
    simplifyEquationOne();
    evaluateDerivative();
    simplifyEquation();
    console.log('Textbox content updated:', derivativeTextbox.value);
  });
  
  const derivativeTextboxE = document.getElementById('xValue');
  derivativeTextboxE.addEventListener('input', function() {
    solveEquation();
    console.log('Textbox content updated:', derivativeTextboxE.value);
  });
  