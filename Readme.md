1.  What is the difference between var, let, and const?

answer: 

  Var is a function scoped and it is old way. This is hoisted with undefined

  let is is a block scoped, safer and it can be  reassigned but not redeclared 
  const is a block scoped and this is cann't be reassigned or redeclared 

  2. What is the difference between map(), forEach(), and filter()?

  answer: forEach() is a loop, when it is loop, no return and map() it is also like forEach() but it is return and  transform  data. filter() is work on a condition and it is return an  new array 


  3. What are arrow functions in ES6?

  answer: Arrow functions in ES6 are a shorter and cleaner way to write functions in JavaScript using the => syntax. They make code easier to read and reduce boilerplate compared to traditional function declarations. One of their key features is lexical scoping of this, meaning they inherit this from the surrounding context instead of creating their own. This makes them especially useful in callbacks, promises, and event handling where maintaining context is important. Arrow functions also support implicit return, so you can skip the return keyword for single expressions. However, they cannot be used as constructors and lack their own arguments object.

  4. How does destructuring assignment work in ES6?

  answer: Destructuring assignment in ES6 is a convenient way to extract values from arrays or objects and assign them to variables in a single step. Instead of accessing properties or indexes one by one, you can “unpack” them directly.

  5. Explain template literals in ES6. How are they different from string concatenation?

  answer: Template literals in ES6 are a new way to work with strings using backticks (`) instead of quotes. They make string handling more powerful and readable compared to traditional concatenation. With template literals, you can easily embed variables and expressions inside strings using the ${...} syntax, which avoids the need for complex + concatenations. They also support multiline strings without needing \n, making code cleaner. For example:
 