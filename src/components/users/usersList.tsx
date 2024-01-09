"use client";
import { Avatar, Box, Card, Flex, Text } from "@radix-ui/themes";
import Link from "next/link";

import { useState, useEffect } from "react";

export default function Users() {
  const [users, setUsers] = useState([]);

  
  return (
    <>
      {users.length !== 0 ? (
        users?.map((u) => {
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
