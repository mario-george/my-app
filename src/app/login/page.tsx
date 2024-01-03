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
     
        </Card>
      </div>
    );
  }
  