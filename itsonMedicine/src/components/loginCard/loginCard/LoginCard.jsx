import style from "./LoginCard.module.css";
const LoginCard = () => {
    return (
        <>
            <form className={style.form}>

                <div className={style.inputsLogin}>
                    <label htmlFor="">Email</label>
                    <input
                        email="email"
                        type="text"
                        name='emailInput'
                    />
                    <label htmlFor="">Contraseña</label>
                    <input
                        password="password"
                        type="password"
                        name='passwordInput'
                    />
                </div>
                <div className={style.btnsLogin}>
                    <input
                        type="submit"
                        name='LogIn'
                        value="Login"
                    />
                    <a href="/signup">Crear cuenta</a>
                </div>

            </form>
        </>
    )
}

export default LoginCard