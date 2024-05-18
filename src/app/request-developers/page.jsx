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
          <form className="space-y-6">
            <Input
              className="w-full"
              variant="underlined"
              fullWidth
              clearable
              label="Project Title"
              placeholder="Enter the project title"
            />
            <Textarea
              variant="underlined"
              className="w-full"
              fullWidth
              label="Project Description"
              placeholder="Describe your project"
              maxLength={5000}
            />
            <Select
              label="Budget"
              className="w-full"
              variant="underlined"
              fullWidth
              placeholder="Select your budget range"
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
            />
            <Input
              className="w-full"
              variant="underlined"
              fullWidth
              clearable
              label="Reference (Optional)"
              placeholder="Provide any reference links"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Input
                className="w-full"
                variant="underlined"
                fullWidth
                clearable
                label="Company"
                placeholder="Enter your company name"
              />
              <Input
                className="w-full"
                variant="underlined"
                fullWidth
                clearable
                label="Contact Email"
                type="email"
                placeholder="Enter your email address"
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
            />
            <Textarea
              className="w-full"
              variant="underlined"
              fullWidth
              label="Questions to Agency"
              placeholder="Ask any questions to our agency"
              maxLength={500}
            />
            <div className="flex justify-start">
              <Checkbox>Subscribe to our newsletter</Checkbox>
            </div>
            <div className="flex justify-start">
              <Button auto className="w-full sm:w-auto" color="primary">
                Submit Request
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
