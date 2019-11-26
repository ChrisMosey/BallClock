const Clock = require("./Clock");

const BALL_COUNT = 30;

const MINUTE_SHELF_MAX = 5;
const FIVE_MIN_SHELF_MAX = 12;
const HOUR_SHELF_MAX = 12;


const clock = new Clock();
clock.Initialize(BALL_COUNT);

while(true) {
    for (let i = 0; i < 60 * 12; i++) {
        clock.Simulate(MINUTE_SHELF_MAX, FIVE_MIN_SHELF_MAX, HOUR_SHELF_MAX);
    }

    clock.cycle++;

    if (clock.HasReturnedToOriginalState()) {
        clock.LogState();
        break;
    }
}