# JavaScript Practice Notes

These notes follow the examples in this repository. Most numbered `.js` files are small, standalone demonstrations that print values with `console.log`; they are learning exercises, not a single test suite. The Playwright sections contain the automated browser tests.

## How to use the examples

Run a JavaScript lesson from the repository root with Node.js:

```powershell
node .\01_Chapter_basics\01_HelloWorld.js
```

Each lesson file is independent unless it imports another file. For Playwright tests, change to `Playwright_Practice` and run:

```powershell
npx playwright test
```

Read a chapter in order, predict the output before running each example, then change one value and run it again. The numbering skips some numbers because the repository has gaps; that does not mean a topic is missing from this guide.

## Folder guide

| Folder | Main concepts |
|---|---|
| [01_Chapter_basics](./01_Chapter_basics/) | First scripts, output, arithmetic |
| [02_Chapter_Keywords_Identifiers](./02_Chapter_Keywords_Identifiers/) | JavaScript engine, names, declarations, comments |
| [03_Chapter_JS_Literals](./03_Chapter_JS_Literals/) | Types, literals, numbers, `null`, `undefined`, `BigInt` |
| [04_chapter_JS_Operators](./04_chapter_JS_Operators/) | Arithmetic, comparisons, logic, strings, ternaries |
| [05_Chapter_Incre_Decre_Operators](./05_Chapter_Incre_Decre_Operators/) | Prefix/postfix increment, decrement, nullish coalescing |
| [06_Chapter_if_else_Condition_Statement](./06_Chapter_if_else_Condition_Statement/) | Conditional branching and score ranges |
| [07_Switch_Statement](./07_Switch_Statement/) | `switch`, grouped cases, status-code examples |
| [08_UserInput](./08_UserInput/) | Prompt, terminal input, standard input |
| [12_Chapter_Arraays](./12_Chapter_Arraays/) | Array access, mutation, search, iteration, transforms, sorting, copying |
| [13_Chapter_Functions](./13_Chapter_Functions/) | Function forms, arguments, returns, rest/spread, IIFE |
| [14_chapter_Var_Let_Const_Hoisting](./14_chapter_Var_Let_Const_Hoisting/) | Scope, hoisting, TDZ |
| [15_Chapter_Funtions_Closure](./15_Chapter_Funtions_Closure/) | Closures |
| [16_Chapter_Strings](./16_Chapter_Strings/) | String access, methods, searching |
| [17_Chapter_Objects](./17_Chapter_Objects/) | Objects, references, shallow/deep copies |
| [18_Chapter_Multi_Dimention_Array](./18_Chapter_Multi_Dimention_Array/) | 1D/2D arrays and printed patterns |
| [19_Callback](./19_Callback/) | Callbacks, asynchronous order, callback nesting |
| [20_Promise](./20_Promise/) | Promise chains, errors, combinators |
| [21_Await_Async](./21_Await_Async/) | Async/await, sequential/parallel work, Playwright examples |
| [22_Chapter_Export_Import](./22_Chapter_Export_Import/) | Module exports and imports |
| [23_Chapter_Class_Objects](./23_Chapter_Class_Objects/) | Classes, instances, constructors, static members |
| [24_Chapter_OOPS_Encapsulation](./24_Chapter_OOPS_Encapsulation/) | Private fields and controlled access |
| [25_Chapter_OOPs_Inheritence](./25_Chapter_OOPs_Inheritence/) | Single/multilevel/hierarchical inheritance and mixins |
| [26_Sample_Examples](./26_Sample_Examples/) | Combined class and inheritance examples |
| [Coding_Practise_Tasks](./Coding_Practise_Tasks/) | String algorithms and test-duration reporting |
| [Typescript_Practice](./Typescript_Practice/) | Related TypeScript typing, interfaces, abstraction, and enums |
| [Playwright_Practice](./Playwright_Practice/) | Browser test configuration and example spec |

## 1. JavaScript basics, names, and values

### Running code and expressions

The first examples introduce a JavaScript file, Node.js, `console.log`, and arithmetic. An **expression** evaluates to a value: for example, `2 + 3` evaluates to `5`. Parentheses make the intended order of operations clear.

### Keywords, identifiers, and comments

An **identifier** is a name chosen for a variable or function. Names can use letters, digits, `_`, and `$`, but cannot start with a digit or use a reserved keyword. JavaScript is case-sensitive, so `userName` and `username` are different names. Prefer descriptive `camelCase` names for variables and functions, and use comments to clarify intent rather than restating the code.

The engine example introduces how JavaScript is executed by an engine such as V8. The practical takeaway is to focus first on the language's observable behavior: read an expression, predict its value, and then verify it.

### Literals and data types

A **literal** is a value written directly in code. The examples cover strings, numbers, booleans, `null`, and `undefined`, as well as binary/octal/hexadecimal and exponential number notation.

