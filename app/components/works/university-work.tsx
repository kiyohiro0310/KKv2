import Image from 'next/image';
import Link from 'next/link';
import React, { Fragment } from 'react'

const UniversityWorks = () => {
    return (
        <Fragment>
          <div className='flex space-y-4 md:space-y-0 md:space-x-8 flex-col md:flex-row'>
            <Link href={'https://github.com/Terraleaves/widget_cicd'}>
              <Image
                src={"/images/infrastructure_cicd.png"}
                alt="work1 image"
                width={600}
                height={100}
              />
              <p className="text-sm">Widget for DXC infrastructure</p>
            </Link>

            <Link href={'https://github.com/Terraleaves/canary_cicd'}>
              <Image
                src={"/images/infra_canary.png"}
                alt="work2 image"
                width={600}
                height={100}
              />
              <p className="text-sm">Lambda canary fucntion infrastructure</p>
            </Link>
          </div>
        </Fragment>
      );
}

export default UniversityWorks