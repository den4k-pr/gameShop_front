import ShadowCursor from "@/app/api/cursor/Cursor";
import { Layout } from "@/app/components/layout/Layout";
import { StoreMarket } from "@/app/components/store/Store";

export default function Store() {
  return (
    <Layout>
      <ShadowCursor/>
      <StoreMarket />
    </Layout>
  )
}
