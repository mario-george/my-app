import { FormEvent, useState } from "react";
import useHttp from "./useHttp";
import { useSelector } from "react-redux";



export default function usePlaceHandler(placeID:string) {
 

  const validateForm = () => {
    
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
   

  };
const handleDeletePlace=()=>{
}
  const handleUpdate = async (event: FormEvent) => {
    
  };

  return {  handleChange, handleUpdate ,handleDeletePlace};
}
