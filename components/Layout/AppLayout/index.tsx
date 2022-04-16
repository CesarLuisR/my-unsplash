import Header from "@components/Navigation/Header";
import Head from "next/head";
import { Wrapper, Main } from "./styled";
import { Context } from "@contexts/Global/Context";
import { useContext } from "react";

const AppLayout = ({ children, title }: Props) => {
  const { isModalOpen } = useContext(Context);

  return (
    <Wrapper opacity={isModalOpen}>
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
};

export default AppLayout;
