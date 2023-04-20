import ShadowCursor from "@/app/api/cursor/Cursor";
import { AuthComponent } from "@/app/components/auth/AuthComponent";

export default function AuthPage() {
    return (
        <>
            <ShadowCursor/>
            <AuthComponent />
        </>
    )
}