import React, { useRef, useState } from "react";
import { Button, Input, Textarea, Typography } from "@material-tailwind/react";
import SuccessMessage from "./successPopup";
import emailjs from "@emailjs/browser";
export function ContactSection({ contactData }) {
  const { address, embedMapLink } = contactData;
  const form = useRef();
  const [showDialogue, setShowDialogue] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const [touched, setTouched] = useState({});
  const [invalidFields, setInvalidFields] = useState({});
  // const [state, dispatch] = useReducer(reducer, defaultState);

  const handleShowDialogue = () => {
    setShowDialogue(true);
  };

  const validateForm = () => {
    const formElements = form.current.elements;
    const firstName = formElements["first-name"].value.trim();
    const lastName = formElements["last-name"].value.trim();
    const email = formElements["email"].value.trim();
    const message = formElements["message"].value.trim();
    const invalids = {};
    if (!firstName) invalids["first-name"] = true;
    if (!lastName) invalids["last-name"] = true;
    if (!email) invalids["email"] = true;
    if (!message) invalids["message"] = true;
    // console.log(invalidFields);

    if (firstName && lastName && email && message) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
    setInvalidFields(invalids);
    setIsFormValid(Object.keys(invalids).length === 0);
    // console.log(isFormValid);
  };
  const handleBlur = (e) => {
    console.log("Blurred:", e.target.name, isFormValid);
    setTouched({ ...touched, [e.target.name]: true });
    validateForm();
  };
  const sendEmail = (e) => {
    e.preventDefault();
    validateForm();
    if (!isFormValid) {
      setTouched({
        "first-name": true,
        "last-name": true,
        email: true,
        message: true,
      });
      return;
    }
    emailjs
      .sendForm("service_kzhpn6g", "template_rhjgu57", form.current, {
        publicKey: "at5ZndK8MC1cAeFOc",
      })
      .then(
        () => {
          form.current.reset();
          setIsFormValid(false);
          console.log("Email sent successfully!");
          handleShowDialogue();
        },
        (error) => {
          setIsError(true);
          console.log("Error sending email:", error);
          handleShowDialogue();
        }
      );
  };
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  // };
  return (
    <section className="px-8 py-8 lg:py-16">
      <div className="container mx-auto text-center">
        <Typography
          variant="h4"
          color="blue-gray"
          className="mb-4 !text-base !text-3xl lg:!text-3xl"
        >
          Contact Us
        </Typography>
        <Typography
          variant="h1"
          color="blue-gray"
          className="mb-4 !text-2xl lg:!text-2xl"
        >
          We&apos;re Here to Help
        </Typography>
        <Typography className="mb-10 font-normal !text-lg lg:mb-20 mx-auto max-w-3xl !text-gray-500">
          Whether it&apos;s a question about our services, a request for visit,
          or suggestions for improvement, our team is eager to hear from you.
        </Typography>
        <div className="grid grid-cols-1 gap-x-12 gap-y-6 lg:grid-cols-2 items-start">
          {/* <img
            src="/ContactUs.jpg"
            alt="map"
            className="w-full h-full lg:max-h-[510px] hidden lg:block object-cover rounded-lg"
          /> */}

          <iframe
            src={embedMapLink}
            title="map"
            height="100%"
            width={"100%"}
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-full lg:max-h-[510px]"
          ></iframe>

          <form
            className="flex flex-col gap-4 lg:max-w-sm"
            ref={form}
            onChange={validateForm}
            onSubmit={sendEmail}
          >
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Typography
                  variant="small"
                  className={
                    touched["first-name"] && invalidFields["first-name"]
                      ? "text-red-700 mb-2 text-left font-medium "
                      : "mb-2 text-left font-medium !text-gray-900"
                  }
                >
                  First Name
                </Typography>
                <Input
                  color="gray"
                  size="lg"
                  id="firstname"
                  name="first-name"
                  placeholder="Tyler"
                  type="text"
                  onBlur={handleBlur}
                  className={
                    touched["first-name"] && invalidFields["first-name"]
                      ? "animate-[shake_0.3s]"
                      : ""
                  }
                  containerProps={{
                    className: "min-w-full",
                  }}
                  labelProps={{
                    className: "hidden",
                  }}
                />
              </div>
              <div>
                <Typography
                  variant="small"
                  className={
                    touched["last-name"] && invalidFields["last-name"]
                      ? "text-red-700 mb-2 text-left font-medium "
                      : "mb-2 text-left font-medium !text-gray-900"
                  }
                >
                  Last Name
                </Typography>
                <Input
                  color="gray"
                  size="lg"
                  name="last-name"
                  id="lastname"
                  placeholder="Durden"
                  type="text"
                  onBlur={handleBlur}
                  className={
                    touched["last-name"] && invalidFields["last-name"]
                      ? "animate-[shake_0.3s]"
                      : ""
                  }
                  containerProps={{
                    className: "!min-w-full",
                  }}
                  labelProps={{
                    className: "hidden",
                  }}
                />
              </div>
            </div>
            <div>
              <Typography
                variant="small"
                className={
                  touched["email"] && invalidFields["email"]
                    ? "text-red-700 mb-2 text-left font-medium "
                    : "mb-2 text-left font-medium !text-gray-900"
                }
              >
                Your Email
              </Typography>
              <Input
                color="gray"
                size="lg"
                placeholder="name@email.com"
                name="email"
                id="email"
                type="email"
                onBlur={handleBlur}
                className={
                  touched["email"] && invalidFields["email"]
                    ? "animate-[shake_0.3s]"
                    : ""
                }
                containerProps={{
                  className: "!min-w-full",
                }}
                labelProps={{
                  className: "hidden",
                }}
              />
            </div>
            <div>
              <Typography
                variant="small"
                className={
                  touched["message"] && invalidFields["message"]
                    ? "text-red-700 mb-2 text-left font-medium "
                    : "mb-2 text-left font-medium !text-gray-900"
                }
              >
                Your Message
              </Typography>
              <Textarea
                rows={6}
                color="gray"
                placeholder="Message"
                name="message"
                id="message"
                type="text"
                onBlur={handleBlur}
                className={
                  touched["message"] && invalidFields["message"]
                    ? "animate-[shake_0.3s]"
                    : ""
                }
                containerProps={{
                  className: "!min-w-full",
                }}
                labelProps={{
                  className: "hidden",
                }}
              />
            </div>
            <Button
              className="w-full"
              color="gray"
              type="submit"
              disabled={!isFormValid}
            >
              Send message
            </Button>
          </form>
          {showDialogue && (
            <div className="z-50 right-4 lg:md:right-[40%] top-12  fixed  mt-6">
              <SuccessMessage isopen={showDialogue} isError={isError} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
