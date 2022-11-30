import { SignupCard } from "../../components/index";
import style from "./SignupPage.module.css";
const SignupPage = () => {
  return (
    <>
      <div className={style.main}>
        <div className={style.container}>
          <h1>CREAR CUENTA</h1>
          <div>
            <SignupCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupPage;
