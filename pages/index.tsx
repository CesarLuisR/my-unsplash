import type { NextPage } from "next";
import AppLayout from "@components/Layout/AppLayout";
import HomeModule from "@modules/Home";
import Provider from "@contexts/Global/Provider";

const Home: NextPage = () => {
  return (
    <Provider>
      <AppLayout title="Home">
        <HomeModule />
      </AppLayout>
    </Provider>
  );
};

export default Home;
