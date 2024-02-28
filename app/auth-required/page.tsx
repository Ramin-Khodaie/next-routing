import AuthRequired from "@/lib/exception";


const session = null;

export default function AuthRequiredPage() {
  if (!session) throw new AuthRequired();
  return <div>This is an Auth only page</div>;
}
