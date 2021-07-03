const Process = require("../Process");

const CreaProceso = (PID, llegada, duracion, prioridad) => {
  return new Process(PID, llegada, duracion, prioridad);
};

const obtenerProcesos = (lines) => {
  let index = 0;
  let procesos = lines
    .map((line) => {
      let value = lines[index].split(" ");
      index++;
      if (line !== "") {
        return CreaProceso(
          value[0],
          Number(value[1]),
          Number(value[2]),
          Number(value[3])
        );
      }
    })
    .slice(0, -1);
  return procesos;
};

const obtenerVariables = (input) => {
  let lines = input.split("\n");
  /* FILLING ARRAY WITH READEN DATA*/
  let procesos = obtenerProcesos(lines);
  // Number of intervals
  let numero_de_intervalos = {};
  procesos.forEach((p) => {
    numero_de_intervalos = { ...numero_de_intervalos, [p.identifier]: 0 };
  });
  // Number of processes left
  let procesosRestantes = procesos.length;
  return { procesos, numero_de_intervalos, procesosRestantes };
};

/* READING DATA FROM dataset.txt*/
const resolverRoundRobin = (input) => {
  // Queue of procesos
  let queue = [];
  // Output
  let salidaProcesos = [];
  let time = 0;
  let { procesos, numero_de_intervalos, procesosRestantes } = obtenerVariables(
    input
  );

  const calcularCola = () => {
    procesos = procesos.filter((p) => {
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

  const SiguientePID = () => {
    return queue.shift();
  };

  const AsignaCPU = (proceso, numero_de_intervalos) => {
    if (numero_de_intervalos[proceso.identifier] !== proceso.burstTime) {
      for (let i = 0; i < proceso.priority; i++) {
        numero_de_intervalos[proceso.identifier]++;
        if (numero_de_intervalos[proceso.identifier] === proceso.burstTime) {
          proceso.completeTime(time + 1);
          salidaProcesos.push(proceso);
          procesosRestantes--;
          time++;
          calcularCola();
          break;
        }
        time++;
        calcularCola();
      }
    }
  };

  const DesasignaCPU = (proceso) => {
    if (numero_de_intervalos[proceso.identifier] !== proceso.burstTime) {
      // Queuing the current process for next iteration
      queue.push(proceso);
    }
  };

  /* STARTING THE PROGRAM  */
  while (procesosRestantes) {
    // Filling queue and filtering procesos
    calcularCola();
    const proceso = SiguientePID();
    AsignaCPU(proceso, numero_de_intervalos);
    DesasignaCPU(proceso);
  }

  // Sorting processes by arrival time
  salidaProcesos.sort((x, y) => x.arrivalTime - y.arrivalTime);
  return salidaProcesos;
};

module.exports = resolverRoundRobin;
