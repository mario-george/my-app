import { Button } from "@nextui-org/react"

export default function PlaceButton({type,setShowLocation,showLocation,handleEditPlace,onOpen,onClose,handleDeletePlace}:{type:string,onOpen?:()=>void,setShowLocation?:(value:boolean)=>void,handleEditPlace?:()=>void,showLocation?:boolean,onClose?:()=>void,handleDeletePlace?:()=>void}){
    if (type=="AuthorizedButtons"){
        return   <>
        {" "}
        <Button
          size="lg"
          className="text-lg duration-200 transition-all hover:text-black"
          fullWidth
          color="primary"
          variant="ghost"
          onClick={()=>{if(setShowLocation) setShowLocation(!showLocation)}}>
           {!showLocation ? `View On Map`:`Hide Map`}
        </Button>
        <Button
          size="lg"
          onClick={handleEditPlace}
          className="text-lg"
          fullWidth
          color="secondary"
          variant="ghost"
        >
          Edit{" "}
        </Button>{" "}
        <Button
          size="lg"
          className="text-lg"
          fullWidth
          color="danger"
          variant="ghost"
          onClick={onOpen}
        >
          Delete{" "}
        </Button>
      </>
    }
    if (type=="notAuthorized"){
        return     <Button
        size="lg"
        className="text-lg"
        fullWidth
        color="primary"
        onClick={() => { if (setShowLocation) setShowLocation(!showLocation) }}          variant="ghost"
      >
         {!showLocation ? `View On Map`:`Hide Map`}
      </Button>
    }

    if (type=="deleteConfirmation"){
        return    <><Button variant="light" onPress={onClose}>
        Close
      </Button>
      <Button
        color="danger"
        onPress={() => {
         if(handleDeletePlace) handleDeletePlace();
          if(onClose) onClose();
        }}
      >
        Delete
      </Button></>  
    }
    return <></> 
}