import { LoginCard } from "../../components/index";
import style from "./LoginPage.module.css"
const LoginPage = () => {
    return (
        <>
            <div className={style.main}>
                <div className={style.container}>
                    <h1>INICIAR SESION</h1>

                    <div>
                        <LoginCard />
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginPage