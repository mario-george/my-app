import * as React from "react";
import * as Toast from "@radix-ui/react-toast";

const ToastComponent = (
 { titleText,
  descriptionText}:{ titleText:string,
    descriptionText:string}
) => {
  const [open, setOpen] = React.useState(false);
React.useEffect(()=>{

let buttonEl=  document.getElementById('toast-button') as HTMLButtonElement
buttonEl.click()
},[])
  return (
    <Toast.Provider swipeDirection="right">
      <button
        className="hidden"
        onClick={() => {
          setOpen(true);
        }}
        id="toast-button"
      >
        BUTTON
      </button>

         </Toast.Provider>
  );
};

export default ToastComponent;
