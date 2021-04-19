import { Component } from "react";
import "./Clock.css";

interface ClockState {
    time: string;
}

class Clock extends Component<{}, ClockState> {

    private timerId: number; // Timer code - used for closing the timer.

    // 1. ctor - react creates an object from this class
    // usage: send props to super class, init state
    public constructor(props: {}) {
        super(props);
        this.state = { time: "" };
    }

    // 2. render - UI needs to be updated
    // usage: return back the component UI
    public render(): JSX.Element {
        return (
            <div className="Clock Box">
                <p>{this.state.time}</p>
            </div>
        );
    }

    // 3. componentDidMount - component is ready for use
    // usage: perform side-effects once.
    public componentDidMount(): void {
        this.timerId = window.setInterval(() => {
            const now = new Date();
            this.setState({ time: now.toLocaleTimeString() });
        }, 1000);
    }

    // 4. componentDidUpdate - props or state has been changed
    // usage: do your logic if props or state has been changed.
    public componentDidUpdate(): void {

    }

    // 5. componentWillUnmount - component is about to be destroyed
    // usage: close things, clean things, kill things...
    public componentWillUnmount(): void {
        window.clearInterval(this.timerId); // Close the timer.
    }
}

export default Clock;
