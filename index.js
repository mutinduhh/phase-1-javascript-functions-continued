// code your solution here
function saturdayFun(activity=`roller-skate`){return `This Saturday, I want to ${activity}!`;}
saturdayFun();
saturdayFun(`bathe my dog`);
const mondayWork=function(task=`go to the office`){return `This Monday, I will ${task}.`;}
mondayWork(`work from home`);
function wrapAdjective(symbol) {
    return function(adjective) {
        return `You are ${symbol}${adjective}${symbol}!`;
    }
}
let result = wrapAdjective('*');
let emphatic = result("a hard worker");