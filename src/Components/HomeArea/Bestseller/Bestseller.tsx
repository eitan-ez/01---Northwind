import { Component } from "react";
import "./Bestseller.css";

interface BestsellerState {
    item: string;
    price: number;
}

class Bestseller extends Component<{}, BestsellerState> {

    public constructor(props: {}) {
        super(props);
        this.state = { item: "", price: 0 }; // Initializing the state.
    }

    private showItem = () => {
        this.setState({ item: "Irish Coffee", price: 12.5 });
    }

    public render(): JSX.Element {
        return (
            <div className="Bestseller Box">
                <button onClick={this.showItem}>Bestseller Product</button>
                <span>{this.state.item}, price: {this.state.price}</span>
            </div>
        );
    }

}

export default Bestseller;
