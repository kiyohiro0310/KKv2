import React, { useRef } from "react";
import PageTitle from "../components/fragments/page-title";
import SectionTitle from "../components/fragments/section-title";
import InputField from "../components/fragments/input-field";
import TextArea from "../components/fragments/text-area";
import Link from "next/link";
import Form from 'next/form'
import { sendContact } from "./actions";

const page = () => {

  return (
    <div className="max-w-4xl mx-auto pb-24">
      <PageTitle title="Contact" />

      <div className="py-16">
        <SectionTitle
          title="If you need a support, pleas don't hesitate to ask!"
          subTitle="I'll support your business process from technology side."
        />

        <Form className="px-6 py-32 flex flex-col space-y-10" action={sendContact}>
          <div className="grid gird-cols-1 md:grid-cols-2 gap-10">
            <InputField label="Fistname" type="text" mandatory={true} />
            <InputField label="Lastname" type="text" mandatory={true} />
          </div>
          <InputField label="Phone" type="phone" mandatory={true} />
          <InputField label="Email" type="email" mandatory={true} />
          <InputField label="URL" type="text" mandatory={false} />
          <TextArea
            label="Short description"
            rows={5}
            cols={10}
            mandatory={true}
          />
          <TextArea label="Description" rows={10} cols={10} mandatory={true} />
          <div className="flex space-x-2">
            <input
              type="checkbox"
              className="w-4"
              id="agreement"
              name="agreement"
              required
            />
            <p>
              Agree <Link href={"/policy#data-handling"} className="text-blue-400">Datahandling policy</Link> and confirm all fields are correct
            </p>
          </div>
          <div className="flex justify-center items-center">
            <button type='submit' className="w-48 text-center px-6 py-2 bg-main text-white rounded-md hover:bg-sub transition-all duration-200 font-bold">
              Send
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default page;
