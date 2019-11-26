class Clock {
    constructor() {
        this.originalSet = [];
        this.queue = []
        this.minuteShelf = [];
        this.fiveMinuteShelf = [];
        this.hourShelf = [];
        this.cycle = 0;
    }

    Initialize(ballCount) {
        for (let i = 1; i <= ballCount; i++) {
            this.originalSet.push(i);
        }
        this.queue = [...this.originalSet];
    }

    HasReturnedToOriginalState() {
        return this.queue.join(',') === this.originalSet.join(",")
    }

    LogState() {
        console.log('==========');
        console.log('Queue', this.queue);
        console.log('Minute', this.minuteShelf);
        console.log('Five', this.fiveMinuteShelf);
        console.log('Hour', this.hourShelf);
        console.log('Cycle', this.cycle);
        console.log('days', this.cycle/2); //cycle is 12 hours
    }

    Simulate(MINUTE_SHELF_MAX, FIVE_MIN_SHELF_MAX, HOUR_SHELF_MAX) {
        const ball = this.queue.shift();
        this.minuteShelf.push(ball);
    
        if (this.minuteShelf.length === MINUTE_SHELF_MAX) {
            this.fiveMinuteShelf.push(this.minuteShelf.pop());
            this.queue.push(...this.minuteShelf.reverse());
            this.minuteShelf = [];
        }
    
        if (this.fiveMinuteShelf.length === FIVE_MIN_SHELF_MAX) {
            this.hourShelf.push(this.fiveMinuteShelf.pop());
            this.queue.push(...this.fiveMinuteShelf.reverse());
            this.fiveMinuteShelf = [];
        }
    
        if (this.hourShelf.length === HOUR_SHELF_MAX) {
            const last = this.hourShelf.pop();
            this.queue.push(...this.hourShelf.reverse());
            this.queue.push(last);
            this.hourShelf = [];
        }
    }
}

module.exports = Clock;