import axios from "axios";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import ProductModel from "../../../Models/ProductModel";
import { productAddedAction } from "../../../Redux/ProductsState";
import store from "../../../Redux/Store";
import globals from "../../../Services/Globals";
import notify from "../../../Services/Notification";
import "./AddProduct.css";

function AddProduct(): JSX.Element {

    const { register, handleSubmit, errors } = useForm<ProductModel>();
    const history = useHistory();

    //equivalent for componentDidMount in fc
    useEffect(() => {
        if(!store.getState().authState.user){
            notify.error("please log in in order to add a product")
            history.push("/login");
        }
    });

    async function send(product: ProductModel) {
        try {

            // Convert ProductModel to FormData in order to send text + image to the backend:
            const myFormData = new FormData();
            myFormData.append("name", product.name);
            myFormData.append("price", product.price.toString());
            myFormData.append("stock", product.stock.toString());
            myFormData.append("image", product.image.item(0));

            const response = await axios.post<ProductModel>(globals.urls.products, myFormData);
            const addedProduct = response.data;

            // With Redux:
            store.dispatch(productAddedAction(addedProduct));
            notify.success("Product has been added! id: " + addedProduct.id);
            history.push("/products");
        }
        catch (err) {
            notify.error(err);
        }
    }

    return (
        <div className="AddProduct Box">

            <h2>Add Product</h2>

            <form onSubmit={handleSubmit(send)}>

                <label>Name: </label> <br />
                <input type="text" name="name" ref={register({ required: true, minLength: 3, pattern: /^[A-Z].+$/ })} />
                {errors.name?.type === "required" && <span>Missing name.</span>}
                {errors.name?.type === "minLength" && <span>Name too short.</span>}
                {errors.name?.type === "pattern" && <span>Name must start with a capital letter.</span>}
                <br /> <br />

                <label>Price: </label> <br />
                <input type="number" step="0.01" name="price" ref={register({
                    required: { value: true, message: "Missing Price." },
                    min: { value: 0, message: "Price can't be negative." }
                })} />
                <span>{errors.price?.message}</span>
                <br /> <br />

                <label>Stock: </label> <br />
                <input type="number" name="stock" ref={register({ required: true })} />
                {errors.stock && <span>Missing stock.</span>}
                <br /> <br />

                <label>Image: </label> <br />
                <input type="file" name="image" ref={register({ required: true })} accept="image/*" />
                {errors.image && <span>Missing image.</span>}
                <br /> <br />

                <button>Add</button>

            </form>

        </div>
    );
}

export default AddProduct;
