import ProductDetails from "../page/ProductDetails";
import ProductOverview from "../page/ProductOverview";
import ProductReviews from "../page/ProductReviews";
import RelatedProduct from "../page/RelatedProduct";

type ProductSlotProps = {
    slotName: string | null;
};

const ProductSlot: React.FC<ProductSlotProps> = ({ slotName }) => {
    switch (slotName) {
        case 'productOverview':
            return <ProductOverview />;
        case 'productDetails':
            return <ProductDetails />;
        case 'relatedProducts':
            return <RelatedProduct />;
        case 'productReviews':
            return <ProductReviews />;
        default:
            return null; // You can handle a default case or render something else if needed
    }
}

export default ProductSlot;