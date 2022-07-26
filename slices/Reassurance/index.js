import React from 'react'
import { RichText } from 'prismic-reactjs'

const Reassurance = ({ slice }) => (
  <section>
    <div className="px-4 bg-darkgreen">
      <div className="container mx-auto flex overflow-clip">
        <div className="mx-auto flex space-x-12 whitespace-nowrap py-3 px-4 sm:px-6 lg:space-x-24 lg:px-8">
          {slice?.items?.map((item, idx) => (
            <div key={idx} className="flex items-center text-sm font-medium text-white">
              {/* <item.icon className="mr-2 flex-none w-6 h-6" aria-hidden="true" /> */}
              <img className="mr-2 flex-none w-6 h-6 bg-lightgreen text-white" src={item.icon.url} alt={item.icon.alt} />
              <RichText render={item.incentive} />
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
)

export default Reassurance