import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const HeroContent = () => {
  return (
    <div className="">
        <h1 className="font-extrabold text-4xl md:text-5xl lg:text-6xl leading-tight text-gray-800 dark:text-white">
          Choice and Consequence
        </h1>
        <p className="mt-4 text-lg md:text-xl lg:text-2xl font-light text-gray-600 dark:text-gray-300">
          Without haste, but without rest
        </p>
        <p className="my-6 text-sm md:text-base lg:text-lg text-gray-500 dark:text-gray-400">
          Have a blast on your journey—it&apos;s the one adventure that&apos;s all yours!
        </p>
        <Link
          href={"/contact"}
          className="px-8 py-3 bg-primary hover:bg-primary-dark font-medium text-lg rounded-lg shadow-lg transition-all duration-300 hover:text-main"
        >
          Contact
        </Link>
        <div className="flex w-full pt-12 justify-center">
          <Link href={"https://aws.amazon.com/certification/certified-cloud-practitioner/"}>
            <Image src="/images/clf.png" alt="clf logo" width={50} height={50} />
          </Link>
        </div>
      </div>
  )
}

export default HeroContent