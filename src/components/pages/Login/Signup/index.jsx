import React from "react";
import css from "./style.module.css";
import Image from "next/image";
import shortlogo from "@/static/icons/Logoshort.svg";
const Signup = () => {
  return (
    <>
      <section className={css.signup}>
        <div className={"container"}>
          <Image className={css.logo} src={shortlogo}></Image>
          <div className={css.global__inner}>
            <h1 className={css.title}>Sign up</h1>
            <div className={css.subtitle__inner}>
              <h6 className={css.subtitle1}>Don't have an account?</h6>
              <h6 className={css.subtitle2}>Log in</h6>
            </div>
            <form className={css.form}>
              <label htmlFor="name" className={css.input__descr}>
                Full name
              </label>
              <input
                id="name"
                type="text"
                className={css.input}
                placeholder="Your name"
              />

              <label htmlFor="email" className={css.input__descr}>
                Email address
              </label>
              <input
                id="email"
                type="text"
                className={css.input}
                placeholder="Your email"
              />

              <label htmlFor="password" className={css.input__descr}>
                Password
              </label>
              <input
                id="password"
                type="password"
                className={css.input}
                placeholder="Your password"
              />
              <div className={css.forget__inner}>
                <div className={css.inner1}>
                  <input type="checkbox" className={css.input__checkbox} />
                  <p className={css.checkboxDescr}>Remember me</p>
                </div>
                <p className={css.forget}>Forget Password?</p>
              </div>
              <button type="submit" className={css.submit}>Sign up</button>
            </form>
            <button className={css.sign__google}>Sign up with google</button>
            <p className={css.copyright}>Copyright © 2022 Delizioso</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
