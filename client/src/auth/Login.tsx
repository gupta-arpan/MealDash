import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Loader2, LockKeyhole, Mail } from "lucide-react";
import { ChangeEvent, FormEvent, useState } from "react";
import { Link } from "react-router-dom";

type LoginInputState = {
    email: string;
    password: string;
}
const Login = () => {
    const loading = false;
    const [input, setInput] = useState<LoginInputState>({
        email: "",
        password: "",
    })
    const onChangeEventListener = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value} = e.target;
        setInput({...input, [name]: value});
    }

    const loginSubmitHandler = (e:FormEvent) => {
        e.preventDefault();
        console.log(input);
    }
    return (
        <div className="flex items-center justify-center min-height-screen">
            <form onSubmit={loginSubmitHandler} className="md:p-8 w-full max-w-md rounded-lg md:border border-gray-200 mx-4">
                <div className="mb-4">
                    <h1 className="font-bold text-2xl">GuptaEats</h1>
                </div>
                <div className="mb-4">
                    <div className="relative">
                        <Input
                            type="email"
                            placeholder="Email"
                            name = "email"
                            value={input.email}
                            onChange={onChangeEventListener}
                            className="pl-10 focus-visible:ring-1"
                        />
                        <Mail className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none"></Mail>
                    </div>
                </div>
                <div className="mb-4">
                    <div className="relative">
                        <Input
                            type="password"
                            placeholder="Password"
                            name = "password"
                            value={input.password}
                            onChange={onChangeEventListener}
                            className="pl-10 focus-visible:ring-1"
                        />
                        <LockKeyhole className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none"></LockKeyhole>
                    </div>
                </div>
                <div className="mb-10">
                    {
                        loading ? <Button disabled className="bg-orange hover:bg-hoverOrange w-full"><Loader2 className="mr-2 h-4 w-4 animate-spin"></Loader2>Please wait...</Button> : (
                            <Button type="submit" className="bg-orange hover:bg-hoverOrange w-full">Login</Button>
                        )
                    }

                </div>
                <Separator></Separator>
                <p className="mt-2">
                    Don't have an account?{''}
                    <Link to='/signup' className="text-blue-500 ml-1">Signup</Link>
                </p>
            </form>
        </div>
    )
}
export default Login;