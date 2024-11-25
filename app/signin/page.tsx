"use client"
import { signIn } from '@/auth'
import { SignInForm } from '@/components/signin-form'
import { Button } from '@/components/ui/button'

export default function SignInPage() {
    return (
        <div className="container flex h-screen w-screen flex-col items-center justify-center">
            <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                <div className="flex flex-col space-y-2 text-center">
                    <h1 className="text-2xl font-semibold tracking-tight">Welcome back</h1>
                    <p className="text-sm text-muted-foreground">
                        Enter your email to sign in to your account
                    </p>
                </div>
                <SignInForm />
                <Button
                    onClick={() => signIn("google")}
                    variant="outline"
                    className="w-full"
                >
                    Sign in with Google
                </Button>
            </div>
        </div>
    )
}

