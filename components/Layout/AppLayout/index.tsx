import Header from "@components/Navigation/Header";
import Head from "next/head";
import { Wrapper, Main } from "./styled";
import { Context } from "@contexts/Global/Context";
import { useContext } from "react";
import Modal from "@components/Overlays/Modal";

const AppLayout = ({ children, title }: Props) => {
  const { isModalOpen } = useContext(Context);

  return (
    <Wrapper opacity={isModalOpen ? 0.5 : 1}>
      <Head>
        <title>{title}</title>
      </Head>
      <Main>
        <Header />
        {isModalOpen && <Modal />}
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
