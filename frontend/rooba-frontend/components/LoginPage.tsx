"use client";
import { NextPage } from "next";
import TextBox from "./TextBox";
import { useState } from "react";
import { User } from "@/Modals/UserModal";
import Button from "./Button";
import { newUser } from "@/Service/user.service";

interface Props {}

const LoginPage: NextPage<Props> = ({}) => {
  const [user, setUser] = useState<User>({
    name: "",
    age: 0,
    country: "",
    email: "",
    password: "",
  });

  const setUserForm = (key: string, value: string) => {
    setUser({
      ...user,
      [key]: value,
    });
  };

  const isUserValid = (): boolean => {
    let isValidUser = true
    Object.entries(user).forEach(([key, value]) => {
      if (!value) isValidUser =  false;
    });
    return isValidUser;
  };

  const submitUser = () => {
    if (isUserValid()) {
      console.log("user", user);
    }
    newUser(user).then(() => {
        console.log(user)
    });
  };

  return (
    <div className="m-auto w-1/3 mt-11 rounded shadow-md bg-slate-100 border p-4">
      <h2 className="text-xl"> New User </h2>
      <TextBox
        inputType="text"
        inputValue={user.name}
        onChangeFn={setUserForm}
        inputKey={"name"}
        inputPlaceholder={"name"}
      />
      <TextBox
        inputType="number"
        inputValue={user.age}
        onChangeFn={setUserForm}
        inputKey={"age"}
        inputPlaceholder={"age"}
      />
      <TextBox
        inputType="text"
        inputValue={user.email}
        onChangeFn={setUserForm}
        inputKey={"email"}
        inputPlaceholder={"email"}
      />
      <TextBox
        inputType="text"
        inputValue={user.country}
        onChangeFn={setUserForm}
        inputKey={"country"}
        inputPlaceholder={"country"}
      />
      <TextBox
        inputType="text"
        inputValue={user.password}
        onChangeFn={setUserForm}
        inputKey={"password"}
        inputPlaceholder={"password"}
      />
      <Button btnLabel="Submit" onSubmitFn={submitUser} />
    </div>
  );
};

export default LoginPage;
