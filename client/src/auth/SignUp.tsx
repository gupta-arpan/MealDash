import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Contact2, Loader2, LockKeyhole, Mail, User } from "lucide-react";
import { ChangeEvent, FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SignupInputState, userSigupSchema } from "@/schema/userSchema";
import { useUserStore } from "@/store/useUserStore";

const SignUp = () => {
    const [input, setInput] = useState<SignupInputState>({
        fullname: "",
        contact: "",
        email: "",
        password: "",
    })
    const [errors, setErrors] = useState<Partial<SignupInputState>>({})
    const { signup, loading } = useUserStore();
    const navigate = useNavigate();
    const onChangeEventListener = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setInput({ ...input, [name]: value });
    }

    const SignUpSubmitHandler = async (e: FormEvent) => {
        e.preventDefault();
        //form validation:
        const result = userSigupSchema.safeParse(input);
        if (!result.success) {
            const fieldErrors = result.error.formErrors.fieldErrors;
            setErrors(fieldErrors as Partial<SignupInputState>);
            return;
        }
        else {
            setErrors({});
        }

        //api implementation for login
        try {
            await signup(input);
            navigate("/verify-email");
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className="flex items-center justify-center min-height-screen">
            <form onSubmit={SignUpSubmitHandler} className="md:p-8 w-full max-w-md rounded-lg md:border border-gray-200 mx-4">
                <div className="mb-4">
                    <h1 className="font-bold text-2xl">GuptaEats</h1>
                </div>
                <div className="mb-4">
                    <div className="relative">
                        <Input
                            type="text"
                            placeholder="Full Name"
                            name="fullname"
                            value={input.fullname}
                            onChange={onChangeEventListener}
                            className="pl-10 focus-visible:ring-1"
                        />
                        <User className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none"></User>
                        {errors && errors.fullname && <span className="text-sm text-red-500">{errors.fullname}</span>}
                    </div>
                </div>
                <div className="mb-4">
                    <div className="relative">
                        <Input
                            type="text"
                            placeholder="Contact"
                            name="contact"
                            value={input.contact}
                            onChange={onChangeEventListener}
                            className="pl-10 focus-visible:ring-1"
                        />
                        <Contact2 className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none"></Contact2>
                        {errors && errors.contact && <span className="text-sm text-red-500">{errors.contact}</span>}
                    </div>
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
                        {errors && errors.email && <span className="text-sm text-red-500">{errors.email}</span>}
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
                            <Button type="submit" className="bg-orange hover:bg-hoverOrange w-full">SignUp</Button>
                        )
                    }

                </div>
                <Separator></Separator>
                <p className="mt-2">
                    Already have an account?{''}
                    <Link to='/login' className="text-blue-500 ml-1">Login</Link>
                </p>
            </form>
        </div>
    )
}
export default SignUp;