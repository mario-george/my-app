import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
  } from "@/components/shared/material-tailwind";
  
  export default function LoginPage() {
    return (
      <div className="w-full mx-auto flex justify-center my-[1.5rem]">
        <Card placeholder="" color="transparent" shadow={false}>
          <Typography placeholder="" variant="h4" color="blue-gray">
            Login
          </Typography>
          <Typography placeholder="" color="gray" className="mt-1 font-normal">
            Enter your details to sign in.
          </Typography>
          <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
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
                crossOrigin=""
                size="lg"
                placeholder="name@mail.com"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />

            </div>
           
          
          </form>
        </Card>
      </div>
    );
  }
  