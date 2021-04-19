import { Component, SyntheticEvent } from "react";
import "./Search.css";

interface SearchState {
    textToSearch: string;
}

class Search extends Component<{}, SearchState> {

    public constructor(props: {}) {
        super(props);
        this.state = { textToSearch: "" };
    }

    private setValue = (args: SyntheticEvent) => {
        // args = מידע לגבי הארוע
        // args.target = התגית שהעלתה את הארוע

        // const value = (args.target as HTMLInputElement).value;
        // this.setState({ textToSearch: value });

        // ES6 Property Shorthand Syntax:
        const textToSearch = (args.target as HTMLInputElement).value;
        this.setState({ textToSearch });
    }

    private clearValue = () => {
        this.setState({ textToSearch: "" });
    }

    public render(): JSX.Element {
        return (
            <div className="Search Box">

                <input type="text" placeholder="search something..."
                    onChange={this.setValue} value={this.state.textToSearch} />

                <span>Searching for {this.state.textToSearch}</span>

                <button onClick={this.clearValue}>Clear</button>
            </div>
        );
    }
}

export default Search;
