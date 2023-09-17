/**
    * @description      : 
    * @author           : belgacem
    * @group            : 
    * @created          : 17/09/2023 - 12:55:09
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 17/09/2023
    * - Author          : belgacem
    * - Modification    : 
**/
/**store the data in local storage example  */
localStorage.setItem("name","belgacem");
localStorage.setItem("age",25);
/**stringify  ->string */
localStorage.setItem("skills",JSON.stringify(["html , css , javascript , react , node "]));
localStorage.setItem("test object",JSON.stringify({"k1":1,"k2" :2}))
/** local storge string value 
 *  
*/
 console.log( localStorage.getItem("name"))
console.log(localStorage.getItem("age"))
console.log((localStorage.getItem("skills")))
/** json.parse  string to object  */
console.log("object" )
console.log(JSON.parse(localStorage.getItem("skills")))
/** set in local storge  */
localStorage.setItem("skills" ,JSON.stringify(["up 1 ", "up 2"]))
let x = JSON.parse(localStorage.getItem("skills"))
console.log (x)
localStorage.removeItem("skills")
console.log(localStorage.getItem("skills") ) 
console.log(localStorage.key(0))
console.log(localStorage.length)

/** clear all  */
// localStorage.clear()
/***  session  storge vs local storge session based   */
// sessionStorage.setItem("session name","s1")
console.log('loops in local Storge ')
for (let index = 0; index < localStorage.length; index++) {
console.log(localStorage.getItem(localStorage.key(index)))
    
}
document.cookie ="test "