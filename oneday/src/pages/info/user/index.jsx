import React from "react";
import { Link, Redirect, Route, Switch } from "react-router-dom";
import { useCookies } from "react-cookie";
import loadable from "@loadable/component";

import { Container, Nav } from "./styles";

const UserInfo = loadable(() => import("./user_info"));
const UserInfoModify = loadable(() => import("./user_info_modify"));
const UserReservation = loadable(() => import("./user_reservation"));
const UserReservationDetail = loadable(() =>
  import("./user_reservation_detail")
);
const UserQna = loadable(() => import("./user_qna"));
const UserQnaDetail = loadable(() => import("./user_qna_detail"));

const User = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);

  if (!cookies.token) {
    return <Redirect to="/" />;
  }

  return (
    <Container>
      <Nav>
        <Link to="/info">내 정보</Link>
        <Link to="/info/reservation">예약 내역</Link>
        <Link to="/info/qna">문의 내역</Link>
      </Nav>
      <div className="routes">
        <Switch>
          <Route exact path="/info" component={UserInfo} />
          <Route exact path="/info/modify" component={UserInfoModify} />
          <Route exact path="/info/reservation" component={UserReservation} />
          <Route
            exact
            path="/info/reservation/:id"
            component={UserReservationDetail}
          />
          <Route exact path="/info/qna" component={UserQna} />
          <Route exact path="/info/qna/:id" component={UserQnaDetail} />
        </Switch>
      </div>
    </Container>
  );
};

export default User;
