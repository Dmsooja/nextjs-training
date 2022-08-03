import React from 'react'
import { RichText } from 'prismic-reactjs'

const ArticleListContainer = ({ slice }) => (
  <section>
    <div className="relative max-w-7xl mx-auto">
      <div className="text-center">
        <div className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl"><RichText render={slice.primary.title} /></div>
      </div>
      <div>
        <ul role="list" className="space-y-3">
          {slice?.items?.map((item,  idx) => (
            <li key={idx} className="bg-white shadow overflow-hidden rounded-md px-6 py-4">
              {/* Your content */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
)

export default ArticleListContainer