"use client";
import React from "react";
import {
  Checkbox,
  Input,
  Textarea,
  Button,
  Select,
  SelectItem,
} from "@nextui-org/react";

export default function RequestDevelopersPage() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-slate-100 sm:text-4xl">
            Project Inquiry
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600 dark:text-slate-300">
            Tell us about your project, provide information, and ask any
            questions you have. Our team will get back to you as soon as
            possible.
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none">
          <form
            className="space-y-6"
            action={`https://formsubmit.co/${process.env.NEXT_PUBLIC_EMAIL_ADDRESS}`}
            method="POST"
          >
          <input type="hidden" name="_next" value="https://webrizen.vercal.app/thanks" />
          <input type="hidden" name="_subject" value="Request Developers - New Request ✨" />
            <Input
              className="w-full"
              variant="underlined"
              fullWidth
              clearable
              label="Project Title"
              placeholder="Enter the project title"
              name="projectTitle"
            />
            <Textarea
              variant="underlined"
              className="w-full"
              fullWidth
              label="Project Description"
              placeholder="Describe your project"
              maxLength={5000}
              name="projectDescription"
            />
            <Select
              label="Budget"
              className="w-full"
              variant="underlined"
              fullWidth
              placeholder="Select your budget range"
              name="budget"
            >
              <SelectItem value="500-1000">$500 - $1,000</SelectItem>
              <SelectItem value="1000-5000">$1,000 - $5,000</SelectItem>
              <SelectItem value="5000-10000">$5,000 - $10,000</SelectItem>
              <SelectItem value="10000-20000">$10,000 - $20,000</SelectItem>
              <SelectItem value="20000+">$20,000+</SelectItem>
            </Select>
            <Input
              className="w-full"
              variant="underlined"
              fullWidth
              clearable
              label="Skills Needed"
              placeholder="List required skills"
              name="skillsNeeded"
            />
            <Input
              className="w-full"
              variant="underlined"
              fullWidth
              clearable
              label="Reference (Optional)"
              placeholder="Provide any reference links"
              name="reference"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Input
                className="w-full"
                variant="underlined"
                fullWidth
                clearable
                label="Company"
                placeholder="Enter your company name"
                name="company"
              />
              <Input
                className="w-full"
                variant="underlined"
                fullWidth
                clearable
                label="Contact Email"
                type="email"
                placeholder="Enter your email address"
                name="contactEmail"
              />
            </div>
            <Input
              className="w-full"
              variant="underlined"
              fullWidth
              clearable
              label="Contact Phone (Optional)"
              type="tel"
              placeholder="Enter your phone number"
              name="contactPhone"
            />
            <Textarea
              className="w-full"
              variant="underlined"
              fullWidth
              label="Questions to Agency"
              placeholder="Ask any questions to our agency"
              maxLength={1500}
              name="questionsToAgency"
            />
            <div className="flex justify-start">
              <Checkbox name="subscribe">Subscribe to our newsletter</Checkbox>
            </div>
            <div className="flex justify-start">
              <Button
                auto
                className="w-full sm:w-auto bg-gradient-to-r from-[rgb(99,18,240)] to-[rgb(35,35,201)] !text-white rounded hover:backdrop-blur-lg"
                type="submit"
              >
                Submit Request
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}