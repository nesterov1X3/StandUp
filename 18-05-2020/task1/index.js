// сылка на объект, владеющая вызовом функции


const timer = {
    secondsPassed: 0,
    minsPassed: 0,
    startTimer() {
      let timerId =  setInterval(() => {
            this.secondsPassed += 1;
            if (this.secondsPassed === 10) {
                this.minsPassed += 1;
                this.secondsPassed = 0;
            }

        }, 1000)
     this.timerId = timerId;
    },
    getTimer() {
      let secs  = this.secondsPassed < 10 ? `${this.secondsPassed}` : this.secondsPassed;
      return `${this.minsPassed}: ${secs}`
    },
    stopTimer() {
      clearInterval(this.timerId);
      this.timerId = null;
    },
    resetTimer() {
        this.stopTimer();
       this.minsPassed = 0;
       this.secondsPassed = 0;
    },
}
