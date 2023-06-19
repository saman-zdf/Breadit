"use client";
import { FC, useState } from "react";
import { Button } from "./ui/Button";
import { cn } from "@/lib/utils";
import { signIn } from "next-auth/react";
import { Icons } from "./Icons";
import { useToast } from "../hooks/use-toast";
import { AlertCircle } from "lucide-react";

// If the interface for component extends from React.HTMLAttributes<HTMLDivElement>, wherever the component being rendered could be treated as div component and we can access all the attributes of the element, in this case in 'div';
interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

const UserAuthForm: FC<UserAuthFormProps> = ({ className, ...props }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { toast } = useToast();

  const logInWithGoogle = async () => {
    setIsLoading(true);
    try {
      await signIn("google");
    } catch (error) {
      // Toast notification
      toast({
        title: `There was a problem`,
        description: "There was an error login with Google, try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={cn(`flex justify-center `, className)} {...props}>
      <Button
        onClick={logInWithGoogle}
        isLoading={isLoading}
        size='sm'
        className='w-full'
      >
        {!isLoading ? <Icons.google className='h-6 w-6 pr-2' /> : null}
        Google
      </Button>
    </div>
  );
};

export default UserAuthForm;
