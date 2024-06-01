import {
  Card,
  CardBody,
  Divider,
  Image,
  Stack,
  Heading,
  Text,
} from "@chakra-ui/react";

interface IUser {
  name: string;
  email: string;
  imageFileName: string;
}
export default function UserCardForUserPlaces({user}:{user:IUser}) {
    if (!user) {
        // Handle the case where user is undefined, e.g. return null or a loading indicator
        return null;
      }
    
  let {  name, imageFileName, email } = user;
  let imageDestination =
    process.env.NEXT_PUBLIC_AWS_STORAGE === "true"
      ? `${process.env.NEXT_PUBLIC_URL_BACKEND}${imageFileName}`
      : `${process.env.NEXT_PUBLIC_API_URL}image/${imageFileName}`;
  return (
    <>
      <Card maxW="sm" className="mx-auto">
        <CardBody>
          <Image
            src={imageDestination}
            alt={name + "-image" || "user-image"}
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">{name}</Heading>
            <Text>{email}</Text>
          </Stack>
        </CardBody>
        {/* <Divider /> */}
      </Card>
    </>
  );
}
