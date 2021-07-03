
def getAverage(processesArray, columnName):
    def prom(acc, curr):
        return acc + curr.getCompleteTime if columnName == "CompleteTime" else acc + curr.getTurnAround
    totalSum = []
    totalSum[0]=prom()

    average = totalSum[0]/len(processesArray)
    return average

getAverageColumn = getAverage

