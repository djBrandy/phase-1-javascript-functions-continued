// code your solution here
function saturdayFun(activityFotSaturday = 'roller-skate') {
    return `This Saturday, I want to ${activityFotSaturday}!`;
}
const mondayWork = function(activityForMonday = 'go to the office') {
    return `This Monday, I will ${activityForMonday}.`;
};
function wrapAdjective(flair = '*') {
    return function(adjective) {
        return `You are ${flair}${adjective}${flair}!`;
    };
}