- `undefined` commonly means a value has not been assigned; `null` is an explicit “no value”.
- `typeof null` returns `"object"` for historical reasons. This is a JavaScript quirk, not evidence that `null` is an ordinary object.
- `NaN` means “not a number” and is unusual because `NaN === NaN` is false. Use `Number.isNaN(value)` to check for it.
- `Infinity` and `-Infinity` can result from numeric operations.
- Numeric separators such as `1_000_000` improve readability. `BigInt` represents integers outside the safe integer range and is written with an `n` suffix, such as `123n`; do not mix `BigInt` and `Number` in arithmetic without converting deliberately.

See [the literals examples](./03_Chapter_JS_Literals/).

## 2. Variables, operators, and decisions

### `var`, `let`, `const`, hoisting, and the TDZ

The examples compare three declaration styles:

- `var` is function-scoped (or global-scoped) and its declaration is hoisted and initialized to `undefined`.
- `let` and `const` are block-scoped. Their declarations are hoisted but cannot be accessed before the declaration is evaluated; that interval is the **temporal dead zone (TDZ)**.
- `const` prevents reassignment of the binding. It does not make an object or array stored in that binding immutable.

Function declarations can be called before their textual definition because they are hoisted. Function expressions assigned to variables do not behave the same way. The hoisting files demonstrate why relying on hoisting is usually less clear than declaring values before using them.

### Operators and truthiness

The operator lessons cover assignment, arithmetic (`+`, `-`, `*`, `/`, `%`, `**`), comparisons, logical operators, string concatenation, `typeof`, and ternary expressions.

- Prefer strict equality (`===`, `!==`) because loose equality (`==`, `!=`) coerces types and can produce surprising results. The “confusing comparisons” examples show cases such as `"" == 0`.
- `&&` and `||` short-circuit and return one of their operands, not necessarily a boolean. `!` converts a value to a boolean and negates it.
- A template literal uses backticks and `${expression}` to insert a value into a string.
- `condition ? valueIfTrue : valueIfFalse` is a compact conditional expression. Nested ternaries work, but several levels are harder to read than `if/else`.
- Prefix increment/decrement (`++value`, `--value`) changes the value before the expression is evaluated; postfix (`value++`, `value--`) evaluates to the old value and then changes it. For interview-style expressions, track each operation from left to right rather than guessing.
- `value ?? fallback` uses the fallback only when `value` is `null` or `undefined`. Unlike `value || fallback`, it preserves valid falsy values such as `0`, `false`, and `""`.

### `if`, `else`, and `switch`

Use `if/else if/else` when conditions are ranges or compound expressions. The grade-calculator exercise also demonstrates validating a score before grading it; boundary values such as 0, 50, 90, and 100 are important to check.

Use `switch` when comparing one value with several discrete cases. `break` prevents execution from falling through to the next case. Multiple adjacent cases can share the same outcome, as in the browser-family example. A `default` branch handles unmatched values.

### Reading input in Node.js

The input examples show three Node.js approaches:

- `prompt-sync` returns input as text. Convert it with `Number(...)` before doing numeric comparisons or arithmetic.
- `readline` collects input through a callback and closes its interface when finished.
- `fs.readFileSync(0, 'utf8')` reads standard input as one string; split and parse it when the exercise expects multiple values.

Treat external input as text until it has been validated and converted.

## 3. Arrays and functions

### Arrays

An array is an ordered, zero-indexed collection. `length` gives the number of items; the last valid index is `length - 1`. The examples cover creating arrays, accessing and changing elements, and both homogeneous and mixed values.

Array operations in the lessons include:

- Add/remove: `push`/`pop` work at the end; `unshift`/`shift` work at the beginning; `splice` inserts or removes at an index and mutates the original array.
- Search: `indexOf`, `lastIndexOf`, and `includes`; `find` returns the first matching item, while `findIndex` returns its index.
- Iterate: `forEach` runs a callback for each item.
- Transform/select: `map` creates a transformed array; `filter` keeps matching items; `reduce` accumulates a result; `every` checks whether all items match; `some` checks whether at least one matches.
- Combine/copy: `concat`, `slice`, spread (`[...items]`), and destructuring. `slice` does not mutate the source; `splice` does.
- Sort: the default `sort()` compares values as strings. Use a comparator for numbers, such as `numbers.sort((a, b) => a - b)` for ascending numeric order. Sorting mutates the array.

Destructuring assigns array items to variables, and a rest pattern (`...rest`) collects the remaining items. Spread can make a shallow copy of an array, but nested objects inside it are still shared.

### Functions

Functions let code be named, reused, and passed around. The files cover declarations, function expressions, and arrow functions; examples with no parameters, parameters, return values, or both; and functions that return values for later use.

