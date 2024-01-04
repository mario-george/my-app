import { Avatar, Box, Card, Flex,Text } from "@radix-ui/themes";


export default function Users() {
  async function getUsers() {
    const res = await fetch(`${process.env.API_URL}users/signup`);
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  }

interface user{
    name:string,
    image:string,
    places:number,
}

  let users: user[] = [{},{},{}];
  return (
    <>
      {users.map((u:user) => {
        return <Card style={{ maxWidth: 240 }} className="my-2">
        <Flex gap="3" align="center">
          <Avatar
            size="3"
            src={u.image||'/images/defaultImage.svg' }
            radius="full"
            fallback="M"
          />
          <Box>
            <Text as="div" size="2" weight="bold">
              Mario George
            </Text>
            <Text as="div" size="2" color="gray">
              Engineering
            </Text>
          </Box>
        </Flex>
      </Card>;
      })}
    </>
  );
}
