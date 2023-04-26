import React from "react";
import style from "./Login.module.css";
import { TextField } from "@mui/material";
import { TiSocialTwitter } from "react-icons/ti";
import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className={style.bg}>
    <div className={style.logobox}>
      <TiSocialTwitter className={style.logoT} />
      <h2>Sign In to Twitter</h2>

      <button>
        <FcGoogle className={style.logo} />
        Sign in with Google
      </button>
      <button>
        <BsApple className={style.logo} />
        Sign in with Google
      </button>

      <hr></hr>
      <span>Or</span>

      <form>
        <div className={ style.userfield}>
        
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            className={style.inputfield}
          />
        </div>

        <div className={style.userfield}>
          <TextField 
            id="outlined-basic" 
            label="password" 
            variant="outlined" 
            className={style.inputfield}
            />
        </div>
        <button>Log in</button>
      </form>

      <button>Forget Password</button>
      <p>
        Don't have an account? <Link to='/signup'>Sign up</Link>
      </p>
    </div>
    </div>
  );
};

export default Login;
