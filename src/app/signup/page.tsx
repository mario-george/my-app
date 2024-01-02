import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@/components/shared/material-tailwind";

export default function HomePage() {
  return (
    <div className="w-full mx-auto">
      <Card placeholder="" color="transparent" shadow={false}>
        <Typography placeholder="" variant="h4" color="blue-gray">
          Sign Up
        </Typography>
        <Typography placeholder="" color="gray" className="mt-1 font-normal">
          Enter your details to sign up.
        </Typography>
     
      </Card>
    </div>
  );
}
