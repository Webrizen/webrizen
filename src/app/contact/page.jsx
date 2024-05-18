import React from "react";
import { Checkbox, Input, Textarea } from "@nextui-org/react";
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  PhoneCall,
  Github,
  Twitter,
} from "lucide-react";

export const metadata = {
  title: 'Contact Us - Get in Touch with Webrizen',
  description: 'Have questions or inquiries? Contact Webrizen to learn more about our services, request a quote, or discuss potential collaborations. Our team is here to assist you!',
  authors: [
    {
      name: 'Webrizen Team',
      url: 'https://webrizen.com',
    },
  ],
  publisher: 'Webrizen',
};


const Page = () => {
  return (
    <section className="md:container mx-auto md:p-14 p-4">
      <div className="flex flex-col items-center justify-center gap-5 px-5 py-7">
        <h1 className="font-sora text-5xl font-extrabold">Contact Us</h1>
        <p className="text-center text-lg font-medium text-gray-500">
          Any question or remarks? Just write us a message!
        </p>
      </div>
      <div className="grid grid-cols-7 rounded-xl border dark:border-[rgba(225,225,225,0.2)] dark:bg-[rgba(225,225,225,0.1)] bg-white p-3 sm:min-h-[600px]">
        <div className="col-span-7 flex flex-col items-start justify-between gap-10 rounded-xl bg-black p-10 sm:col-span-3">
          <div>
            <h1 className="font-sora text-3xl font-medium text-white">
              Contact Information
            </h1>
            <p className="text-left font-medium text-gray-500">
              Say something to start a live chat!
            </p>
          </div>
          <div className="flex flex-col items-start justify-start gap-7">
            <p className="flex items-center gap-4 text-lg font-medium text-white">
              <Mail size={20} />
              <a
                href="mailto:webrizen@gmail.com"
                className="font-rubik text-sm font-light text-white"
              >
                webrizen@gmail.com
              </a>
            </p>
            <p className="flex items-center gap-4 text-lg font-medium text-white">
              <PhoneCall size={20} />
              <a
                href="tel:+918761820422"
                className="font-rubik text-sm font-light text-white"
              >
                +91 8761820422
              </a>
            </p>
            <p className="flex items-center gap-4 text-lg font-medium text-white">
              <MapPin size={20} />
              <a
                href="https://maps.app.goo.gl/jx8gN3XkCvFa8T8c9"
                target="_blank"
                rel="noopener noreferrer"
                className="font-rubik text-sm font-light text-white"
              >
                Falakata, West Bengal, India
              </a>
            </p>
            <p className="flex items-center gap-4 text-lg font-medium text-white">
              <svg viewBox="0 0 32 32" className="w-6 h-6 fill-green-500 rounded-full">
                <path
                  d=" M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.318.13-.33.244-.73.244-1.088 0-.058 0-.144-.03-.215-.1-.172-2.434-1.39-2.678-1.39zm-2.908 7.593c-1.747 0-3.48-.53-4.942-1.49L7.793 24.41l1.132-3.337a8.955 8.955 0 0 1-1.72-5.272c0-4.955 4.04-8.995 8.997-8.995S25.2 10.845 25.2 15.8c0 4.958-4.04 8.998-8.998 8.998zm0-19.798c-5.96 0-10.8 4.842-10.8 10.8 0 1.964.53 3.898 1.546 5.574L5 27.176l5.974-1.92a10.807 10.807 0 0 0 16.03-9.455c0-5.958-4.842-10.8-10.802-10.8z"
                  fill-rule="evenodd"
                ></path>
              </svg>
              <a
                href="https://wa.me/+918761820422"
                target="_blank"
                rel="noopener noreferrer"
                className="font-rubik text-sm font-light text-white"
              >
                Chat Via Whatsapp
              </a>
            </p>
          </div>
          <div className="flex items-center justify-start gap-1">
            <a
              href="https://instagram.com/heda_healing"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl text-slate-300 hover:text-slate-100 cursor-pointer backdrop-blur-3xl hover:bg-[rgba(225,225,225,0.1)] flex justify-center items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-instagram w-4 h-4"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
              </svg>
            </a>
            <a
              href="https://twitter.com/Arshahdul_Ahmed"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl text-slate-300 hover:text-slate-100 cursor-pointer backdrop-blur-3xl hover:bg-[rgba(225,225,225,0.1)] flex justify-center items-center"
            >
              <Twitter size={20} />
            </a>
            <a
              href="https://github.com/Webrizen"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl text-slate-300 hover:text-slate-100 cursor-pointer backdrop-blur-3xl hover:bg-[rgba(225,225,225,0.1)] flex justify-center items-center"
            >
              <Github size={20} />
            </a>
          </div>
        </div>
        <form
          action={`https://formsubmit.co/${process.env.NEXT_PUBLIC_EMAIL_ADDRESS}`}
          method="POST"
          className="col-span-7 flex flex-col items-start justify-start gap-10 p-5 *:w-full sm:col-span-4 sm:p-10"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <Input
              label="First Name"
              // placeholder="Enter your first name"
              // labelPlacement="outside"
              variant="underlined"
              classNames={{
                base: "font-rubik",
              }}
              // size="lg"
            />
            <Input
              label="Last Name"
              // placeholder="Enter your last name"
              // labelPlacement="outside"
              variant="underlined"
              classNames={{
                base: "font-rubik",
              }}
              // size="lg"
            />
            <Input
              type="email"
              label="Email"
              // placeholder="Enter your email address"
              // labelPlacement="outside"
              variant="underlined"
              classNames={{
                base: "font-rubik",
              }}
              // size="lg"
            />
            <Input
              type="tel"
              label="Phone Number"
              // placeholder="Enter your phone number"
              // labelPlacement="outside"
              variant="underlined"
              classNames={{
                base: "font-rubik",
              }}
              // size="lg"
            />
          </div>
          <div className="flex flex-col justify-start gap-3">
            <p className="font-rubik text-sm font-semibold dark:text-slate-50 text-black">
              Select subject?
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Checkbox color="default" radius="full">
                <span className="text-sm font-medium dark:text-slate-50 text-black">
                  General Inquiry
                </span>
              </Checkbox>
              <Checkbox color="default" radius="full">
                <span className="text-sm font-medium dark:text-slate-50 text-black">
                  Partnership
                </span>
              </Checkbox>
              <Checkbox color="default" radius="full">
                <span className="text-sm font-medium dark:text-slate-50 text-black">
                  Support
                </span>
              </Checkbox>

              <Checkbox color="default" radius="full">
                <span className="text-sm font-medium dark:text-slate-50 text-black">
                  Other
                </span>
              </Checkbox>
            </div>
          </div>
          <div className="flex flex-col justify-start gap-7 *:w-full">
            {/* <p className="font-rubik text-sm font-semibold text-black">
              Message
            </p> */}
            <Textarea
              label="Message"
              variant="underlined"
              labelPlacement="outside"
              placeholder="Enter your message"
              classNames={{
                innerWrapper: "w-full",
              }}
            ></Textarea>
            <div className="flex items-center justify-end">
              <button className="flex h-12 items-center justify-center rounded-lg bg-black px-7 font-rubik font-medium text-white">
                Send Message
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Page;
