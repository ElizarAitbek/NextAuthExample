import { GoogleButton } from "@/components/GoogleButton";
import { SigninForm } from "@/components/SigninForm";

export default async function Signin() {
  return (
    <div className="stack">
      Вход через Google временно не недоступен
      <h1>Sign in</h1>
      <SigninForm />
      <span>попробуйте: admin@mail.kg | 12345</span>
    </div>
  );
}
