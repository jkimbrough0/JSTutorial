## Loop Closures


```js

	var data = [0, 1, 2];
	var funcs = [];
	
	function init() {						// 0
		for (var i = 0; i < 3; i++) {
    				
	    	var x = data[i];				// 1
 	    	var innerFunc = function() { 	// 2
 	    		return x;
 	    	};
 
 			funcs.push(innerFunc);			// 3
 		}
	}
	
	function run() {						// 4
		for (var i = 0; i < 3; i++) {
		    console.log(data[i] + ", " +  funcs[i]());   // 5
  		}
	}
	
	init();
	run();
	
```

###### Output: 

```
		0, 2
		1, 2
		2, 2

```

###### Understanding Closures

1. Closures are functions that refer to independent (free) variables. The function defined in the closure always recalls the environment in which it was created.

2. The problem is that the variable x, within each of the inner functions at #`2` (i.e. `innerFunc`), is bound to the same variable outside of the function. This is because the variables are scoped to the function `init` and not block scoped in JS. Take a look at this modified code which prints the output you expect (`0, 0` ...) to understand the variable scope binding inside the `innerFunc`.

	```js
		
		var data = [0, 1, 2];
		var funcs = [];
	
		function init() {						// 0
			for (var i = 0; i < 3; i++) {
    				
	    		var x = data[i];				// 1
 	    		var innerFunc = function() { 	// 2
 	    			var temp = x;
 	    			return function() {
 	    				return temp;
 	    			}; 
 	    		}();
 
 				funcs.push(innerFunc);			// 3
 			}
		}
	
		function run() {						// 4
			for (var i = 0; i < 3; i++) {
			    console.log(data[i] + ", " +  funcs[i]());   // 5
  			}
		}
	
		init();
		run();
	
	```
	 
