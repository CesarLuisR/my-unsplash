import Header from "@components/Navigation/Header";
import Head from "next/head";
import { Wrapper, Main } from "./styled";

const AppLayout = ({ children, title, opacity }: Props) => {
  return (
    <Wrapper opacity={opacity}>
      <Head>
        <title>{title}</title>
      </Head>
      <Main>
        <Header />
        {children}
      </Main>
    </Wrapper>
  );
};

type Props = {
  children: React.ReactNode;
  title: string;
  opacity?: boolean;
};

export default AppLayout;
