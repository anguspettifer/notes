var assert = {
  isTrue: function(testName, assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error(`Assertion failed: ${testName}`);
    } else {
      console.log(`Assertion passed: ${testName}`)
    }
  }
};
