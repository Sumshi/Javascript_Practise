		This is my practice page for javascript

Difference between var, const and let are:
1) 	Var - area available throughtout the function in which
they are declared
2) let - are only available inside the block of code in which
they are declared
3) const - values are constant , they cannot be reassigned

in js functions are declared using function keyword
global variables are declared at the top of a program or outside
a function, they can be accessed anywhere in the program

local variables - they can only be accessed within a function

						ARRAY METHODS:
	concat()	joins two or more arrays and returns a result
	indexOf()	searches an element of an array and returns its position
	find()		returns the first value of an array element that passes a test
	findIndex()	returns the first index of an array element that passes a test
	forEach()	calls a function for each element
	includes()	checks if an array contains a specified element
	push()		aads a new element to the end of an array and returns the new length of an array
	unshift()	adds a new element to the beginning of an array and returns the new length of an array
	pop()		removes the last element of an array and returns the removed element
	shift()		removes the first element of an array and returns the removed element
	sort()		sorts the elements alphabetically in strings and in ascending order
	slice()		selects the part of an array and returns the new array
	splice()	removes or replaces existing elements and/or adds new elements

link for more methods with example:
			https://www.programiz.com/javascript/library/array/foreach

						STRING METHODS:
	charAt(index)	returns the character at the specified index
	concat()		joins two or more strings
	replace()		replaces a string with another string
	split()			converts the string to an array of strings
	substr(start, length)	returns a part of a string
	substring(start,end)	returns a part of a string
	slice(start, end)		returns a part of a string
	toLowerCase()			returns the passed string in lower case
	toUpperCase()			returns the passed string in upper case
	trim()			removes whitespace from the strings
	includes()		searches for a string and returns a boolean value
	search()		searches for a string and returns a position of a match


					NUMBER METHODS
	isNaN()		determines whether the passed value is NaN
	isFinite()	determines whether the passed value is a finite number
	isInteger()	determines whether the passed value is an integer
	isSafeInteger()		determines whether the passed value is a safe integer
	parseFloat(string)		converts the numeric floating string to floating-point number
	parseInt(string, [radix])	converts the numeric string to integer
	toExponential(fractionDigits)	returns a string value for a number in exponential notation
	toFixed(digits)			returns a string value for a number in fixed-point notation
	toPrecision()			returns a string value for a number to a specified precision
	toString([radix])	returns a string value in a specified radix(base)
	valueof()			returns the numbers value
	toLocaleString()	returns a string with a language sensitive representation of a number


					NUMBER PROPERTIES
	EPSILON				returns the smallest interval between two representable numbers
	MAX_SAFE_INTEGER	returns the maximum safe integer
	MAX_VALUE			returns the largest possible value
	MIN_SAFE_INTEGER	returns the minimum safe integer
	MIN_VALUE			returns the smallest possible value
	NaN	represents 		'Not-a-Number' value
	NEGATIVE_INFINITY	represents negative infinity
	POSITIVE_INFINITY	represents positive infinity
	prototype			allows the addition of properties to Number objects