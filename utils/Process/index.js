module.exports = class Process {
  constructor(identifier, arrivalTime, burstTime, priority = 1) {
    this._identifier = identifier;
    this._arrivalTime = arrivalTime;
    this._burstTime = burstTime;
    this._priority = priority || 1;
    this._completeTime = 0;
    this._turnAroundTime = 0;
  }

  get identifier() {
    return this._identifier;
  }

  get burstTime() {
    return this._burstTime;
  }

  get priority() {
    return this._priority;
  }

  get arrivalTime() {
    return this._arrivalTime;
  }

  get getCompleteTime() {
    return this._completeTime;
  }

  get getTurnAroundTime() {
    return this._turnAroundTime;
  }

  completeTime(value = 0) {
    this._completeTime = value;
    this._turnAroundTime = this._completeTime - this._arrivalTime;
  }
  weight() {
    const copyId = [...this._identifier];
    copyId.shift();
    if (copyId.length === 2) {
      return Number(copyId[0] + copyId[1]);
    }
    return Number(copyId);
  }
};
