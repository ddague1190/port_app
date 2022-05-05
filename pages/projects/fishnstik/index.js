import Link from "next/link"
const posts = [
  { title: 'Select dropdowns', link: '' },
  { title: 'True to size images', link: '' }
]
const features = [
  { blogTitle: 'True-to-size images', blogLink: '', name: 'Tailwind CSS', description: 'Absolutely love having everything in one place. A prior build relied on SASS with BEM methodology.' },
  { name: 'Django-DRF', description: 'I appreciate this backend for it\'s use of Python, it batteries-included approach, and its extensibility.' },
  { name: 'React', description: 'Having had the opportunity to make a pure JS e-commerce store with some SPA features, I truly appreciate the genius and pure zen coolness of React.' },
  { blogTitle: 'Filtering with Dropdowns', blogLink: '', name: 'Notable Packages', description: 'Redux, Framer-Motion, React-Select' },
]

export default function FishNStik() {
  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-24 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8 lg:grid-cols-2">

        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">The Fish N Stik Build</h2>


          <p className="mt-4 text-gray-500">
            An e-commerce store leveraging React and Django with Django Rest Framework.
          </p>
          <span className="relative z-0 py-6 inline-flex shadow-sm rounded-md">
            <button
              type="button"
              className="font-extrabold relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring--500 focus:border--500"
            >
              GitHub
            </button>
            <button
              type="button"
              className="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring--500 focus:border--500"
            >
              Link to website
            </button>
            <button
              type="button"
              className="-ml-px relative inline-flex items-center px-4 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring--500 focus:border--500"
            >
              Video with Flow Chart and Code Walk-through
            </button>
          </span>

          <section className="text-black mt-8">
            <h1 className="text-2xl text-blue-500">Reflections</h1>

            <dl className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              {features.map((feature) => (
                <div key={feature.name} className="border-t border-gray-200 pt-4">
                  <dt className="font-medium text-gray-900">{feature.name}</dt>
                  <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
                  {feature.blogTitle && <dd className='text-xs mt-4 w-26 font-semibold text-blue-500 '><Link href={feature.blogLink}>{`See my post on ${feature.blogTitle}`}</Link></dd>}
                </div>
              ))}
            </dl>
          </section>

        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          <img
            src="/static/images/fishnstik_frontpage.png"
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            className="bg-gray-100 rounded-lg object-cover h-full w-full"
          />
          <img
            src="/static/images/fishnstik_selectedproduct.png"
            alt="Top down view of walnut card tray with embedded magnets and card groove."
            className="bg-gray-100 rounded-lg object-cover w-full h-full"
          />
          <img
            src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-03.jpg"
            alt="Side of walnut card tray with card groove and recessed card area."
            className="bg-gray-100 rounded-lg"
          />
          <img
            src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-04.jpg"
            alt="Walnut card tray filled with cards and card angled in dedicated groove."
            className="bg-gray-100 rounded-lg"
          />
        </div>
      </div>
    </div>
  )
}