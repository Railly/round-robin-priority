#Autores: Railly Hugo Quispe, Carlos Tarmeño Noriega, Elian Huanca Gomez

class Process:
    def __init__(self, identifier, arrivalTime, burstTime,priority=1):
        self.__identifier = identifier
        self.__arrivalTime = arrivalTime
        self.__burstTime = burstTime
        if priority == 1:
            self.__priority = 1
        else:
            self.__priority = priority
        self.__completeTime = 0
        self.__turnAroundTime = 0

    def identifier(self):
        return self.__identifier
    
    def burstTime(self):
        return self.__burstTime

    def priority(self):
        return self.__priority
    
    def arrivalTime(self):
        return self.__arrivalTime
    
    def getComppleteTime(self):
        return self.__completeTime
    
    def getTurnAroundTime(self):
        return self.__turnAroundTime
    
    def complete(self, value = 0):
        self.__completeTime = value
        self.__turnAroundTime = self.__completeTime - self.__arrivalTime
    
    def weight(self):
        copyId = [self.__identifier]
        copyId.pop(0)
        if len(copyId) == 2:
            return copyId[0] + copyId [1]
        
        return copyId






        
