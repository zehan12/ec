import { NavLink } from "react-router-dom";

const tabs = [
    { name: 'overview', href: '/product/:productID', current: false },
    { name: 'product details', href: 'details', current: false },
    { name: 'related product', href: 'related', current: false },
    { name: 'product reviews', href: 'reviews', current: true },
]


function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}

const ProductTab = () => {
    return (
        <div>
            <div className="sm:hidden">
                {/* moblie  */}
            </div>
            <div className="hidden sm:block">
                <div className="border-b border-gray-200">
                    <nav>
                        <ul className="-mb-px flex">
                            {tabs.map((tab) => (
                                <NavLink
                                    className="w-screen"
                                    to={tab.href}
                                    end
                                >
                                    {({ isActive }) => (
                                        <li
                                            key={tab.name}
                                            className={`${isActive
                                                ? 'border-indigo-500 text-indigo-600'
                                                : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'

                                                } border-b-2 py-4 px-1 text-center text-sm font-medium
                                                `}
                                        >
                                            {tab.name}
                                        </li>
                                    )}
                                </NavLink>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default ProductTab;