- Parameters are names in the function definition; arguments are the values passed in when calling it.
- `return` sends a value back and stops that function. A function without a `return` produces `undefined`.
- A concise arrow function can omit braces and `return` when its body is a single expression: `const add = (a, b) => a + b`.
- Rest parameters (`...codes`) collect multiple arguments into an array. Spread (`...items`) expands an iterable into individual arguments.
- An IIFE (Immediately Invoked Function Expression) is defined and run immediately, often to create a one-time scope.

### Scope and closures

Scope determines where a variable can be accessed. A **closure** occurs when a function retains access to variables from the scope where it was created, even after that outer function has returned. In the browser example, `startBrowser()` returns `installBrowser()`, and the returned function can still read the outer `name`.

See [functions](./13_Chapter_Functions/) and [closures](./15_Chapter_Funtions_Closure/).

## 4. Strings, objects, and multidimensional arrays

### Strings

Strings are sequences of characters. The examples cover length, indexed access, `charAt`, `at` (including negative indexes), and character codes. Search helpers such as `includes`, `startsWith`, `endsWith`, `indexOf`, and `lastIndexOf` help inspect text. Methods such as `toLowerCase`, `split`, `join`, and `replace` are useful for transforming strings. Strings are immutable: these methods return values rather than changing the original string.

### Objects and copying

Objects group named properties and methods. Dot notation (`user.name`) accesses a known property; bracket notation (`user[key]`) is useful when the property name is stored in a variable. A method can use `this` to refer to the object it is called on.

When an object is assigned or passed to a function, its reference value is copied. Both names can refer to the same object, so a change through one is visible through the other. Spread (`{...object}`) makes a **shallow** copy: top-level properties are copied, but nested objects remain shared. `structuredClone(...)` makes a deep copy for supported data. Use the same distinction for arrays.

### Two-dimensional arrays and patterns

A two-dimensional array is an array whose elements are themselves arrays. Access an item with two indexes, such as `scores[row][column]`. The examples use rows/columns, nested iteration, row totals via `map` and `reduce`, and console-printed triangle/pyramid patterns. Check both dimensions when looping so you do not read past a row's end.

## 5. Callbacks, promises, and async/await

### Callbacks

A callback is a function passed to another function to be called later. Callbacks are useful for event-driven or asynchronous work, but deeply nested callbacks become difficult to read (“callback hell”). The sequence examples motivate using promises and `async/await` for clearer flow.

`setTimeout` is asynchronous: the current synchronous statements run before its callback. The delay is the second argument: `setTimeout(callback, milliseconds)`.

### Promises

A promise represents a result that may be available later. It is pending, then settles as fulfilled or rejected. `resolve` fulfills it; `reject` rejects it.

- `.then(...)` handles a fulfillment and can return a value or another promise for the next step.
- `.catch(...)` handles rejection. Returning a promise from each `.then` is what keeps a chain connected.
- `.finally(...)` runs cleanup code whether the promise fulfilled or rejected.
- `Promise.all([...])` fulfills when every input fulfills and rejects as soon as one rejects.
- `Promise.allSettled([...])` waits for all inputs and reports each as fulfilled or rejected.
- `Promise.race([...])` settles with the first input promise to settle (fulfillment or rejection).

### Async/await

An `async` function always returns a promise. `await` pauses that function until a promise settles; it does not block the entire JavaScript process. `try/catch/finally` can handle failures and cleanup in an async function.

Awaiting requests one at a time gives **sequential** execution. Starting them together and awaiting `Promise.all` gives **parallel** waiting, which is usually faster for independent work. The flaky-API exercises also introduce retries; a real retry loop should make the attempt count and error handling explicit.

Some async lesson files, such as [159_Playwright.Spec1.ts](./21_Await_Async/159_Playwright.Spec1.ts) and [160_Playwright.Spec2.ts](./21_Await_Async/160_Playwright.Spec2.ts), are TypeScript Playwright specs rather than plain `.js` scripts. They use the same `async`/`await` concepts in a browser test.

## 6. Modules and object-oriented JavaScript

### Modules

Modules split code across files. The examples use named `export` declarations and named `import` statements to reuse values and functions such as a base URL or test-name formatter. A relative import path must match the real filename, including letter case on case-sensitive systems. Node.js also needs to interpret the files in the right module mode: align `import`/`export` with the project's ESM configuration or use CommonJS consistently.

### Classes, objects, and static members

A class defines the shape and behavior of objects created with `new`. The constructor initializes each instance; instance methods operate on an instance and commonly use `this`. **Static** fields and methods belong to the class itself, not to an individual instance. Examples apply this to test counts and shared configuration.

The sample counter also demonstrates **method chaining** by returning `this` from methods. This lets calls such as `counter.increment().display()` operate on the same instance.

### Encapsulation

