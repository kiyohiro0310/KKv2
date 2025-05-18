'use client';

import React, { useEffect, useRef } from "react";
import PageTitle from "../components/fragments/page-title";
import ExperienceTitle from "../components/fragments/experience-title";
import Link from "next/link";
import ExperienceLink from "../components/fragments/experience-link";
import Image from "next/image";

const Page = () => {


  return (
    <div className="w-screen dark:bg-dark dark:text-light">
      <div className="max-w-4xl mx-auto pb-24">
        <div>
          <PageTitle title="Experience" />
        </div>

        <div className="flex flex-col space-y-48">
          <div className="flex justify-start">
            <div className="md:w-2/3 flex flex-col space-y-8 p-12">
              <ExperienceTitle
                title="Fullstack Development Assistant"
                date="2023.5.29 - 2024.10.16"
              />
              <Link
                className="text-sub hover:text-main"
                href={"https://pgx.westernsydney.edu.au/"}
              >
                Website
              </Link>

              <div>
                Work on transformational projects involving ideating and testing a
                new model of postgraduate learning for WSU that provides
                opportunity for flexibility, innovation, and deep industry
                partnerships.
              </div>

              <div>
                <h1 className="text-xl font-bold">My Works</h1>
                <div className="flex flex-col space-y-4 p-2">
                  <ExperienceLink
                    title="Modify and update Metabeing functionality"
                    href="https://aiuat.westernsydney.edu.au/MetaBeingRAJupdated/"
                  />
                  <ExperienceLink
                    title="Create user interface of firstpeopleswalk website"
                    href="https://pgxuat.westernsydney.edu.au/apps/firstpeopleswalk/"
                  />
                  <ExperienceLink
                    title="Update chatbot application"
                    href="https://ol-chat-bot.vercel.app/"
                  />
                  <p>Admin Server (Ubuntu, Redhat, Nginx)</p>
                  <p>Gitlab auto uploader</p>
                  <p>Data analystics dashboard</p>
                  <p>Update CICD pipeline and docker file</p>
                </div>
              </div>
            </div>

            <div className="hidden md:block w-1/2">
              <Image
                className="w-full mx-auto"
                src={"/images/pgx.png"}
                alt=""
                width={400}
                height={600}
              />
            </div>
          </div>

          <div className="flex flex-row-reverse justify-start">
            <div className="w-[90%] mx-auto md:w-2/3 flex flex-col space-y-8 p-12">
              <ExperienceTitle
                title="Fullstack Developer"
                date="2018.4.5 - Current"
              />
              <Link
                className="text-sub hover:text-main"
                href={"https://s-k-group.com/"}
              >
                Website
              </Link>

              <div>
                The SKGROUP office is in Saitama, Japan. This company sells the
                2nd used car to customers. I developed and operate this website
                application currently. Modification and updates are provided as
                needed.
              </div>

              <div>
                This application is still maintained by myself, so I still contribute to this company as casual time job.
              </div>

              <div>
                <h1 className="text-xl font-bold">My Works</h1>
                <div className="flex flex-col space-y-4 p-2">
                  <p>Design and implement user interface</p>
                  <p>Build server side logic and functionality</p>
                  <p>Database manipulation and optimisation</p>
                  <p>Application operation</p>
                </div>
              </div>
            </div>

            <div className="hidden md:block w-1/2">
              <Image
                className="w-full mx-auto"
                src={"/images/skmorters.png"}
                alt=""
                width={800}
                height={600}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
