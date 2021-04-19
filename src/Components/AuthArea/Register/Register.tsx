import axios from "axios";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import UserModel from "../../../Models/UserModel";
import { registerAction } from "../../../Redux/AuthState";
import store from "../../../Redux/Store";
import globals from "../../../Services/Globals";
import notify from "../../../Services/Notification";
import "./Register.css";

function Register(): JSX.Element {

    const history = useHistory();
    const { register, handleSubmit } = useForm<UserModel>();

    async function send(user: UserModel) {
        try{
            const response = await axios.post<UserModel>(globals.urls.register, user);
            store.dispatch(registerAction(response.data));
            notify.success("you are now registered")
            history.push("/home");
        } catch (err){
            notify.error(err);
        }
    }
    return (
        <div className="Register Box">

            <h2>Register</h2>

            <form onSubmit={handleSubmit(send)}>

                <label>First name: </label>
                <input type="text" name="firstName" ref={register({ required: true })}/>
                <br /><br />
                <label>Last name: </label>
                <input type="text" name="lastName" ref={register({ required: true })}/>
                <br /><br />
                <label>Username: </label>
                <input type="text" name="username" ref={register({ required: true })}/>
                <br /><br />
                <label>Password: </label>
                <input type="password" name="password" ref={register({ required: true })}/>
                <br />
                <button>submit</button>
            </form>
        </div>
    );
}

export default Register;
