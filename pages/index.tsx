import ShadowCursor from "@/app/api/cursor/Cursor";
import { Layout } from "@/app/components/layout/Layout";
import { Main } from "@/app/components/main/Main";

export default function Index() {
  return (
    <Layout>
      <ShadowCursor/>
      <Main />
    </Layout>
  )
}
