import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { LoginInputState, userLoginSchema } from "@/schema/userSchema";
import { useUserStore } from "@/store/useUserStore";
import { Loader2, LockKeyhole, Mail } from "lucide-react";
import { ChangeEvent, FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const [input, setInput] = useState<LoginInputState>({
        email: "",
        password: "",
    })
    const [errors, setErrors] = useState<Partial<LoginInputState>>({});
    const { loading, login } = useUserStore();
    const navigate = useNavigate();
    const onChangeEventListener = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setInput({ ...input, [name]: value });
    }

    const loginSubmitHandler = async (e: FormEvent) => {
        e.preventDefault();
        //form validation:
        const result = userLoginSchema.safeParse(input);
        if (!result.success) {
            const fieldErrors = result.error.formErrors.fieldErrors;
            setErrors(fieldErrors as Partial<LoginInputState>);
            return;
        }
        else {
            setErrors({});
        }

        //api implementation for login
        try {
            await login(input);
            navigate("/");
        } catch (error) {
            console.log(error);
        }
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
                            name="email"
                            value={input.email}
                            onChange={onChangeEventListener}
                            className="pl-10 focus-visible:ring-1"
                        />
                        <Mail className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none"></Mail>
                        {errors && <span className="text-sm text-red-500">{errors.email}</span>}
                    </div>
                </div>
                <div className="mb-4">
                    <div className="relative">
                        <Input
                            type="password"
                            placeholder="Password"
                            name="password"
                            value={input.password}
                            onChange={onChangeEventListener}
                            className="pl-10 focus-visible:ring-1"
                        />
                        <LockKeyhole className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none"></LockKeyhole>
                        {errors && errors.password && <span className="text-sm text-red-500">{errors.password}</span>}
                    </div>
                </div>
                <div className="mb-10">
                    {
                        loading ? <Button disabled className="bg-orange hover:bg-hoverOrange w-full"><Loader2 className="mr-2 h-4 w-4 animate-spin"></Loader2>Please wait...</Button> : (
                            <Button type="submit" className="bg-orange hover:bg-hoverOrange w-full">Login</Button>
                        )
                    }

                </div>
                <div className="mt-4">
                    <Link
                        to="/forgot-password"
                        className="hover:text-blue-500 hover:underline"
                    >
                        Forgot Password
                    </Link>
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