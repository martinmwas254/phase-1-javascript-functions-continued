function saturdayFun(activity) {
  if (activity === undefined) {
    activity = "roller-skate";
  }
  return `This Saturday, I want to ${activity}!`;
}

saturdayFun();

function mondayWork(activity) {
  if (activity === undefined) {
    activity = "go to the office";
  }
  return `This Monday, I will ${activity}.`;
}

function wrapAdjective(highlight = "*") {
  return function (adjective) {
    return `You are ${highlight}${adjective}${highlight}!`;
  };
}
