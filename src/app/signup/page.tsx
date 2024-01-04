"use client";
import Link from "next/link";


import useSignUpForm from "@/components/hooks/useSignUpForm";

import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@/components/shared/material-tailwind";

export default function SignUpPage() {
  const { formState, errors, handleChange, handleSubmit } = useSignUpForm();

  return (
    <div className="w-full mx-auto flex justify-center my-[1.5rem]">
      <Card placeholder="" color="transparent" shadow={false}>
        <Typography placeholder="" variant="h4" color="blue-gray">
          Sign Up
        </Typography>
        <Typography placeholder="" color="gray" className="mt-1 font-normal">
          Enter your details to sign up.
        </Typography>
        <form
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
          onSubmit={handleSubmit}
        >
          <div className="mb-1 flex flex-col gap-6">
            <div color="blue-gray" className="-mb-3">
              Name
            </div>
            <Input
              crossOrigin=""
              name="name"
              value={formState.name}
              onChange={handleChange}
              size="lg"
              placeholder="name"
              className={`!border-t-blue-gray-200 focus:!border-t-gray-900 ${
                errors.name ? "!border-red-500 !border-t-red-500" : ""
              }`}
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            {errors.name && (
              <Typography className="text-red-500" placeholder="">
                {errors.name}
              </Typography>
            )}

            <Typography
              placeholder="email"
              variant="h6"
              color="blue-gray"
              className="-mb-3"
            >
              Email
            </Typography>
            <Input
              value={formState.email}
              name="email"
              onChange={handleChange}
              crossOrigin=""
              size="lg"
              placeholder="name@mail.com"
              className={`!border-t-blue-gray-200 focus:!border-t-gray-900 ${
                errors.email ? "!border-red-500 !border-t-red-500" : ""
              }`}
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
              crossOrigin=""
              type="password"
              name="password"
              value={formState.password}
              onChange={handleChange}
              size="lg"
              placeholder="******"
              className={`!border-t-blue-gray-200 focus:!border-t-gray-900 ${
                errors.password ? "!border-red-500 !border-t-red-500" : ""
              }`}
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            {errors.password && (
              <Typography className="text-red-500" placeholder="">
                {errors.password}
              </Typography>
            )}
          </div>
          <Checkbox
            crossOrigin=""
            label={
              <Typography
                placeholder=""
                variant="small"
                color="gray"
                className="flex items-center font-normal"
              >
                I agree the
                <span className="font-medium transition-colors hover:text-gray-900">
                  &nbsp;Terms and Conditions
                </span>
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
          />
          <Button
            placeholder={``}
            className="mt-6 !capitalize !bg-blue-200"
            fullWidth
            type="submit"
          >
            sign up
          </Button>
          <Typography
            placeholder=""
            color="gray"
            className="mt-4 text-center font-normal"
          >
            Already have an account?{" "}
            <Link href="/login" className="font-medium text-gray-900">
              Login
            </Link>
          </Typography>
        </form>
      </Card>
    </div>
  );
}
