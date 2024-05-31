import { useToast } from "@chakra-ui/react";

 const useToastHandler = () => {

    const toast = useToast();
    
    const toastHandler: (
        type: "place-added" | "warning" | "error"|"custom-success",
        message?: string,description?:string
      ) => void = (type, message,description) => {
        if (type == "place-added") {
          toast({
            title: "Place added.",
            description: "Place has been added successfully.",
            status: "success",
            duration: 9000,
            isClosable: true,
            position:"bottom-right"
          });
        } else if (type == "warning") {
          toast({
            title: "Address invalid.",
            description: "Please change the address and try again.",
            status: "warning",
            duration: 9000,
            isClosable: true,
            position:"bottom-right"

          });
        } else if (type == "custom-success" && message&&description) {
            let position=message.includes('Edited') ?"bottom-center":"bottom-right"
            toast({
              title:message,
              description,
              status: "success",
              duration: 9000,
              isClosable: true,
              position
  
            });
          }else {
          toast({
            title: "Error.",
            description: message,
            status: "error",
            duration: 9000,
            isClosable: true,
            position:"bottom-right"
        });
        }
      };
      let toastCallBack = (message: string) => {
        console.log("message", message);
        if (message == "Invalid Address, Enter a valid address.") {
          toastHandler("warning");
        }else if(message=="place-added"){
            toastHandler("place-added");
            
        } else if(message=="place-deleted"){
            toastHandler("custom-success","Place Deleted.","Place has been deleted successfully.");
            
        }else if(message=="place-edited"){
            toastHandler("custom-success","Place Edited.","Place has been edited successfully.");

            
        }else {
          toastHandler("error", message);
        }
      };
      return { toastCallBack}
}
export default useToastHandler;