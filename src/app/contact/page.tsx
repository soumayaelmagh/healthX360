"use client"

import PhoneInputField from "@/components/contact/PhoneInputField";
import InputField from "@/components/reusable/InputField";
import { FaPaperPlane } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { updateContact } from "@/redux/contactSlice";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Script from "next/script";

function Contact() {

    const [emailSent, setEmailSent] = useState<boolean>(false)
    
    const contactInfo = useSelector((state: any) => state.contact)
    const dispatch = useDispatch();
    const form = useRef<any>(null)
    const errorMsgRef = useRef<any>(null)

    const handleMessage = (e:any): void => {
        //@ts-ignore
        dispatch(updateContact({type: "message", payload: e?.target?.value}))
    }

    const handleContactSubmit = (e: any): void => {
        e?.preventDefault();
        const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        const namePattern = /^.{4,16}$/;
        const messagePattern = /^.{20,}$/;
        if (
          namePattern.test(contactInfo?.fullname) ||
          emailPattern.test(contactInfo?.email) ||
          messagePattern.test(contactInfo?.message)
        ) {
          // console.log("valid");
    
          emailjs
            .sendForm(
              "service_grja1w1",
              "template_hs8g2m5",
              form.current,
              "ZQ0JlqvcgqBZIZz72"
            )
            .then(
              (result:any) => {
                setEmailSent(true);
                console.log(result)
              },
              (error) => {
                console.log(error.text);
              }
            );
        } else if (
          contactInfo?.fullname == "" ||
          contactInfo?.email == "" ||
          contactInfo?.message == ""
        ) {
          errorMsgRef?.current?.classList.replace("hidden", "flex");
        } 
      };
    

    return ( <section className="page-section w-full h-quto min-h-screen bg-antiflash flex flex-col items-center gap-5">
        <h1 className="text-4xl font-semibold mt-5 ">Contact us</h1>
        <form action="submit" className="relative w-full max-w-[500px] mx-auto h-auto px-4 py-10 rounded-lg shadow-xl flex flex-col" ref={form}>
            {
                emailSent ? (
                    <div className="w-full h-[50vh] flex flex-col justify-center items-center p-10">
                        <h1 className="text-primary text-2xl font-semibold text-center">Email sent successfully, we will respond soon</h1>
                        {/* @ts-ignore */}
                        <lord-icon
                            src="https://cdn.lordicon.com/rvmukzut.json"
                            trigger="loop"
                            delay="2000"
                            stroke="bold"
                            colors="primary:#47b362,secondary:#47b362"
                            style={{width:"350px", height:"350px"}}>
                        {/* @ts-ignore */}
                        </lord-icon>
                    </div>
                ) : (
                    <>
                        <InputField for="fname" label="Full name" name="from_name" />
                        <InputField for="email" label="Email" name="Email" />
                        <PhoneInputField/>
                        <div className="relative w-full mt-5 mb-8">
                            <label htmlFor="message" className={`font-semibold text-lg text-black ml-4 transition-all duration-300 `}>Message</label>
                            <textarea name="message" className="w-full px-3 py-1 bg-black-05 rounded-sm h-auto min-h-32" onChange={(e) => {handleMessage(e)}}></textarea>
                        </div>
                        <button className="text-black primary-button w-full flex items-center gap-2 text-2xl font-semibold justify-center" style={{paddingTop: "10px", paddingBottom: "10px"}} onClick={(e) => {handleContactSubmit(e)}}>Send <FaPaperPlane/> </button>
                        <p className="text-sm text-center mt-3 text-red-600 font-medium animate-shake hidden" ref={errorMsgRef}>Please fill all required areas correctly</p>
                    </>
                )
            }
            
        </form>
        <Script src="https://cdn.lordicon.com/lordicon.js"></Script>
    </section> );
}

export default Contact;