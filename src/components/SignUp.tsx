import Link from "next/link";
import { Icons } from "./Icons";
import UserAuthForm from "./UserAuthForm";

// This is component is sever component and we cannot have any interactivity in, like having a button with onClick.

const SignUp = () => {
  return (
    <div className='container mx-auto flex w-full flex-col justify-center space-y sm:w-[400px]'>
      <div className='flex flex-col space-y-2 text-center'>
        <Icons.logo className='mx-auto h-6 w-6' />
        <h1 className='text-2xl font-semibold tracking-tight'>Register!</h1>
        <p className='text-sm max-w-xs mx-auto'>
          By continuing, your setting up a Breadit account and agree to our User
          Agreement and Privacy Policy.
        </p>

        <UserAuthForm />
        <p className='px-8 text-center text-small text-zinc-700'>
          Already a Breaditor?{" "}
          <Link
            href='/sign-in'
            className='hover:text-zinc-800 text-sm underline underline-offset-4'
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
