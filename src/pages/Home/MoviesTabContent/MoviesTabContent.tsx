import { memo, useEffect, useMemo } from "react";
import Container from "react-bootstrap/Container";
import Skeleton from "react-loading-skeleton";

import HeaderCarousel, { IHeaderCarousel } from "../../../components/HeaderCarousel/HeaderCarousel";
import { useTopRated } from "../../../hooks/useTopRated";
import Section from "../../../components/Section/Section";

import "./MoviesTabContent.scss";

function HomeTabContent() {
  const { data, isLoading } = useTopRated();
  useEffect(() => {
    console.log("render");
  }, []);

  const normalizeTopRatedToHeaderCarousel: IHeaderCarousel["items"] = useMemo(
    () =>
      data.map(({ id, primaryImage }) => ({
        imageUrl: primaryImage.url,
        imageAlt: primaryImage.caption.plainText,
        id,
      })),
    [data]
  );

  const showSections = normalizeTopRatedToHeaderCarousel.length > 0 && !isLoading;

  console.log("showSections", showSections);

  const sectionsList = useMemo(() => {
    return [
      {
        title: "Os mais temidos",
        keyword: "terror",
      },
      {
        title: "Cinema nacional",
        keyword: "disney",
      },
      {
        title: "DC comics",
        keyword: "dc comics",
      },
      {
        title: "Marvel",
        keyword: "marvel",
      },
    ].map((props) => <Section key={props.title} {...props} showSections={showSections} />);
  }, [showSections]);

  return (
    <Container className="tab-content-container">
      {(!showSections && (
        <div className="skeleton-header">
          <Skeleton count={3} inline />
        </div>
      )) || <HeaderCarousel items={normalizeTopRatedToHeaderCarousel} />}

      {sectionsList}
    </Container>
  );
}

export default memo(HomeTabContent);
