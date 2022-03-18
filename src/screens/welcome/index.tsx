import React, { useState, useEffect, useCallback, Key } from "react";
import entry_background from "assets/entry_background.png";
import styled from "@emotion/styled";
import { Button, Typography, Input, List } from "antd";
// import VirtualList from "rc-virtual-list";

import { keyframes } from "@emotion/react";

import { useMount } from "utils";

const { Title, Link } = Typography;

enum EnterStatus {
  Static = 1,
  Enter,
  Recover,
}

const delay = 1;
// const ContainerHeight = 400;

// interface SessionType {
//   id: String;
//   block: number;
//   index: number;
// }

export default function UnauthenticatedApp() {
  const [entryFlg, setEntryFlg] = useState<EnterStatus>(EnterStatus.Static);
  const [inputDisplay, setInputDisplay] = useState<Boolean>(false);
  // const [sessions, setSessions] = useState<SessionType[]>([]);
  // const [showSessionList, setShowSessionList] = useState<Boolean>(false);

  // useMount(
  //   useCallback(() => {
  //     appendData();
  //   }, [])
  // );

  // TODO: Add Debounce for onClick
  useEffect(() => {
    if (entryFlg === EnterStatus.Enter) {
      setTimeout(() => {
        setInputDisplay(true);
        // setShowSessionList(true);
      }, delay * 650);
    } else if (entryFlg === EnterStatus.Recover) {
      setInputDisplay(false);
      // setShowSessionList(false);
    }
  }, [entryFlg]);

  // const appendData = () => {
  // fetch(`/archive/list`, {
  //   method: "GET",
  //   headers: {
  //     Accept: "application/json",
  //   },
  // })
  //   .then((res) => res.json())
  //   .then((body) => {
  //     let session_list = [];
  //     for (let key in body) {
  //       let item: SessionType = body[key];
  //       session_list.push(item);
  //     }
  //     setSessions(session_list);
  //   });
  // };

  // const onScroll = (e: any) => {
  //   if (e.target.scrollHeight - e.target.scrollTop === ContainerHeight) {
  //     appendData();
  //   }
  // };

  return (
    <Container>
      {entryFlg === EnterStatus.Static ? (
        <HostBackground
          onClick={() => {
            setEntryFlg(EnterStatus.Enter);
          }}
        />
      ) : entryFlg === EnterStatus.Enter ? (
        <>
          <HostEntryContainer
            onClick={() => setEntryFlg(EnterStatus.Recover)}
          />
        </>
      ) : (
        <HostRecoverContainer onClick={() => setEntryFlg(EnterStatus.Enter)} />
      )}

      {inputDisplay ? (
        <>
          <Link href="/defi" style={{ marginTop: "700px" }}>
            Defi Journal
          </Link>
          <Input
            placeholder="Search"
            addonAfter={
              <Button
                style={{
                  color: "black",
                  fontSize: "20px",
                  fontFamily: "MyFont",
                }}
                type="link"
                onClick={() => {}}
              >
                Search
              </Button>
            }
            size="large"
            style={{ width: "35%", marginTop: "20px" }}
          />
        </>
      ) : (
        <Title
          style={{ marginTop: "800px", fontSize: 60, fontFamily: "MyFont" }}
        >
          {" "}
          Welcome&nbsp;! &emsp; Click ⤴{" "}
        </Title>
      )}

      {/* {showSessionList && (
        <List style={{ marginTop: "50px", width: "50%" }}>
          <VirtualList
            data={sessions}
            height={ContainerHeight}
            itemHeight={20}
            itemKey="id"
            onScroll={onScroll}
          >
            {(item) => (
              <List.Item key={item.id as Key}>
                {`#Block: ${item.block} #Index: ${item.index}: Session Id = ${item.id}`}
              </List.Item>
            )}
          </VirtualList>
        </List>
      )} */}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;

const HostBackground = styled.div`
  position: absolute;
  margin-top: 250px;
  border: 4px solid #554236;
  border-radius: 8px;
  width: 1000px;
  height: 500px;
  background-repeat: no-repeat;
  background-position: 50% 0px;
  background-size: 1000px 600px;
  background-image: url(${entry_background});
  box-shadow: 0 1px 1px hsl(0deg 0% 0% / 0.075),
    0 2px 2px hsl(0deg 0% 0% / 0.075), 0 4px 4px hsl(0deg 0% 0% / 0.075),
    0 8px 8px hsl(0deg 0% 0% / 0.075), 0 16px 16px hsl(0deg 0% 0% / 0.075);
`;

const bounce = keyframes`
  from {
      transform: translate(0, 0);
  }
  to {
    transform: translate(0,-100px);
  }
`;

const HostEntryContainer = styled(HostBackground)`
  animation: ${bounce} 2s forwards;
`;

const bounceRecover = keyframes`
  from {
      transform: translate(0, -100px);
  }
  to {
    transform: translate(0, 0);
  }
`;

const HostRecoverContainer = styled(HostBackground)`
  animation: ${bounceRecover} ${delay}s forwards;
`;
