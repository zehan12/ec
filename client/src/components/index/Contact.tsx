import { Fragment } from "react"

const Contact = () => {
    return (
        <Fragment>
            <section className="py-24 2xl:py-44 bg-gray-100 rounded-b-10xl">
                <div className="container px-4 mx-auto">
                    <div className="flex flex-wrap items-center -mx-4">
                        <div className="w-full md:w-1/2 lg:w-2/5 px-4 mb-20 md:mb-0">
                            <span className="mb-9 block font-medium uppercase tracking-widest text-xs leading-4 text-gray-700">Contact us</span>
                            <h2 className="mt-8 mb-12 text-4xl md:text-7xl xl:text-8xl font-medium font-heading leading-tight">Have any question?</h2>
                            <p className="mb-14 xl:mb-16 text-lg text-darkBlueGray-400">Contact with customer care on live session.</p>
                            <div className="flex flex-wrap">
                                <a className="inline-block py-2 px-10  mr-6 text-lg leading-6 text-white font-medium tracking-tighter font-heading bg-blue-500 hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-lg" href="#">Call</a>
                                <a className="inline-block py-2 px-10 text-lg leading-6 font-medium tracking-tighter font-heading bg-white hover:bg-gray-50 focus:ring-2 focus:ring-gray-50 focus:ring-opacity-50 rounded-xl" href="#">More</a>
                            </div>
                        </div>
                        <div className="w-full  md:w-1/2 lg:w-3/5 px-4">
                            <img src="/assets/contact.png" alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default Contact;