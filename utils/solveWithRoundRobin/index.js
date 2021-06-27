const Process = require("../Process");

/* READING DATA FROM dataset.txt*/
const solveWithRoundRobin = (input) => {
  let lines = input.split("\n");
  let index = 0;

  /* FILLING ARRAY WITH READEN DATA*/

  const rawProcesses = lines.map((line) => {
    let value = lines[index].split(" ");
    index++;
    if (line !== "") {
      return new Process(
        value[0],
        Number(value[1]),
        Number(value[2]),
        Number(value[3])
      );
    }
  });

  /* DECLARING VARIABLES*/

  // Deleting last undefined item
  let processes = rawProcesses.slice(0, -1);
  // Queue of processes
  let queue = [];
  // Number of intervals
  let time = 0;
  let pseudoTime = 0;
  // Zero-filled object with the current intervals of each process
  let currentIntervals = {};
  processes.forEach((p) => {
    currentIntervals = { ...currentIntervals, [p.identifier]: 0 };
  });
  // Number of processes left
  let remainingProcesses = processes.length;
  // Output
  let outputProcesses = [];

  const calculateQueue = () => {
    processes = processes.filter((p) => {
      if (p.arrivalTime === time) {
        if (queue.length === 0) {
          queue.push(p);
          return false;
        }
        if (queue.length === 1 || queue.length === 2) {
          if (queue[0].identifier === "P1") {
            queue = [p, ...queue];
            return false;
          }
        }
        let newQueue = [];
        queue.forEach((el) => {
          newQueue.push(el);
          if (el.weight() === p.weight() - 1) {
            newQueue.push(p);
          }
        });
        queue = newQueue;
        return false;
      }
      return true;
    });
  };

  /* STARTING THE PROGRAM  */
  //console.table(processes);

  while (remainingProcesses) {
    // Filling queue and filtering processes
    calculateQueue();
    // Extracting current proces
    const currentProcess = queue.shift();

    if (
      currentIntervals[currentProcess.identifier] !== currentProcess.burstTime
    ) {
      for (let i = 0; i < currentProcess.priority; i++) {
        currentIntervals[currentProcess.identifier]++;
        if (
          currentIntervals[currentProcess.identifier] ===
          currentProcess.burstTime
        ) {
          currentProcess.completeTime(time + 1);
          outputProcesses.push(currentProcess);
          remainingProcesses--;
          time++;
          calculateQueue();
          break;
        }
        time++;
        calculateQueue();
      }
      if (
        currentIntervals[currentProcess.identifier] !== currentProcess.burstTime
      ) {
        // Queuing the current process for next iteration
        queue.push(currentProcess);
      }
    }

    pseudoTime = pseudoTime + currentProcess.priority;
  }

  outputProcesses.sort((x, y) => x.arrivalTime - y.arrivalTime);

  return outputProcesses;
};

module.exports = solveWithRoundRobin;
