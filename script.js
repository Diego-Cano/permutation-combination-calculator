// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get references to DOM elements
    const nInput = document.getElementById('n-value');
    const rInput = document.getElementById('r-value');
    const calculateBtn = document.getElementById('calculate-btn');
    const permutationResult = document.getElementById('permutation-result');
    const combinationResult = document.getElementById('combination-result');
    
    // Add event listener to the Calculate button
    calculateBtn.addEventListener('click', calculateResults);
    
    // Also calculate when pressing Enter in the input fields
    nInput.addEventListener('keyup', function(event) {
        if (event.key === 'Enter') calculateResults();
    });
    
    rInput.addEventListener('keyup', function(event) {
        if (event.key === 'Enter') calculateResults();
    });
    
    // Calculate and display initial results
    calculateResults();
    
    // Function to calculate and display the results
    function calculateResults() {
        const n = parseInt(nInput.value);
        const r = parseInt(rInput.value);
        
        // Validate inputs
        if (isNaN(n) || isNaN(r)) {
            alert('Please enter valid numbers for n and r');
            return;
        }
        
        if (n < 0 || r < 0) {
            alert('Values cannot be negative');
            return;
        }
        
        if (r > n) {
            alert('r cannot be greater than n');
            return;
        }
        
        // Calculate permutation and combination
        const permutation = calculatePermutation(n, r);
        const combination = calculateCombination(n, r);
        
        // Display results
        permutationResult.textContent = formatNumber(permutation);
        combinationResult.textContent = formatNumber(combination);
    }
});

/**
 * Calculate the factorial of a number
 * @param {number} num - The number to calculate factorial for
 * @returns {number} The factorial value
 */
function factorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    }
    
    let result = 1;
    for (let i = 2; i <= num; i++) {
        result *= i;
    }
    
    return result;
}

/**
 * Calculate permutation P(n,r) = n! / (n-r)!
 * @param {number} n - Total number of items
 * @param {number} r - Number of items to arrange
 * @returns {number} The permutation value
 */
function calculatePermutation(n, r) {
    // Handle edge cases
    if (r === 0) return 1;
    if (r === n) return factorial(n);
    
    // For large numbers, we'll use a more efficient approach to avoid overflow
    let result = 1;
    for (let i = n - r + 1; i <= n; i++) {
        result *= i;
    }
    
    return result;
}

/**
 * Calculate combination C(n,r) = n! / (r! * (n-r)!)
 * @param {number} n - Total number of items
 * @param {number} r - Number of items to choose
 * @returns {number} The combination value
 */
function calculateCombination(n, r) {
    // Optimize for symmetry: C(n,r) = C(n,n-r)
    if (r > n - r) {
        r = n - r;
    }
    
    // Handle edge cases
    if (r === 0) return 1;
    if (r === 1) return n;
    
    // Calculate efficiently to avoid overflow
    let result = 1;
    for (let i = 1; i <= r; i++) {
        result *= (n - r + i) / i;
    }
    
    return Math.round(result); // Round to handle floating point errors
}

/**
 * Format large numbers with commas for readability
 * @param {number} num - The number to format
 * @returns {string} Formatted number string
 */
function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}