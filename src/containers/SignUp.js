import { useState } from "react";
import { useAuth } from "../components/auth";
import Input from "../components/Input";

const inputClass = "w-full px-16 py-4";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passworConfirmation, setPasswordConfirmation] = useState("");

  const auth = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    auth.signUpUser({email, password, passworConfirmation})
  };

  return (
    <div className="bg-white sm:w-1/2 lg:w-1/3 py-16 my-14 content-center rounded">
      <div className="py-8 font-bold text-2xl text-center w-full">Sign Up</div>
      <form onSubmit={handleSubmit} >
        <div className="flex flex-col">
          <Input label="Email" type="text" name="email" clazz={inputClass} required={true} value={email} setValue={setEmail}/>
          <Input label="Password" type="password" name="password" clazz={inputClass} required={true} value={password} setValue={setPassword}/>
          <Input label="Password Confirmation" type="password" name="password_confirmation" clazz={inputClass} required={true} value={passworConfirmation} setValue={setPasswordConfirmation}/>
          <div className="flex flex-col items-center px-4 py-8">
            <button className="text-center p-2 w-1/4 bg-blue-600 hover:bg-blue-800 text-white rounded" type="submit">Sign up</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
