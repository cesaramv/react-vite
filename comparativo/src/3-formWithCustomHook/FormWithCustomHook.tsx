//import { useState } from "react"
import useForm from "../hooks/useForm";



export default function FormWithCustomHook() {

    const { onInputChange, onResetForm, formState, userName, email, password } = useForm({
        userName: '',
        email: '',
        password: ''
    });



    return (
        <>
            <h3>Form with custom hook</h3>
            <div>
                <label htmlFor="">Username</label>
                <input type="text" placeholder="Pepe" name="userName" onChange={onInputChange} value={userName} />
            </div>

            <div>
                <label htmlFor="">Email</label>
                <input type="email" placeholder="pepe@gmail.com" name="email" onChange={onInputChange} value={email} />
            </div>

            <div>
                <label htmlFor="">Password</label>
                <input type="password" name="password" onChange={onInputChange} value={password} />
            </div>

            <button onClick={onResetForm}>Reset form</button>

        </>
    )

}
