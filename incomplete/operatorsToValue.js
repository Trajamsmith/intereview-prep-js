/**
 * Given a string that contains only digits 0-9 and a target value,
 * return all possibilities to add binary operators (not unary) +, -,
 * or * between the digits so they evaluate to the target value.
 */
var addOperators = function(num, target) {
  const output = [],
    memos = {};

  traverse = (rem, expr, val, prev) => {
    console.log(val, expr, prev);
    if (!rem.length) {
      if (val === target) {
        output.push(expr);
      }
      return;
    }

    const curr = rem[0];
    rem = rem.slice(1);
    traverse(rem, expr + `+${curr}`, val + Number(curr), `+${curr}`);
    traverse(rem, expr + `-${curr}`, val - Number(curr), `-${curr}`);

    // Parse prev for following tree branches
    let operator = prev[0],
      operand = prev.slice(1);

    if (operator === "+") {
      val = val - operand + operand * Number(curr);
      traverse(rem, expr + `*${curr}`, val, `*${curr}`);
    } else if (operator === "-") {
      val = val + operand - operand * Number(curr);
      traverse(rem, expr + `*${curr}`, val, `*${curr}`);
    } else {
      traverse(rem, expr + `*${curr}`, val * Number(curr), `*${curr}`);
    }

    // We don't want '1*05'
    if (expr[expr.length - 1] !== "0") {
      if (operator === "+") {
        val = val - operand + Number(operand + curr);
        traverse(rem, expr + `${curr}`, val, prev + curr);
      } else if (operator === "-") {
        val = val + operand - Number(operand + curr);
        traverse(rem, expr + `${curr}`, val, prev + curr);
      } else if (operator === "*") {
        val = (val / operand) * Number(operand + curr);
        traverse(rem, expr + `${curr}`, val, prev + curr);
      }
    }
  };

  const first = num[0];
  num = num.slice(1);
  traverse(num, first, Number(first), "");
  return output;
};

// ["1+2+3", "1*2*3"]
// console.log(addOperators("123", 6));
// ["2*3+2", "2+3*2"]
// console.log(addOperators("232", 8));
// ["1*0+5", "10-5"]
console.log(addOperators("105", 5));
// console.log(addOperators("999999999", 81));
