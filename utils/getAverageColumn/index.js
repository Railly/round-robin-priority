const getAverageColumn = (processesArray, columnName) => {
  const totalSum = processesArray.reduce((acc, curr) => {
    return columnName === "completeTime"
      ? acc + curr.getCompleteTime
      : acc + curr.getTurnAroundTime;
  }, 0);

  const averageCT = totalSum / processesArray.length;

  return averageCT;
};

module.exports = getAverageColumn;
