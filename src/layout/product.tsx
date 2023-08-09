import { Fragment } from "react"
import { Outlet } from "react-router-dom"
import ProductTab from "../components/layout/product/ProductTab"

const ProductNav = () => {
    return(
        <Fragment>
            <ProductTab />
            <Outlet />
        </Fragment>
    )
}

export default ProductNav;