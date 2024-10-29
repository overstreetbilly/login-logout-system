import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { SigninValidation } from "@/lib/validation";
import { Link } from "react-router-dom";
import { z } from "zod";
import Loader from "@/components/shared/Loader";
import { loginUser } from "@/lib/appwrite/api";

const SigninForm = () => {
    const isLoading = false;
    // Define form
    const form = useForm<z.infer<typeof SigninValidation>>({
        resolver: zodResolver(SigninValidation),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    // Define submit handler
    async function onSubmit(values: z.infer<typeof SigninValidation>) {
        const session = await loginUser(values.email, values.password);
        console.log(session);
    }
    return (
        <Form {...form}>
            <div className='sm:w-420 flex-center flex-col'>
                <img src='https://placehold.co/150x150' alt='logo' />
                <h2 className='h3-bold md:h2-bold pt-5 sm:pt-12'>
                    Sign in to your account
                </h2>
                <p className='text-light-3 small-medium md:base-regular mt-2'>
                    Enter your account details
                </p>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className='flex flex-col gap-5 w-full mt-4'
                >
                    <FormField
                        control={form.control}
                        name='email'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email Address</FormLabel>
                                <FormControl>
                                    <Input
                                        type='text'
                                        className='shad-input'
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name='password'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input
                                        type='password'
                                        className='shad-input'
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type='submit' className='shad-button_primary'>
                        {isLoading ? (
                            <div className='flex-center gap-2'>
                                <Loader /> Loading...
                            </div>
                        ) : (
                            "Sign In"
                        )}
                    </Button>
                    <p className='text-small-regular text-light-2 text-center mt-2'>
                        Dont have an account?
                        <Link
                            to='/sign-up'
                            className='text-primary-500 text-small-semibold ml-1'
                        >
                            Sign up.
                        </Link>
                    </p>
                </form>
            </div>
        </Form>
    );
};

export default SigninForm;
