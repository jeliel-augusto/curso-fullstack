import { useCallback, useState } from "react";
import { Input } from "../../components/input/input";
import { Button } from "../../components/button";
import Link from "next/link";

const SignInPage = () => {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const onSubmit = useCallback(async () => {}, []);
  return (
    <div className="h-full flex-col flex justify-center items-center">
      <div className="flex flex-col  h-1/2 w-1/2 shadow-lg rounded-lg items-center bg-slate-200 justify-center">
        <img src="/images/logo.png" className="w-[60px] rounded-full"></img>

        <h1>Login Awesome Games FrontEnd</h1>

        <div className="px-9 w-full">
          <Input
            value={email}
            onChange={(text) => setEmail(text)}
            label="Email"
          />
        </div>

        <div className="px-9 w-full my-1">
          <Input
            value={password}
            onChange={(text) => setPassword(text)}
            label="Senha"
            type="password"
          />
        </div>
        <Button className="mt-5 w-[120px]">Entrar</Button>
        <Link href="/auth/sign-up">
          <span className="text-blue-400 my-3 pb-3 flex">
            Não possui conta? Clique aqui.
          </span>
        </Link>
      </div>
    </div>
  );
};
export default SignInPage;
