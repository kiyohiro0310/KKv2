import React from "react";
import PageTitle from "../components/fragments/page-title";

const page = () => {
  return (
    <div className="w-[90%] md:max-w-4xl mx-auto pb-24">
      <PageTitle title="Policy" />

      <div id="data-handling">
        <div className="py-12">
          <p>
            I recognise the use of privacy data securely is most critical,
            therefore, this page describes how user data is handled.
          </p>
        </div>
        <div id="data-handling" className="space-y-4">
          <h1 className="text-xl font-bold">Data handling policy</h1>
          <p>
            The data user has sent via form is not stored in database or other
            storages system. Once data is sent to the system, it sends email to
            Kiyohiro Kambayashi, owner of website, to confirm information and
            contact with user.
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
