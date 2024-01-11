import * as React from "react";
import * as Toast from "@radix-ui/react-toast";

const ToastComponent = (
 { titleText,
  descriptionText}:{ titleText:string,
    descriptionText:string}
) => {

  return (
    <Toast.Provider swipeDirection="right">
   </Toast.Provider>
  );
};

export default ToastComponent;
