import style from "./SignupCard.module.css";
import IMG_logo from "/img/logoItson.svg";
const SignupCard = () => {
  return (
    <>
      <img className={style.logo} src={IMG_logo} alt="itsonLogo" />
      <form className={style.form}>
        <div className={style.centerContent}>
          <div className={style.inputsSignup}>
            <div className={style.form__input}>
              <label htmlFor="">Usuario</label>
              <input user="user" type="text" name="passwordInput" />
            </div>
            <div className={style.form__input}>
              <label htmlFor="">Email</label>
              <input email="email" type="text" name="emailInput" />
            </div>
            <div className={style.form__input}>
              <label htmlFor="">Password</label>
              <input password="password" type="password" name="passwordInput" />
            </div>
          </div>
          <div className={style.btnsSignup}>
            <button>Crear Cuenta</button>
            <a href="/">Iniciar Sesión</a>
          </div>
        </div>
      </form>
    </>
  );
};

export default SignupCard;
