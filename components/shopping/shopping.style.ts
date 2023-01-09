import styled from 'styled-components';
import { Button } from 'antd';

export const StyledContainer = styled.section`
  padding: 1rem;
  width: 80%;
  margin: 0 auto;
  height: 100vh;
`;

export const StyledHeader = styled.header`
  width: 100%;
  text-align: center;
  & h2 {
    font-size 24;
  };
`;

export const StyleText = styled.p `
`
export const StyleTextLine = styled.div `
  display: flex;
  justify-content: space-around;
`

export const StyleBetween = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  & > p {
    border: 1px solid;
    border-radius: 50px;
    width: 60px;
    height: 60px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    : hover {
      cursor: pointer;
    }
  }
`;

export const BlockDetails = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: white;
  padding: 20px;
`;

export const StyledBody = styled.section`
  width: 100%;
  
`;

export const StyledRow2 = styled.section`
  display: flex;
  justify-content: space-between;

  & .ant-row {
    flex-flow: row nowrap;
  };

  & svg {
    margin-top: 10px;
    width: 18px;
    height: 18px;
  }

  @media only screen and (max-width: 768px) {
    display: block;
  }
`;

export const StyledRow1 = styled.section`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
  @media only screen and (max-width: 768px) {
    display: block;
  }
`;

export const StyledFilterPrice = styled.div`
  margin-right: 0;
`;

export const SideBar = styled.div`
  margin-right: 0;
  width: 100%;
  height: 50px;
  font-size: 25px;
  color: ghostwhite;
  display: flex;
  margin-bottom: 40px;
  justify-content: space-between;
  & > p {
    border: 1px solid #eee;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: white;
    color: black;
    cursor: pointer;
  }
`;

export const StyledJobsOverview = styled.section`
  position: relative;
  border-radius: 8px;
  width: 49vw;
  max-height: 50vh;
  max-width: 50%;
  background-color: white;

  & canvas {
    margin-bottom: 20px;
    max-height: 80%;
    width: 100%;
  }

  @media only screen and (max-width: 768px) {
    min-width: 100%;
    margin-right: 1rem;
  }
`;

export const StyledTodaysEvents = styled.section`
  border-radius: 8px;
  width: 49%; 
  max-height: 50vh; 
  max-width: 50%;
  background-color: white;


  & canvas {
    max-height: 400px;
    width: 100%;
  }

  @media only screen and (max-width: 768px) {
    min-width: 100%;
    margin-top: 1rem;
  }
`;

export const StyledTasks = styled.section`
  border-radius: 8px;
  width: 32.3%;
  max-height: 50vh;
  background-color: white;
  padding: 1rem;
  overflow: auto;

  & .ant-divider-horizontal {
    margin: 0;
  }

  @media only screen and (max-width: 768px) {
    min-width: 100%;
  }
  .ant-avatar {
    border-radius: 25%;
  }
  .ant-avatar img {
    border-radius: 0%;
    object-fit: contain;
    height: 21px;
    font-weight: 21px;
  }
`;

export const StyledNotes = styled.section`
  border-radius: 8px;
  width: 32.3%;
  max-height: 50vh;
  background-color: white;
  padding: 1rem;

  & .ant-divider-horizontal {
    margin: 0;
  }

  @media only screen and (max-width: 768px) {
    min-width: 100%;
    margin-top: 1rem;
  }
`;

export const StyledAssignedProperties = styled.section`
  border-radius: 8px;
  width: 32.3%;
  max-height: 50vh;
  background-color: white;
  padding: 1rem;
  overflow-y: auto;
   
  & .ant-divider-horizontal {
    margin: 0;
  }

  @media only screen and (max-width: 768px) {
    min-width: 100%;
    margin-top: 1rem;
  }
  .ant-avatar {
    background-color: transparent;
  }
  .ant-avatar img {
    filter: invert(50%) sepia(70%) saturate(5000%) hue-rotate(360deg) brightness(105%) contrast(125%);
  }
`;

export const StyledWelcomeMessage = styled.h2`
  padding-bottom: 20px;
`;

export const StyledHoldingWelcomeMessage = styled.h1`
  color: white;
  text-transform: uppercase;
`;


export const StyledHoldingBody = styled(StyledBody)`
  margin-top: 40px;
  padding: 0 15%;
`;

export const StyledHoldingMessage = styled.h1`
`;

export const StyledDiv = styled.div`
  display: flex;
  margin-bottom: 30px;
  flex-direction: row;
  justify-content: flex-start;
`;

export const StyledDivMargin = styled.div`
  display: flex;
  margin-bottom: 30px;
  flex-direction: row;
  margin-right: 25px;
  margin-top: 5px;
  width: 100%;
  justify-content: space-around;
`;

export const StyledDivRoot = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;


export const StyledBlockPrice = styled(StyledHoldingMessage)`
  font-size: 15px;
  color: black;
  width: 100%;
`;

export const StyledBlockAdd = styled(Button)`
`;

export const MockWalletStyle = styled.div`
`;

export const StyleBockButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const StyledBlockAddFilter = styled(Button)`
  color: #ffffff;
  & :not(:disabled):hover {
    color: #ffffff
  }
  :hover {
    color: #ffffff!important
  }
`;

export const StyledBlockMenu = styled.div`
  background-color: white;
  border-radius: 8px;
  width: 40%;
  padding: 40px;
  position: relative;
  cursor: pointer;
  text-align: center;
  flex: 0.5;
`;

export const StyledSubMenuMessage = styled.p`
    color: black;
`;

export const StyledHoldingRow = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: flex-start;;
  gap: 30px;
  flex-direction: row;
  flex-wrap: wrap;
  & > div {
    max-width: 220px;
    min-width: 220px;
    height: 300px;
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;
