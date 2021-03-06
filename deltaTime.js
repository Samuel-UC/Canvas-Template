class DeltaTime extends Game {
    constructor() {
        super();
        
        this.running = false;

        this._time = 0;
        this._loop = 0;
    }

    update (deltaTime) {
        console.log(deltaTime);
    }

    loop (time) {
        this.update(time - this._time);

        this._time = time;
        this._loop = window.requestAnimationFrame(time => this.loop(time));
    }

    start_loop () {
        this.running = true;
        this._loop = window.requestAnimationFrame(time => this.loop(time));
    }

    stop_loop () {
        this.running = false;
        window.cancelAnimationFrame(this._loop);
    }
}
