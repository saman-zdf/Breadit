"use client";
import { useRouter } from "next/navigation";

import { Button } from "./ui/Button";
import { X } from "lucide-react";

const CloseModal = ({}) => {
  const router = useRouter();
  return (
    <Button
      aria-label='close app'
      variant='subtle'
      className='h-6 w-6 p-0 rounded-md'
      onClick={() => router.back()}
    >
      <X className='h-4 w-4' />
    </Button>
  );
};

export default CloseModal;
