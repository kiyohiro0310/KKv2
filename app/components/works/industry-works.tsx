import Image from 'next/image';
import Link from 'next/link';
import React, { Fragment } from 'react'

const IndustryWorks = () => {
    return (
        <Fragment>
          <div className='flex space-y-4 md:space-y-0 flex-col md:grid md:grid-cols-2 gap-4'>
          <Link href={'https://pgxuat.westernsydney.edu.au/apps/firstpeopleswalk/'}>
              <Image
                src={"/images/fpw.png"}
                alt="work1 image"
                width={600}
                height={100}
              />
              <p className="text-sm">First People's Walk in WSU</p>
            </Link >

            <Link href={'https://aiuat.westernsydney.edu.au/MetaBeingRAJupdated/'}>
              <Image
                src={"/images/metabeing.png"}
                alt="work2 image"
                width={600}
                height={100}
              />
              <p className="text-sm">Metabeing chatbot application</p>
            </Link >
            <Link href={'https://s-k-group.com/'}>
              <Image
                src={"/images/sk.png"}
                alt="work2 image"
                width={600}
                height={100}
              />
              <p className="text-sm">SK group web Application</p>
            </Link >
          </div>
          
        </Fragment>
      );
}

export default IndustryWorks