import Login from "../../components/Forms/Login";
import Page from "@/components/Page";
import HandleSubmissions from "@/components/Utils/HandleSubmissions";

export default function LoginPage() {
  return (
    <Page>
      <Login handleSubmissions={HandleSubmissions} />
    </Page>
  );
}
