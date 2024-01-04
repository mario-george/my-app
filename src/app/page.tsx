import Users from "@/components/users/usersList";
import Image from "next/image";

export default function Home() {
  return <main className=" mx-auto w-1/2 grid grid-cols-2 container">
    <Users/>
  </main>;
}
