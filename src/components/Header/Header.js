import React from "react";
import styled from "styled-components/macro";
import { Menu, Search, User } from "react-feather";

import { QUERIES } from "../../constants";

import MaxWidthWrapper from "../MaxWidthWrapper";
import Logo from "../Logo";
import Button from "../Button";

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <TabletAndUpMenuButtons>
          <button>
            <Search size={24} />
          </button>
          <button>
            <Menu size={24} />
          </button>
        </TabletAndUpMenuButtons>
        <Logo />
        <SubscriberButtons>
          <Button>Subscribe</Button>
          <AlreadySubscriberButton>
            Already a subscriber?
          </AlreadySubscriberButton>
        </SubscriberButtons>
      </MainHeader>
    </header>
  );
};

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;

  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const TabletAndUpActionGroup = styled(ActionGroup)`
  display: none;

  @media ${QUERIES.laptopAndUp} {
    display: flex;
  }
`;

const TabletAndUpMenuButtons = styled(TabletAndUpActionGroup)`
  width: 124px;
`;

const SubscriberButtons = styled(TabletAndUpActionGroup)`
  justify-self: end;
  align-self: center;
  position: relative;

  @media ${QUERIES.laptopAndUp} {
    display: block;
  }
`;

const AlreadySubscriberButton = styled.a`
  position: absolute;
  text-decoration: underline;
  font-style: italic;
  font-size: 0.75rem;
  text-align: center;
  width: 100%;
  margin-top: 8px;
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: grid;
  place-items: center;
  margin-top: 32px;
  margin-bottom: 48px;

  @media ${QUERIES.tabletAndUp} {
    margin-top: 48px;
    margin-bottom: 72px;
  }

  @media ${QUERIES.laptopAndUp} {
    place-items: revert;
    grid-template-columns: 1fr auto 1fr;
    margin-top: 16px;
    margin-bottom: 72px;
  }
`;

export default Header;
