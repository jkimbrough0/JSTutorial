//Using the Delete Operator

	var myVar = 1;
	var output = (function(){
		delete myVar;
		return myVar;
	})();
	
	console.log(output);		// Output will be 1
	
	function MyFunc(){}
	MyFunc.prototype.bar = 42;
	var myFunc = new MyFunc();

	delete myFunc.bar;	
	console.log(myFunc.bar);	// Output will be 42

	delete MyFunc.prototype.bar;
	console.log(myFunc.bar);	// Output will be 'undefined'
	￼	

//More info: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete
