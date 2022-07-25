import React from 'react';
import { RichText } from 'prismic-reactjs';
import { Link } from 'prismic-reactjs';


// const navLinks = (slice) => {
//   return (
//     <nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
//       {slice?.items?.map((item, idx) => (
//         <div key={idx} className="px-5 py-2">
//           <a href={Link.url(item.pageLink)} className="text-base text-gray-500 hover:text-gray-900">
//             <RichText render={item.pageLabel} />
//           </a>
//         </div>
//       ))}
//     </nav>
//   )
// }

const socialLinks = (slice) => {
  return (
    <div className="mt-8 flex justify-center space-x-6">
      {slice?.items?.map((item, idx) => (
        <a key={idx} href={Link.url(item.socialLink)} className="text-gray-400 hover:text-gray-500">
          <span className="sr-only">{item.name}</span>
          {/* <item.icon className="h-6 w-6" aria-hidden="true" /> */}
          <img className="h-6 w-6" src={item.socialIcon.url} alt={item.socialIcon.alt} />
        </a>
      ))}
    </div>
  )
}

const copyright = (slice) => {
  return (
    <span className="mt-8 text-center text-base text-gray-400"><RichText render={slice.primary.copyright} /></span>
  )
}

const FooterLinks = ({ slice }) => (
  <section>
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        {/* {navLinks(slice)} */}
        {socialLinks(slice)}
        {copyright(slice)}
      </div>
    </footer >
  </section>
)

export default FooterLinks