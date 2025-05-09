# Permutation and Combination Calculator

This project is a web application that calculates permutations and combinations based on user input. The application allows users to enter values for n (total items) and r (items to be chosen or arranged) and then displays the results.

## Features

- Input fields for n (total items) and r (items chosen)
- Calculation of permutations P(n,r) = n! / (n-r)!
- Calculation of combinations C(n,r) = n! / (r! × (n-r)!)
- Responsive design for various screen sizes
- Interactive test cases with verification
- Detailed explanations of formulas and examples

## Enhanced Features (Extra Credit)

1. **Optimized Calculations**: Implemented efficient algorithms to handle larger numbers without overflow.
2. **Input Validation**: Verifies that inputs are valid (n ≥ r, both non-negative).
3. **Interactive Test Suite**: Built-in test cases to verify correctness of calculations.
4. **Responsive UI**: Mobile-friendly design that works across different devices.
5. **Educational Content**: Includes explanations and examples to help understand the concepts.

## Project Structure

```
/permutation-combination-calculator
  |-- index.html          # Main HTML file with the user interface
  |-- styles.css          # CSS styles for the application
  |-- script.js           # Core JavaScript functionality 
  |-- tests.js            # Test cases for validation
  |-- README.md           # Project documentation
```

## How to Run

1. Clone this repository to your local machine
2. Open `index.html` in any modern web browser
3. Enter values for n and r in the input fields
4. Click "Calculate" to see the results
5. Use "Run Test Cases" to verify the calculations

## Mathematical Background

### Permutation
A permutation is an arrangement of objects where order matters.
- Formula: P(n,r) = n! / (n-r)!

### Combination
A combination is a selection of objects where order does not matter.
- Formula: C(n,r) = n! / (r! × (n-r)!)

## Example Calculations

Given n=5 and r=3:

- P(5,3) = 5! / (5-3)! = 5! / 2! = 120 / 2 = 60
- C(5,3) = 5! / (3! × (5-3)!) = 5! / (3! × 2!) = 120 / (6 × 2) = 10