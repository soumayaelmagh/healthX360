"use client";

import { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useDispatch, useSelector } from "react-redux";
import { updateContact } from "@/redux/contactSlice";

function PhoneInputField() {
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [validNumber, setValidNumber] = useState<boolean>(false);
  const dispatch = useDispatch();
  const RootContactInfo = useSelector((state: any) => state.contact);

  const handleChange = (value: any): void => {
    setPhoneNumber(value);
    setValidNumber(validatePhoneNumber(value));
    //@ts-ignore
    dispatch(updateContact({ type: "phone", payload: value }));
  };

  const validatePhoneNumber = (num: string): boolean => {
    const phoneNumberPattern = /^\d{10}$/;
    return phoneNumberPattern.test(num);
  };

  //   useEffect(() => {
  //     dispatch(getPhoneNumber(phoneNumber));
  //   }, [phoneNumber]);

  return (
    <div className="-mt-5">
      <label
        htmlFor="phone"
        className="font-semibold text-base text-black ml-4"
      >
        Phone number
      </label>
      <PhoneInput
        country={"us"}
        value={phoneNumber}
        onChange={(e) => {
          handleChange(e);
        }}
        inputProps={{
          required: true,
        }}
        inputStyle={{ width: "100%" }}
      />
      <input
        type="text"
        defaultValue={phoneNumber}
        className="absolute opacity-0"
        name="Phone_Number"
      />
    </div>
  );
}

export default PhoneInputField;
