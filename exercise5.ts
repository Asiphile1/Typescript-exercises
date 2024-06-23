class Calculator {
    // Method for addition
    add(a: number, b: number): number {
        this.validateNumber(a);
        this.validateNumber(b);
        return a + b;
    }

    // Method for subtraction
    subtract(a: number, b: number): number {
        this.validateNumber(a);
        this.validateNumber(b);
        return a - b;
    }

    // Method for multiplication
    multiply(a: number, b: number): number {
        this.validateNumber(a);
        this.validateNumber(b);
        return a * b;
    }

    // Method for division
    divide(a: number, b: number): number {
        this.validateNumber(a);
        this.validateNumber(b);
        if (b === 0) {
            throw new Error("Division by zero is not allowed.");
        }
        return a / b;
    }

    // Private method to validate if the input is a number
    private validateNumber(value: any): void {
        if (typeof value !== "number") {
            throw new Error("Invalid input: input must be a number.");
        }
    }
}

// Example usage
const calculator = new Calculator();
console.log(calculator.add(5, 3));           // Output: 8
console.log(calculator.subtract(10, 4));     // Output: 6
console.log(calculator.multiply(6, 7));      // Output: 42
console.log(calculator.divide(20, 4));       // Output: 5
// console.log(calculator.divide(20, 0));    // Error: Division by zero is not allowed.
// console.log(calculator.add(5, "3"));      // Error: Invalid input: input must be a number.
