"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import { Card, Button, Link, TextField, Label, InputGroup, Input } from "@heroui/react";

import { signUp } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { AiTwotoneAccountBook } from "react-icons/ai";
import { RiShieldKeyholeFill, RiShieldKeyholeLine } from "react-icons/ri";
import { FaPersonChalkboard } from "react-icons/fa6";
import { BsEye, BsEyeSlash } from "react-icons/bs";

export default function SignupPage() {
    const router = useRouter();

    // Explicitly typed state variables
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [image, setImage] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");

    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const [error, setError] = useState<string>("");
    const [success, setSuccess] = useState<string>("");

    const toggleVisibility = () => setIsVisible(!isVisible);

    const handleSignup = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setError("");
        setSuccess("");

        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        if (password.length < 6) {
            setError("Password must be at least 6 characters.");
            return;
        }

        setIsLoading(true);

        try {
            const { data, error: authError } = await signUp.email({
                email,
                password,
                name,
                image,
                callbackURL: "/auth/signIn",
            });
            
            console.log(data);

            if (authError) {
                setError(authError.message || "Signup failed.");
                return;
            }

            setSuccess("Account created successfully!");
            
            // Clear form state
            setName("");
            setEmail("");
            setPassword("");
            setConfirmPassword("");
            setImage("");

            // Safely route the user in a client component
            router.push('/auth/signIn');
            
        } catch (err) {
            console.error(err);
            setError("An unexpected error occurred.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-zinc-950 px-4 py-10">
            <Card className="w-full max-w-md p-6 shadow-sm border border-zinc-200 dark:border-zinc-800">

                {/* Header */}
                <div className="flex flex-col items-center justify-center gap-1 pb-6 border-b border-zinc-100 dark:border-zinc-800 mb-6 text-center">
                    <h1 className="text-2xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
                        Join LawHire
                    </h1>

                    <p className="text-sm text-zinc-600 dark:text-zinc-400">
                        Create an account to get started
                    </p>
                </div>

                <form onSubmit={handleSignup} className="flex flex-col gap-5">

                    {/* Name */}
                    <TextField isRequired>
                        <Label className="text-sm font-medium">
                            Full Name
                        </Label>

                        <InputGroup className="flex items-center gap-2 border border-zinc-200 dark:border-zinc-800 rounded-xl px-3 bg-zinc-50 dark:bg-zinc-900">
                            <FaPersonChalkboard size={16} className="text-zinc-400" />

                            <Input
                                placeholder="Enter your full name"
                                value={name}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                                className="w-full bg-transparent py-2 border-none outline-none"
                            />
                        </InputGroup>
                    </TextField>

                    {/* Image URL */}
                    <TextField>
                        <Label className="text-sm font-medium">
                            Image URL
                        </Label>

                        <InputGroup className="flex items-center gap-2 border border-zinc-200 dark:border-zinc-800 rounded-xl px-3 bg-zinc-50 dark:bg-zinc-900">
                            <Input
                                placeholder="Enter image URL"
                                value={image}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => setImage(e.target.value)}
                                className="w-full bg-transparent py-2 border-none outline-none"
                            />
                        </InputGroup>
                    </TextField>

                    {/* Email */}
                    <TextField isRequired>
                        <Label className="text-sm font-medium">
                            Email Address
                        </Label>

                        <InputGroup className="flex items-center gap-2 border border-zinc-200 dark:border-zinc-800 rounded-xl px-3 bg-zinc-50 dark:bg-zinc-900">
                            <AiTwotoneAccountBook size={16} className="text-zinc-400" />

                            <Input
                                type="email"
                                placeholder="you@example.com"
                                value={email}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                                className="w-full bg-transparent py-2 border-none outline-none"
                            />
                        </InputGroup>
                    </TextField>

                    {/* Password */}
                    <TextField isRequired>
                        <Label className="text-sm font-medium">
                            Password
                        </Label>

                        <InputGroup className="flex items-center gap-2 border border-zinc-200 dark:border-zinc-800 rounded-xl px-3 bg-zinc-50 dark:bg-zinc-900">
                            <RiShieldKeyholeFill
                                size={16}
                                className="text-zinc-400"
                            />

                            <Input
                                type={isVisible ? "text" : "password"}
                                placeholder="Enter password"
                                value={password}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                                className="w-full bg-transparent py-2 border-none outline-none"
                            />

                            <button
                                type="button"
                                onClick={toggleVisibility}
                                className="text-zinc-400 hover:text-zinc-600"
                            >
                                {isVisible ? (
                                    <BsEyeSlash size={18} />
                                ) : (
                                    <BsEye size={18} />
                                )}
                            </button>
                        </InputGroup>
                    </TextField>

                    {/* Confirm Password */}
                    <TextField isRequired>
                        <Label className="text-sm font-medium">
                            Confirm Password
                        </Label>

                        <InputGroup className="flex items-center gap-2 border border-zinc-200 dark:border-zinc-800 rounded-xl px-3 bg-zinc-50 dark:bg-zinc-900">
                            <RiShieldKeyholeLine
                                size={16}
                                className="text-zinc-400"
                            />

                            <Input
                                type={isVisible ? "text" : "password"}
                                placeholder="Confirm password"
                                value={confirmPassword}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => setConfirmPassword(e.target.value)}
                                className="w-full bg-transparent py-2 border-none outline-none"
                            />
                        </InputGroup>
                    </TextField>

                    {/* Error Handling */}
                    {error && (
                        <div className="p-3 rounded-xl text-sm bg-red-100 text-red-700 border border-red-200">
                            {error}
                        </div>
                    )}

                    {/* Success Message */}
                    {success && (
                        <div className="p-3 rounded-xl text-sm bg-green-100 text-green-700 border border-green-200">
                            {success}
                        </div>
                    )}

                    {/* Submit - FIXED: Removed isLoading prop, added conditional text, switched to standard 'disabled' prop */}
                    <Button
                        type="submit"
                        className="w-full h-12 font-semibold shadow-sm rounded-xl bg-zinc-900 hover:bg-zinc-800 text-gray-500 dark:bg-zinc-50 dark:hover:bg-zinc-200 dark:text-zinc-900 transition-all duration-200 mt-2"
                        // disabled={isLoading}
                    >
                        {isLoading ? "Creating Account..." : "Create Account"}
                    </Button>

                    {/* Footer */}
                    <div className="text-center pt-4 border-t border-zinc-100 dark:border-zinc-800 text-sm text-zinc-600 dark:text-zinc-400">
                        Already have an account?{" "}
                        <Link
                            href="/auth/signIn"
                            className="font-medium text-blue-600"
                        >
                            Sign In
                        </Link>
                    </div>
                </form>
            </Card>
        </div>
    );
}