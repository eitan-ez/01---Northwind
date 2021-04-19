import { Component, SyntheticEvent } from "react";
import "./Recommended.css";

// // Functional Component:
// function Recommended(): JSX.Element {

//     const item = "Red Wine";

//     function showRecommendation(args:  SyntheticEvent) {
//         console.log(args);
//         alert(item);
//     }

//     return (
//         <div className="Recommended Box">
// 			<button onClick={showRecommendation}>Recommend me a Product</button>
//         </div>
//     );
// }

// Class Component:
class Recommended extends Component {

    private item = "Red Wine";

    // private showRecommendation(args:  SyntheticEvent) {
    //     console.log(args);
    //     alert(this.item);
    // }

    private showRecommendation = (args:  SyntheticEvent) => {
        console.log(args);
        alert(this.item);
    }

    public render(): JSX.Element {
        
        return (
            <div className="Recommended Box">
                {/* <button onClick={this.showRecommendation.bind(this)}>Recommend me a Product</button> */}
                <button onClick={this.showRecommendation}>Recommend me a Product</button>
            </div>
        );
    }
}

export default Recommended;
