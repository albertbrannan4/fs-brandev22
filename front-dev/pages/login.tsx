import Login from "@/components/Login";
import Page from "@/components/Page";
import HandleSubmissions from "@/components/Utils/HandleSubmissions";

const LoginPage = () => {
  return (
    <Page>
      <Login handleSubmissions={HandleSubmissions} />
    </Page>
  );
};

export default LoginPage;
