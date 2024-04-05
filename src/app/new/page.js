import React from "react";
import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  FormErrorMessage,
} from "@chakra-ui/react";
import Form from "../Form";


export default function New () {
  const handleSubmit = async (formData) => {
    "use server"
    console.log(formData);
  };
  return (
    <div>
      New
      <form action={handleSubmit}>
        <Form />
      </form>
    </div>
  );
  
};
