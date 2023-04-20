import ShadowCursor from "@/app/api/cursor/Cursor";
import { Cart } from "@/app/components/cart/Cart";
import { NoLayout } from "@/app/components/layout/NoLayout";

export default function Store() {
    return (
        <NoLayout>
            <ShadowCursor/>
            <Cart />
        </NoLayout>
    )
}
