"use client";
import { Button } from "@nextui-org/react";
import useSignInForm from "@/components/hooks/useSignInForm";
import {
  Card,
  Input,
  Checkbox,
  
  Typography,
} from "@/components/shared/material-tailwind";
import Link from "next/link";
export default function LoginPage() {
  const { formState, errors, handleChange, handleSubmit,isLoading } = useSignInForm();

  return (
    <div className="w-full mx-auto flex justify-center my-[1.5rem]">
      <Card placeholder="" color="transparent" shadow={false}>
        <Typography placeholder="" variant="h4" color="blue-gray">
          Login
        </Typography>
        <Typography placeholder="" color="gray" className="mt-1 font-normal">
          Enter your details to sign in.
        </Typography>
        <form
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
          onSubmit={handleSubmit}
        >
          <div className="mb-1 flex flex-col gap-6">
            <Typography
              placeholder="email"
              variant="h6"
              color="blue-gray"
              className="-mb-3"
            >
              Email
            </Typography>
            <Input
              name="email"
              value={formState.email}
              onChange={handleChange}
              crossOrigin=""
              size="lg"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            {errors.email && (
              <Typography className="text-red-500" placeholder="">
                {errors.email}
              </Typography>
            )}
            <Typography
              placeholder="password"
              variant="h6"
              color="blue-gray"
              className="-mb-3"
            >
              Password
            </Typography>
            <Input
              name="password"
              value={formState.password}
              onChange={handleChange}
              crossOrigin=""
              type="password"
              size="lg"
              placeholder="********"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />{" "}
            {errors.password && (
              <Typography className="text-red-500" placeholder="">
                {errors.password}
              </Typography>
            )}
          </div>

          <Button
            className="mt-6 !capitalize !bg-blue-500"
            fullWidth
            type="submit" isLoading={isLoading}
          >
            Login
          </Button>
          {errors.back && (
            <Typography className="text-red-500 my-4 text-center" placeholder="">
              {errors.back}
            </Typography>
          )}
          <Typography
            placeholder=""
            color="gray"
            className="mt-4 text-center font-normal"
          >
            Don't have have an account?{" "}
            <Link href="/signup" className="font-medium text-gray-900">
              Sign Up
            </Link>
          </Typography>
        </form>
      </Card>
    </div>
  );
}
