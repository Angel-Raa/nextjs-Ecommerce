import { auth } from "@/auth.config";
import { redirect } from "next/navigation";

export default async function Profile() {
  const session = await auth();
  if (!session?.user) redirect("/");
  return <>{JSON.stringify(session.user, null)}</>;
}
