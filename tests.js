// Test suite for the permutation and combination calculator
document.addEventListener('DOMContentLoaded', function() {
    const runTestsBtn = document.getElementById('run-tests-btn');
    const testResultsDiv = document.getElementById('test-results');
    
    runTestsBtn.addEventListener('click', runTests);
    
    function runTests() {
        testResultsDiv.innerHTML = '';
        let allTestsPassed = true;
        
        // Define test cases: [n, r, expectedPermutation, expectedCombination, description]
        const testCases = [
            // Normal cases
            [5, 3, 60, 10, "Standard case: n=5, r=3"],
            [10, 4, 5040, 210, "Larger numbers: n=10, r=4"],
            [8, 2, 56, 28, "Standard case: n=8, r=2"],
            
            // Edge cases
            [0, 0, 1, 1, "Edge case: n=0, r=0"],
            [5, 0, 1, 1, "Edge case: r=0 (should always be 1)"],
            [7, 7, 5040, 1, "Edge case: n=r (permutations=n!, combinations=1)"]
        ];
        
        let results = '';
        
        // Run each test case
        testCases.forEach((testCase, index) => {
            const [n, r, expectedP, expectedC, description] = testCase;
            
            // Calculate actual results
            const actualP = calculatePermutation(n, r);
            const actualC = calculateCombination(n, r);
            
            // Check permutation
            const permPassed = actualP === expectedP;
            if (!permPassed) allTestsPassed = false;
            
            // Check combination
            const combPassed = actualC === expectedC;
            if (!combPassed) allTestsPassed = false;
            
            // Format test results
            results += `Test ${index + 1}: ${description}\n`;
            results += `  Permutation P(${n},${r}): ${permPassed ? '✓' : '✗'} Expected: ${expectedP}, Got: ${actualP}\n`;
            results += `  Combination C(${n},${r}): ${combPassed ? '✓' : '✗'} Expected: ${expectedC}, Got: ${actualC}\n\n`;
        });
        
        // Add overall result
        results = `Overall Result: ${allTestsPassed ? 'ALL TESTS PASSED ✓' : 'SOME TESTS FAILED ✗'}\n\n` + results;
        
        // Display the results with appropriate styling
        testResultsDiv.innerHTML = results;
        testResultsDiv.className = allTestsPassed ? 'test-pass' : 'test-fail';
    }
});