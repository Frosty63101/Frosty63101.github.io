function evaluateDerivative() {
    var equationD = document.getElementById("inSimplified").value;
  
    equationD = equationD.replace(/sqrt\(([^)]+)\)/g, function(match, numberD) {
      return "math.sqrt(" + numberD + ")";
    });
  
    try {
      var derivative = math.derivative(equationD, 'x').toString();
  
      derivative = simplifyDerivative(derivative);
  
      document.getElementById("derivativeOut").value = derivative;
    } catch (error) {
      document.getElementById("derivativeOut").value = "Error: Invalid equation";
    }
  }
  
  function simplifyDerivative(expression) {
    expression = expression.replace(/\|(.+?)\|/g, 'abs($1)');
  
    try {
      const parsedExpression = math.parse(expression);
      const simplifiedExpression = parsedExpression.simplify();
  
      const simplifiedExpressionString = simplifiedExpression.toString();
  
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
        .replace(/(\d+)(\|x|)/g, '$1*$2');
  
      return adjustedExpression;
    } catch (error) {
      return expression;
    }
  }
  
  
  function simplifyEquationOne() {
    var inputElementOne = document.getElementById("derivativeInput");
    var outputElementOne = document.getElementById("inSimplified");
  
    var equationOne = inputElementOne.value;
  
    equationOne = equationOne.replace(/sin\(([^)]+)\)/g, 'Math.sin($1)');
    equationOne = equationOne.replace(/cos\(([^)]+)\)/g, 'Math.cos($1)');
    equationOne = equationOne.replace(/tan\(([^)]+)\)/g, 'Math.tan($1)');
  
    var simplifiedEquationOne = simplifyEquationStringOne(equationOne);
  
    outputElementOne.value = simplifiedEquationOne;
  }
  

  
  function simplifyEquationStringOne(expression) {
    expression = expression.replace(/sin\(([^)]+)\)/g, 'Math.sin($1)');
    expression = expression.replace(/cos\(([^)]+)\)/g, 'Math.cos($1)');
    expression = expression.replace(/tan\(([^)]+)\)/g, 'Math.tan($1)');
  
    expression = expression.replace(/\|(.+?)\|/g, 'Math.abs($1)');
  
    try {
      const simplifiedExpression = eval(expression);
      const simplifiedExpressionString = simplifiedExpression.toString();
  
      return simplifiedExpressionString;
    } catch (error) {
      return expression;
    }
  }
  
  
  
  function simplifyEquation() {
    var inputElement = document.getElementById("derivativeOut");
    var outputElement = document.getElementById("derivativeSimplified");
  
    var equation = inputElement.value;
  
    equation = equation.replace(/sin\(([^)]+)\)/g, 'Math.sin($1)');
    equation = equation.replace(/cos\(([^)]+)\)/g, 'Math.cos($1)');
    equation = equation.replace(/tan\(([^)]+)\)/g, 'Math.tan($1)');
  
    equation = equation.replace(/sqrt\((.+?)\)/g, 'Math.sqrt($1)');
    equation = equation.replace(/\|(.+?)\|/g, 'Math.abs($1)');
  
    try {
      const simplifiedExpression = math.simplify(equation);
  
      const simplifiedExpressionString = simplifiedExpression
        .toString()
        .replace(/\^(\d+)/g, function (match, exponent) {
          const num = parseInt(exponent);
          if (num === 1) return "|x|";
          else if (num === 2) return "x^2";
          else return `x^${num}`;
        })
        .replace(/(\d+)\*(\|x\|)/g, '$1$2');
  
      outputElement.value = simplifiedExpressionString;
    } catch (error) {
      outputElement.value = equation;
    }
  }
  
  
  function simplifyEquationString(expression) {
    expression = expression.replace(/sqrt\((.+?)\)/g, '($1)^(1/2)');
  
    expression = expression.replace(/\|(.+?)\|/g, 'abs($1)');
  
    try {
      const simplifiedExpression = math.simplify(expression);
  
      const simplifiedExpressionString = simplifiedExpression
        .toString()
        .replace(/\^(\d+)/g, function(match, exponent) {
          const num = parseInt(exponent);
          if (num === 1) return "|x|";
          else if (num === 2) return "x^2";
          else return `x^${num}`;
        })
        .replace(/(\d+)\*(\|x\|)/g, '$1$2');
  
      return simplifiedExpressionString;
    } catch (error) {
      return expression;
    }
  }

function pow(base, exponent) {
    return Math.pow(base, exponent);
  }
  
  function solveEquationD() {
    var equationS = document.getElementById('derivativeSimplified').value;
    var x = parseFloat(document.getElementById('xValue').value);
  
    equationS = equationS.replace(/sin\(([^)]+)\)/g, 'Math.sin($1)');
    equationS = equationS.replace(/cos\(([^)]+)\)/g, 'Math.cos($1)');
    equationS = equationS.replace(/tan\(([^)]+)\)/g, 'Math.tan($1)');
  
    equationS = equationS.replace(/\^/g, '**');
    equationS = equationS.replace(/(\d+)\s*([a-z\(])/gi, '$1*$2');
    equationS = equationS.replace(/([a-z\)\]]\s*)(\d+)/gi, '$1*$2');
    equationS = equationS.replace(/\)\s*\(/g, ')*(');
    equationS = equationS.replace(/x/g, x);
  
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
    solveEquationD();
    console.log('Textbox content updated:', derivativeTextboxE.value);
  });
  