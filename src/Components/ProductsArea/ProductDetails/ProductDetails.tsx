import axios from "axios";
import { Component } from "react";
import { RouteComponentProps } from "react-router";
import { NavLink } from "react-router-dom";
import ProductModel from "../../../Models/ProductModel";
import store from "../../../Redux/Store";
import globals from "../../../Services/Globals";
import "./ProductDetails.css";

interface RouteParams {
    id: string;
}

interface ProductDetailsProps extends RouteComponentProps<RouteParams> {

}

interface ProductDetailsState {
    product: ProductModel;
}

class ProductDetails extends Component<ProductDetailsProps, ProductDetailsState> {

    public constructor(props: ProductDetailsProps) {
        super(props);
        this.state = { product: null };
    }

    // Without Redux:
    // public async componentDidMount() {
    //     try {
    //         const id = this.props.match.params.id;
    //         const response = await axios.get<ProductModel>(globals.urls.products + id);
    //         this.setState({ product: response.data });
    //     }
    //     catch (err) {
    //         alert("Error: " + err.message);
    //     }
    // }

    // With Redux:
    public async componentDidMount() {
        try {
            const id = +this.props.match.params.id; // the + is for converting string to number in JavaScript / TypeScript
            const product = store.getState().productsState.products.find(p => p.id === id);
            this.setState({ product });
        }
        catch (err) {
            alert("Error: " + err.message);
        }
    }

    public render(): JSX.Element {
        return (
            <div className="ProductDetails">
                {this.state.product &&
                    <>
                        <h2>Product Details</h2>
                        <h3>Name: {this.state.product.name}</h3>
                        <h3>Price: ${this.state.product.price}</h3>
                        <h3>Stock: ${this.state.product.stock}</h3>
                        <img src={globals.urls.productImages + this.state.product.imageName} />
                        <br /><br />

                        <NavLink to="/products">Back</NavLink>

                    </>
                }
            </div>
        );
    }
}

export default ProductDetails;
