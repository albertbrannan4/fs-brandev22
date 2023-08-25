import LoginForm from "@/components/LoginForm";
import Page from "@/components/Page";
import HandleSubmissions from "@/components/Utils/HandleSubmissions";

const LoginPage = () => {
  return (
    <Page>
      <LoginForm handleSubmissions={HandleSubmissions} />
    </Page>
  );
};

export default LoginPage;
