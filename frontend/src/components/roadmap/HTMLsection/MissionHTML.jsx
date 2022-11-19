import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { NavMissionIntoThree } from "../../../recoil/atoms";
import http from "../../../api/http";
import {getUserId} from "../../../api/JWT";

import {
  DescWrapper,
  MissTILWrapper,
  QuizWrapper,
  RefListWrapper,
} from "../Roadmap.style";
import RefList from "./RefList";
import { ListWrapper } from "./RoadList.style";
import { useNavigate } from "react-router-dom";

const defaultValue = {};
const MissionHTML = (prop = defaultValue) => {

  const misId = prop.mUId;
  const userId = getUserId();
  const navigate = useNavigate();
  const [mData, setMData] = useState(null);
  const [refData, setRefData] = useState(null);
  const [quizData, setQuizData] = useState(null);
  const [doneTilData, setDoneTilData] = useState(null);

  const [quizORct, setQuizOrCT] = useState(null);
  const [whichOne, setWhichOne] = useRecoilState(NavMissionIntoThree);
  const one = useRecoilValue(NavMissionIntoThree);

  useEffect(() => {
    getMissionData();
    getRefListData();
  }, []);

  useEffect(() => {}, [mData, refData, quizData, quizORct, doneTilData]);
  useEffect(() => {
    setQuizOrCT(prop.whichOne);
    setDoneTilData(prop.doneTilData);
  }, [prop]);

  useEffect(()=>{
    if(one === "tilSuccess"){
      console.log("이거 실행됐음?");
      getTilDone();
    }
  }, [one]);

  async function getMissionData() {
    await http.connect_axios
      .get(`/mission/uid?uid=${misId}`)
      .then((res) => {
        console.log(res);
        setMData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  async function getRefListData() {
    await http.connect_axios
      .get(`/reference?uid=${misId}`)
      .then((res) => {
        setRefData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  
  async function getTilDone() {
    await http.connect_axios
      .get(`/til/mission?id=${userId}&mUid=${misId}`)
      .then((res) => {
        setDoneTilData(res.data);
      })

      .catch((err) => console.log(err));
  }


  function goUp(prop) {
    setWhichOne(prop);

    if(prop === "code"){
      navigate(`/mission/${misId}/codeexam`);
    }
  }

  function goToTilPage(prop) {
    window.open(`${prop}`, "_blank");
  }

  return (
    <>
      <DescWrapper>
        {mData !== null ? (
          <>
            <div className="name">
              <h2>{mData.mname}</h2>
            </div>
            <div className="des">{mData.mdescription}</div>
          </>
        ) : (
          <div>데이터를 불러오는 중입니다.</div>
        )}
      </DescWrapper>
      <RefListWrapper>
        {refData !== null ? (
          <RefList refData={refData} />
        ) : (
          <div>데이터를 불러오는 중입니다.</div>
        )}
      </RefListWrapper>

      <MissTILWrapper>
        {doneTilData ? (
          <ListWrapper>
            <h2> 작성한 TIL</h2>
            <div
              className="doneTil"
              onClick={() => goToTilPage(doneTilData.link)}
            >
              {" "}
              {doneTilData.fileName}
            </div>
          </ListWrapper>
        ) : (          
          <div className="btn" onClick={() => goUp("til")}>
            TIL작성하기 <div className="dot"></div>
          </div>
        )}
      </MissTILWrapper>
      <QuizWrapper>
        {quizORct ? (
          <div className="btn" onClick={() => goUp("quiz")}>
            {" "}
            퀴즈 풀기 <div className="dot"></div>
          </div>
        ) : (
          <div className="btn" onClick={() => goUp("code")}>
            {" "}
            코드 풀기 <div className="dot"></div>
          </div>
        )}
      </QuizWrapper>
    </>
  );
};

export default MissionHTML;
