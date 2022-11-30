const SignupCard = () => {
    return (
        <>
            <form >
                <div className="inputsSignup">
                    <input
                        user="user"
                        type="text"
                        name='userInput'
                        placeholder="Usuario"
                    />
                    <input
                        email="email"
                        type="text"
                        name='emailInput'
                        placeholder="Email"
                    />
                    <input
                        password="password"
                        type="password"
                        name='passwordInput'
                        placeholder="Contraseña"
                    />
                </div>
                <div className="btnsSignup">
                    <input
                        type="submit"
                        name='Signup'
                        value="Signup"
                    />
                    <a href="/">Iniciar Sesión</a>
                </div>
            </form>
        </>
    )
}

export default SignupCard