import { useToast } from "@chakra-ui/react";

 const useToastHandler = () => {

    const toast = useToast();
    
    const toastHandler: (
        type: "success" | "warning" | "error",
        message?: string
      ) => void = (type, message) => {
        if (type == "success") {
          toast({
            title: "Place added.",
            description: "Place has been added successfully.",
            status: "success",
            duration: 9000,
            isClosable: true,
          });
        } else if (type == "warning") {
          toast({
            title: "Address invalid.",
            description: "Please change the address and try again.",
            status: "warning",
            duration: 9000,
            isClosable: true,
          });
        } else {
          toast({
            title: "Error.",
            description: message,
            status: "error",
            duration: 9000,
            isClosable: true,
          });
        }
      };
      let toastCallBack = (message: string) => {
        console.log("message", message);
        if (message == "Invalid Address, Enter a valid address.") {
          toastHandler("warning");
        }else if(message=="success"){
            toastHandler("success");
            
        } else {
          toastHandler("error", message);
        }
      };
      return { toastCallBack}
}
export default useToastHandler;