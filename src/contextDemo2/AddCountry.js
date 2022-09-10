import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AppContext } from "./context";
import { ADD_COUNTRY,DELETE_COUNTRY } from "../constant";

export const AddCountry = () => {
  var { dispatchAction } = useContext(AppContext);
  const { register, handleSubmit } = useForm();
  const submit = data =>{

    dispatchAction(ADD_COUNTRY,data);
  }
  return <div>AddCountry

    <form onSubmit={handleSubmit(submit)}>
        <input type="text"  {...register("name")} />
        <input type="text"  {...register("capital")} />
        <input type="text"  {...register("population")} />
        <input type="submit" value="ADDCOUNTRY" />

    </form>
  </div>;
};
