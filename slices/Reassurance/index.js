import React from 'react'
import { RichText } from 'prismic-reactjs'

const Reassurance = ({ slice }) => (
  <section>
    <div className="bg-white">
      <div className="flex overflow-x-auto">
        <div className="mx-auto flex space-x-12 whitespace-nowrap py-3 px-4 sm:px-6 lg:space-x-24 lg:px-8">
          {slice?.items?.map((item) => (
            <div key={item.name} className="flex items-center text-sm font-medium text-indigo-600">
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