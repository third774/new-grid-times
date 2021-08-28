import React from "react";
import styled, { css } from "styled-components/macro";

import { MAIN_STORY, OPINION_STORIES, SECONDARY_STORIES } from "../../data";

import SectionTitle from "../SectionTitle";
import MainStory from "../MainStory";
import SecondaryStory from "../SecondaryStory";
import OpinionStory from "../OpinionStory";
import Advertisement from "../Advertisement";
import { QUERIES } from "../../constants";

const MainStoryGrid = () => {
  return (
    <Wrapper>
      <MainStorySection>
        <MainStory {...MAIN_STORY} />
      </MainStorySection>

      <SecondaryStorySection>
        <SecondaryStoryList>
          {SECONDARY_STORIES.map((story, index) => (
            <SecondaryStory key={story.id} {...story} />
          ))}
        </SecondaryStoryList>
      </SecondaryStorySection>

      <OpinionSection>
        <SectionTitle>Opinion</SectionTitle>
        <OpinionStoryList>
          {OPINION_STORIES.map((story, index) => (
            <OpinionStory key={story.id} {...story} />
          ))}
        </OpinionStoryList>
      </OpinionSection>

      <AdvertisementSection>
        <Advertisement />
      </AdvertisementSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  --gap: 48px;
  display: grid;
  grid-template-areas:
    "main-story"
    "secondary-stories"
    "opinion-stories"
    "advertisement";
  gap: var(--gap);
  margin-bottom: 48px;

  @media ${QUERIES.tabletAndUp} {
    grid-template-areas:
      "main-story      main-story      secondary-stories"
      "opinion-stories opinion-stories opinion-stories"
      "advertisement   advertisement   advertisement";
  }

  @media ${QUERIES.laptopAndUp} {
    grid-template-areas:
      "main-story secondary-stories opinion-stories"
      "main-story advertisement     advertisement";
    grid-template-columns: 5fr 4fr 3fr;
  }
`;

const MainStorySection = styled.section`
  grid-area: main-story;
  position: relative;

  @media ${QUERIES.tabletAndUp} {
    :after {
      content: "";
      position: absolute;
      background: var(--color-gray-300);
      width: 1px;
      top: 0;
      right: calc(var(--gap) / -2);
      height: 100%;
    }
  }
`;

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;
  position: relative;

  @media ${QUERIES.laptopAndUp} {
    :after {
      content: "";
      position: absolute;
      background: var(--color-gray-300);
      width: 1px;
      top: 0;
      right: calc((var(--gap)) / -2);
      height: 100%;
    }
  }
`;

const horizontalLineDivider = css`
  > :not(:last-child) {
    position: relative;

    :after {
      content: "";

      height: 1px;
      background: var(--horizontal-line-divider-color);
      position: absolute;
      right: 0;
      bottom: calc((var(--gap)) / -2);
      left: 0;
    }
  }
`;

const StoryList = styled.div`
  --horizontal-line-divider-color: var(--color-gray-300);
  --gap: 32px;
  display: flex;
  flex-direction: column;
  gap: var(--gap);
  ${horizontalLineDivider}
`;

const SecondaryStoryList = styled(StoryList)`
  ${horizontalLineDivider}
`;

const OpinionStoryList = styled(StoryList)`
  ${horizontalLineDivider}

  @media ${QUERIES.tabletOnly} {
    --gap: 16px;
    --horizontal-line-divider-color: transparent;
    flex-direction: row;
    > * {
      flex: 1 1 0;
    }
  }
`;

const OpinionSection = styled.section`
  grid-area: opinion-stories;

  @media ${QUERIES.laptopAndUp} {
    margin-top: -8px;
  }
`;

const AdvertisementSection = styled.section`
  grid-area: advertisement;
  position: relative;

  @media ${QUERIES.tabletAndUp} {
    :after {
      content: "";
      position: absolute;
      background: var(--color-gray-300);
      height: 1px;
      top: calc(var(--gap) / -2);
      width: 100%;
    }
  }
`;

export default MainStoryGrid;
