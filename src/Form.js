import React from 'react'
import "../src/Form.css"
import { useForm } from "react-hook-form"
function Form() {

    console.log("render")
    
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        alert(JSON.stringify(data));
    };
    console.log(errors);


    return (
        <div className="login-box">
            <h2>Login</h2>
            <form>
                <div className="user-box">
                    <input
                        type="text"
                        name="username"
                        className={errors?.name && "input-error"}
                        {...register("username", { required: true })}
                    >
                    </input>
                    {errors?.name?.type === 'required' && (
                        <p className='error-message'>o nome é obrigatório</p>
                    )}
                    <label>Username</label>
                </div>
                <div className="user-box">
                    <input
                        type="text"
                        name="email"
                        className={errors?.name && "input-error"}
                        {...register("email", { required: true })}
                    >
                    </input>
                    <label>Email</label>
                </div>
                <div className="user-box">
                    <input
                        type="password"
                        name="password"
                        className={errors?.name && "input-error"}
                        {...register("username", { required: true })}
                    >
                    </input>
                    <label>Password</label>
                </div>
                <button onClick={() => handleSubmit(onSubmit)()} className='signup'>Criar conta</button>
            </form>
        </div>
    )
}


export default Form