# JS Quick-Select
> Select k-th lowest value from a single topology array.
> Adapted with <3 for fun from:
> http://www.techiedelight.com/quickselect-algorithm/

## Use

```JS
const quickSelect = require('./quick-select/index');
const myArray = [5, 10, 0, 18, 3];
// Defaults to selecting smallest
const smallest = quickSelect(myArray);    // Returns 0
// May supply k-th smallest as param for selection
const second = quickSelect(myArray, 1);   // Returns 3
```