Encapsulation keeps internal state behind a public interface. JavaScript private fields use a `#` prefix and cannot be accessed directly outside the class. Methods can validate or control updates to that private state. A private static field is shared by the class rather than stored on each instance.

### Inheritance and mixins

`class Child extends Parent` creates a subclass. `super(...)` calls the parent constructor, and `super.method()` calls a parent method. A subclass can override a method; this supports polymorphism, where different subclasses respond to the same method call in their own way.

JavaScript class syntax supports one direct superclass, not multiple inheritance. The inheritance folder also introduces mixins: functions that add behavior by returning a class that extends a supplied base class. Use mixins sparingly and keep the resulting class hierarchy understandable.

## 7. Practice problems and test examples

The coding exercises apply loops, conditions, arrays, strings, classes, and sorting:

- Reverse a string; check a palindrome; remove duplicate characters.
- Count vowels and consonants.
- Compare normalized/sorted strings for anagram-style checks.
- Read test names and durations, then compute total duration and the slowest test.

The sample files also demonstrate bugs, severity labels, inheritance, and fluent counters. These are practice examples rather than a packaged application.

The Playwright examples, including [example.spec.ts](./Playwright_Practice/tests/example.spec.ts), introduce:

- `test(...)` to define a test and the `{ page }` fixture to get a browser page.
- `page.goto(...)` to navigate.
- Role-based locators such as `page.getByRole('link', { name: 'Get started' })`.
- Actions such as `.click()` and assertions such as `expect(...).toHaveTitle(...)` and `.toBeVisible()`.
- `async`/`await` so each browser action finishes before the next assertion.

The Playwright configuration selects Chromium, Firefox, and WebKit projects, uses an HTML reporter, and configures CI retries/workers. Tests navigate to `playwright.dev`, so running them requires the browser dependencies and network access.

## 8. Related TypeScript practice

The `Typescript_Practice` folder builds on JavaScript with compile-time types:

- Primitive, array, object, parameter, and return annotations.
- `void` for functions with no meaningful return; `any` disables type checking, while `unknown` requires narrowing before use.
- Interfaces describe object shapes; optional properties use `?`, `readonly` prevents reassignment through that interface, and interfaces can extend other interfaces.
- Classes can implement interfaces, making required members explicit. The abstraction examples apply these ideas to page objects, API response data, calculator operations, hooks, and test configuration.
- Enums provide named sets of values. The test-status, severity, environment, HTTP-method, and browser examples use string enums so the output is readable; see [221_Enum5.ts](./Typescript_Practice/02_Enum/221_Enum5.ts).

TypeScript annotations are checked by the TypeScript compiler and are erased from the emitted JavaScript. They are not JavaScript syntax that Node can execute directly; use a TypeScript runner/compiler configured with compatible TypeScript and `ts-node` versions.

## 9. Corrections and common traps in the examples

Keep these details in mind when using the source files as reference:

1. In [155_Promise_Race.js](./20_Promise/155_Promise_Race.js), pass the delay as the second argument to `setTimeout`, for example `setTimeout(() => resolve("Fast"), 100)`. The current placement of the delay does not time the callback as intended.
2. In [158_Async_Await.js](./21_Await_Async/158_Async_Await.js), `new Promise.resolve("abc")` is invalid. Use `Promise.resolve("abc")` (without `new`) or `new Promise((resolve) => resolve("abc"))`.
3. In [163_API_Flaky_Finder.js](./21_Await_Async/163_API_Flaky_Finder.js), the factory returns a function that returns a promise. Call that function and await its promise; also check that the success/failure condition matches the intended retry sequence.
4. In [94_Array_Copy.js](./12_Chapter_Arraays/94_Array_Copy.js), `deep_copy_array = original` is an alias, not a deep copy. The two variables refer to the same array. Spread and `slice()` are shallow copies; use `structuredClone` for supported nested data.
5. In [167_Example1.js](./22_Chapter_Export_Import/167_Example1.js) and [168_Example2.js](./22_Chapter_Export_Import/168_Example2.js), helper imports spell the path with different letter casing than the actual `testUtils.js` filename. Windows usually ignores that case difference, but Linux and other case-sensitive environments do not.
6. In [199_Hybrid_Inheritence.js](./25_Chapter_OOPs_Inheritence/05_Hybrid_inheritence/199_Hybrid_Inheritence.js), the file is a note/comment rather than a runnable inheritance example. [196_Multiple_inheritence.js](./25_Chapter_OOPs_Inheritence/03_Mutiple_Inheritence/196_Multiple_inheritence.js) also illustrates the limitation; the working mixin approach is in [197_Mixin_MI.js](./25_Chapter_OOPs_Inheritence/03_Mutiple_Inheritence/197_Mixin_MI.js).

When an example's output differs from what you expected, first check whether it is intentionally showing a language quirk, then check whether the file contains one of the implementation mistakes above.
