
function saturdayFun(activity = 'roller-skate'){
   return  (`This Saturday, I want to ${activity}!`);
}

function mondayWork(action = 'go to the office'){
   return (`This Monday, I will ${action}.`)
}

function wrapAdjective(flaire = '*'){
   return function(argu1 = "special") {
      return `You are ${flaire}${argu1}${flaire}!`
   }
}