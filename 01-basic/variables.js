//constant are used when we can not change the value of a property
const age = 20;
/**
 * both var and let are used to store data which may change,but varaibles declared
 * by @var keyword are scopped to immedaite body level and the varaibes declared by
 * @let keyword are scooped to the curly brakets {} 
 */
var city = 'peshawar'
let country = 'pakistan'

console.table([age, city, country])

/**
 * @Hiosting
 * 
 * @var 
 *  Variables declared with var keyword are hoisted and initialized which means they are
 *  accessible in their enclosing scope even before they are declared, however their value
 *  is undefined before the declaration statement is reached:
 * 
 * @let
 *  let variables are hoisted but not initialized until their definition is evaluated. 
 *  Accessing them before the initialization results in a ReferenceError. The variable is
 *  said to be in the temporal dead zone from the start of the block until the declaration
 *  statement is processed.
 */

function letHiosting() {
    try {

        console.log(stu);
        let stu = "kamran"
        console.log(stu)
    } catch (e) {
        console.log(e.message);
    }
}

letHiosting()

function varHiosting() {
    console.log(stu);
    var stu = "Jamal"
    console.log(stu)
}

varHiosting()

/**
 * @Global_Level_Scope
 *  At the top level, let, unlike var, does not create a property on the global object:
 * In node js window object is not worked but you can check these in the browser
 */

let globalLet = "globalLet"
var globalVar = "globalVar"

// console.log(window.globalLet)
// console.log(window.globalVar)

/**
 * @Redeclaration
 *  In strict mode, var will let you re-declare the same variable in the same scope while let
 *  raises a SyntaxError.
 */

'use strict';
var varData = 'var related data'
let letData = 'let related data'
console.table([varData, letData])

var varData = 'var related data'
// let letData = 'let related data'
console.table([varData, letData])


/**
 * @Block_scope
 * @var is access outside from the curly brakets, its is accesed from every where
 * @let scope is only for a curly brackets,and it will throw error if we access it outside
 */


{
    var varBlockScope = "inside function var block scope"
    let letBlockScope = "inside function let block scope"
    console.table([varBlockScope, letBlockScope])

}

console.log(varBlockScope)
// console.log(letBlockScope)

function varTest() {
    var x = 1;
    if (true) {
        var x = 2;  // same variable!
        console.log(x);  // 2
    }
    console.log(x);  // 2
}

function letTest() {
    let x = 1;
    if (true) {
        let x = 2;  // different variable
        console.log(x);  // 2
    }
    console.log(x);  // 1
}

varTest()
letTest()
