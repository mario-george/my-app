"use client";
import { Avatar, Box, Card, Flex, Text } from "@radix-ui/themes";
import Link from "next/link";

import { useState, useEffect } from "react";
interface User{
  id:string,
  places:Array,
  name:string,
  image:string,
}
export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch data from external API
    fetch(`${process.env.NEXT_PUBLIC_API_URL}users`)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.allUsers);
        console.log(typeof data.allUsers[0]._id);
        console.log(typeof data.allUsers[0].id);
      });
  }, []);

  return (
    <>
      {users.length !== 0 ? (
        users?.map((u:User) => {
          return (
            
            <Card style={{ maxWidth: 240 }} className="my-2">
                <Link href={`${u.id}/places`}>


              <Flex gap="3" align="center">
                <Avatar
                  size="3"
                  src={`http://localhost:3003/${u.image}`}
                  radius="full"
                  fallback="M"
                />
                <Box>
                  <Text as="div" size="2" weight="bold">
                    {u.name}{" "}
                  </Text>
                  <Text as="div" size="2" color="gray">
                    {u.places.length}{" "}
                  </Text>
                </Box>
              </Flex>
            </Link>
            </Card>
          );
        })
      ) : (
        <>Loading</>
      )}
    </>
  );
}
