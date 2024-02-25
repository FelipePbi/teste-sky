import { useMemo } from "react";
import Container from "react-bootstrap/Container";

import Header from "../../components/Header/Header";
import Menu, { IMenu } from "../../components/Menu/Menu";
import MoviesTabContent from "./MoviesTabContent/MoviesTabContent";

import "./Home.scss";

function Home() {
  const menuOptionsTab: IMenu["tabs"] = useMemo(() => {
    return [
      {
        eventKey: "filmes",
        title: "Filmes",
        content: <MoviesTabContent />,
      },
      {
        eventKey: "series",
        title: "Séries",
        content: null,
      },
      {
        eventKey: "canais",
        title: "Canais",
        content: null,
      },
    ];
  }, []);

  return (
    <Container className="home-container">
      <Header />
      <Menu tabs={menuOptionsTab} defaultActiveKey="filmes" />
    </Container>
  );
}

export default Home;
