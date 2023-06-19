/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import axios from "axios";
import { CreateSubredditPayload } from "@/lib/validators/subreddit";
import { create } from "domain";

const page = () => {
  const [input, setInput] = useState<string>("");

  const router = useRouter();

  const { mutate: createCommunity, isLoading } = useMutation({
    mutationFn: async () => {
      const payload: CreateSubredditPayload = {
        name: input,
      };

      const { data } = await axios.post("/api/subreddit", payload);
      return data as string;
    },
  });
  const test = useMutation({
    mutationFn: async () => {
      const payload: CreateSubredditPayload = {
        name: input,
      };

      const { data } = await axios.post("/api/subreddit", payload);
      return data as string;
    },
  });
  console.log(test);

  return (
    <div className='container flex items-center max-w3xl mx-auto'>
      <div className='relative bg-white  w-full h-fit p-4 rounded-lg space-y-6'>
        <div className='flex justify-between items-center'>
          <h1 className='text-xl font-semibold'>Create a community</h1>
        </div>

        <hr className='fb-zinc-500 h-px' />

        <div className=''>
          <p className='text-large font-medium'></p>
          <p className='text-xs pb-2'>
            Community name including capitalization cannot be changed.
          </p>

          <div className='relative'>
            <p className='absolute text-sm left-0 w-8 inset-y-0 grid place-items-center text-zinc-400'>
              /r
            </p>
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className='pl-6'
            />
          </div>
        </div>

        <div className='flex justify-end gap-4'>
          <Button variant={"subtle"} onClick={() => router.back()}>
            Cancel{" "}
          </Button>
          <Button
            variant={"subtle"}
            onClick={() => createCommunity()}
            isLoading={isLoading}
            disabled={input.length === 0}
          >
            Create Community
          </Button>
        </div>
      </div>
    </div>
  );
};

export default page;
