import { InputField } from "@/components/Forms/InputField";

export function PersonalDetails() {
  return (
    <section className="p-4 sm:p-6">
      <div className="pb-12">
        <div className="border-b border-gray-200 pb-5">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Personal Information
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Personal information about yourself.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-x-6 gap-y-8 py-8 sm:grid-cols-6">
          <InputField
            id="first-name"
            name="first-name"
            label="First name"
            placeholder="Your first name"
            className="sm:col-span-3 md:col-span-6 lg:col-span-3"
          />
          <InputField
            id="last-name"
            name="last-name"
            label="Last name"
            placeholder="Your last name"
            className="sm:col-span-3 md:col-span-6 lg:col-span-3"
          />
          <InputField
            id="email"
            name="email"
            type="email"
            label="Email address"
            placeholder="youremail@example.com"
            className="sm:col-span-3 md:col-span-6 lg:col-span-3"
          />
          <InputField
            id="phone-number"
            name="phone-number"
            type="tel"
            label="Phone Number"
            placeholder="1234-1234-1234"
            className="sm:col-span-3 md:col-span-6 lg:col-span-3"
          />
          <InputField
            id="country"
            name="country"
            label="Country"
            placeholder="Your country"
            className="sm:col-span-2 sm:col-start-1 md:col-span-3"
          />
          <InputField
            id="city"
            name="city"
            label="City"
            placeholder="Your city"
            className="sm:col-span-2 sm:col-start-1 md:col-span-3"
          />
          <InputField
            id="street-address"
            name="street-address"
            label="Street address"
            placeholder="Home street address"
            className="col-span-full"
          />
          <InputField
            id="region"
            name="region"
            label="State / Province"
            placeholder="Province"
            className="sm:col-span-2 md:col-span-3"
          />
          <InputField
            id="postal-code"
            name="postal-code"
            label="ZIP / Postal code"
            placeholder="123456"
            className="sm:col-span-2 md:col-span-3"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-y-3 sm:grid-cols-3 sm:gap-x-5">
        <div className="flex space-x-3 pointer-events-none mb-5 sm:col-span-3">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-red-500" aria-hidden="true">
            <path fillRule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
          </svg>
          <p className="text-sm text-red-600">
          This form has nothing to do with your personal data, so don{'\''}t worry about filling it out on this website. Just for fun!
          </p>
        </div>
        <button
          type="submit"
          className="rounded-md bg-blue-600 p-2.5 w-full text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 sm:col-span-2"
        >
          Save Payment
        </button>
        <button type="button" className="text-sm font-semibold p-2.5 w-full text-gray-900 hover:text-gray-800 border border-gray-400 hover:border-gray-300 rounded-md">
          Cancel
        </button>
      </div>
    </section>
  );
};
