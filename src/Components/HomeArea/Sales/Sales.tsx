import { Component } from "react";

interface SalesProps {
    category?: string; // ? = optional argument
    percent: number;
}

// // Functional Component:
// function Sales(props: SalesProps): JSX.Element {
//     const x = 123;
//     return (
//         <div className="Sales Box">
// 			<p>
//                 {/* Sale: {props.percent}% discount on all {props.category ? props.category : "Products"}! */}
//                 Sale: {props.percent}% discount on all {props.category || "Products"}!
//             </p>
//         </div>
//     );
// }

// Class Component:
class Sales extends Component<SalesProps> {

    // // If we have a ctor - we need to get the props into the ctor and pass them using 'super' to our super class:
    // public constructor(props: SalesProps) {
    //     super(props);
    // }

    public render(): JSX.Element {
        return (
            <div className="Box">
                <p>
                    Sale: {this.props.percent}% discount on all {this.props.category || "Products"}!
                </p>
            </div>
        );
    }
}

export default Sales;
