"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import { getProviders, signIn, useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

const Login = ({ url }) => {
  const session = useSession();
  const router = useRouter();
  const params = useSearchParams();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    setError(params.get("error"));
    setSuccess(params.get("success"));
  }, [params]);

  if (session.status === "loading") {
    return <p className="mx-24 max-w-full">Loading...</p>;
  }

  if (session.status === "authenticated") {
    router?.push("/dashboard");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    signIn("credentials", {
      email,
      password,
    });
  };

  return (
    <div className="mx-24 max-w-full mt-20  flex flex-col gap-[20px]">
      <h1 className={styles.title}>{success ? success : "Welcome Back"}</h1>
      <h2 className={styles.subtitle}>Please sign in to see the dashboard.</h2>

      <form
        onSubmit={handleSubmit}
        className="w-[500px] flex flex-col gap-[20px]"
      >
        <input
          type="text"
          placeholder="Email"
          required
          className={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          required
          className={styles.input}
        />
        <div className=" flex flex-col gap-5 w-[500px] items-start">
          <button className={styles.button}>Login</button>
          {error && error}
        </div>
      </form>
      <div className=" flex flex-col gap-5 w-[500px] items-start">
        <button
          onClick={() => {
            signIn("google");
          }}
          className={styles.button + " " + styles.google}
        >
          Login with Google
        </button>
      </div>

      <span className={styles.or}>- OR -</span>
      <Link className={styles.link} href="/dashboard/signup">
        Create new account
      </Link>
      {/* <button
        onClick={() => {
          signIn("github");
        }}
        className={styles.button + " " + styles.github}
      >
        Login with Github
      </button> */}
    </div>
  );
};

export default Login;
