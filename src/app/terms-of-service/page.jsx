import React from "react";

export default function page() {
  return (
    <>
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="px-8 py-10 lg:py-12">
            <h2 className="text-3xl lg:text-4xl font-semibold text-gray-800 dark:text-white mb-6">
              Terms of Service
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              These Terms of Service ("Terms") govern your use of the Webrizen
              website and any related services provided by Webrizen ("Service").
              By accessing or using the Service, you agree to be bound by these
              Terms. If you disagree with any part of the terms, then you may
              not access the Service.
            </p>
            <h3 className="text-xl lg:text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              Refund Policy
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              We offer refunds on a case-by-case basis. If you are not satisfied
              with our service, please contact us within 30 days of your
              purchase to request a refund. We will review your request and
              provide a refund if we determine it is warranted.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Please note that certain restrictions apply:
            </p>
            <ul className="list-disc ml-8 mb-6 text-gray-700 dark:text-gray-300">
              <li>
                Refunds are not available for services that have already been
                rendered.
              </li>
              <li>
                Refunds will be issued to the original payment method used for
                the purchase.
              </li>
              <li>Processing fees may apply.</li>
            </ul>
            <h3 className="text-xl lg:text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              Limitation of Liability
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              In no event shall Webrizen, nor its directors, employees,
              partners, agents, suppliers, or affiliates, be liable for any
              indirect, incidental, special, consequential or punitive damages,
              including without limitation, loss of profits, data, use,
              goodwill, or other intangible losses, resulting from (i) your
              access to or use of or inability to access or use the Service;
              (ii) any conduct or content of any third party on the Service;
              (iii) any content obtained from the Service; and (iv) unauthorized
              access, use or alteration of your transmissions or content,
              whether based on warranty, contract, tort (including negligence)
              or any other legal theory, whether or not we have been informed of
              the possibility of such damage, and even if a remedy set forth
              herein is found to have failed of its essential purpose.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
