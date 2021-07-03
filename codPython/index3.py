from P2.index1 import Process

def rP(line):
        index = 0
        value = lines[index].split(" ")
        index +=1
        if line != "":
            return Process(value[0],int(value[1]),int(value[2]),int(value[3]))




def solRR(input):
    lines = input.split("\n")

    rawProcesses = map(rP,lines)        
    




   


