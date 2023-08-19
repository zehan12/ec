import { Fragment } from "react"

const Instagram = () => {
    return (
        <Fragment>
            <section className="relative py-20 md:py-32 overflow-hidden">
                <img className="absolute top-0 left-0 mt-4 -ml-20 md:-ml-0" src="saturn-assets/images/content/stars-left-top.svg" alt="" />
                <div className="relative container px-4 mx-auto">
                    <div className="text-center mb-18">
                        <span className="inline-block py-1 px-3 mb-4 text-xs font-semibold text-orange-900 bg-orange-50 rounded-full">SOCIAL MEDIA</span>
                        <h1 className="font-heading text-4xl xs:text-6xl md:text-7xl font-bold text-gray-900 mb-4">
                            <span>Follow us on</span>
                            <br />
                            <span className="font-serif italic">instagram</span>
                        </h1>
                        <p className="text-gray-500">Risus viverra justo sagittis vestibulum metus.</p>
                    </div>
                    <div className="relative max-w-sm sm:max-w-7xl mx-auto">
                        <img className="absolute top-0 right-0 -mt-40" src="saturn-assets/images/instagram-photos/blue-center-light.png" alt="" />
                        <button className="absolute z-10 top-1/2 left-0 transform -translate-y-1/2 flex items-center justify-center w-12 h-12 bg-white rounded-full border border-gray-200 hover:border-orange-900 transition duration-200">
                            <img src="saturn-assets/images/instagram-photos/left-arrow.svg" alt="" />
                        </button>
                        <button className="absolute z-10 top-1/2 right-0 transform -translate-y-1/2 flex items-center justify-center w-12 h-12 bg-white rounded-full border border-gray-200 hover:border-orange-900 transition duration-200">
                            <img src="saturn-assets/images/instagram-photos/right-arrow.svg" alt="" />
                        </button>
                        <div className="px-6">
                            <div className="flex -mx-4">
                                {[1, 2, 3, 4].map((post) => (
                                    <div key={post} className="w-full md:w-1/3 lg:w-1/4 px-4">
                                        <a className="group block max-w-sm mx-auto md:max-w-none h-full border border-gray-100 bg-white rounded-xl transform hover:scale-105 transition duration-500" href="#">
                                            <div className="flex items-center justify-between px-4 py-5">
                                                <span className="text-sm">@insta_profile</span>
                                                <img src="saturn-assets/images/instagram-photos/icon-instagram.svg" alt="" />
                                            </div>
                                            <div className="h-72">
                                                <img className="block w-full h-full" src="saturn-assets/images/instagram-photos/photos-insta-color3.png" alt="" />
                                            </div>
                                            <div className="px-4 pt-4 pb-5">
                                                <span className="block text-sm tetx-gray-800 mb-2.5">This is example post</span>
                                                <div className="flex items-center">
                                                    <img className="mr-1.5" src="saturn-assets/images/instagram-photos/heart-icon.svg" alt="" />
                                                    <span className="text-sm text-gray-500">{12+","+String(Math.random()).slice(15)}</span>
                                                </div>
                                            </div>
                                        </a>
                                    </div>))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default Instagram;