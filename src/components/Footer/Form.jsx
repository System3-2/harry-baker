import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <h3 className="text-white text-sm font-bold ">Sign up for newsletter</h3>
      <div className="flex flex-col my-6">
        <input
          type="email"
          placeholder="Email"
          name="user_name"
          className="my-2 p-2"
        />
        <input
          type="text"
          placeholder="First Name"
          name="user_email"
          className="my-2 p-2"
        />
      </div>
      <input
        type="submit"
        value="Subscribe"
        className="py-4 text-white font-bold px-8 bg-[#2E83FF]"
      />
    </form>
  );
};

 
export default Form