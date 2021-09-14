import React, { useCallback } from "react";
import { Switch, Route, Link } from "react-router-dom";
import loadable from "@loadable/component";
import { useCookies } from "react-cookie";
import { Container, Logo, Sign, Nav } from "./styles";

const Main = loadable(() => import("../pages/main"));
const Info = loadable(() => import("../pages/info"));
const Category = loadable(() => import("../pages/category"));
const Product = loadable(() => import("../pages/product"));
const Reservation = loadable(() => import("../pages/reservation"));

const Layout = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);

  const onClickLogout = useCallback(() => {
    console.log(cookies);
    if (cookies.token) {
      removeCookie("token", { path: "/" });
    }
  }, []);

  return (
    <Container>
      <Logo>
        <Link to="/">로고</Link>
      </Logo>
      <Sign>
        {cookies.token ? (
          <>
            <Link to="/info">내 정보</Link>
            <Link to="/" onClick={onClickLogout}>
              로그아웃
            </Link>
          </>
        ) : (
          <>
            <Link to="/signup">회원가입</Link>
            <Link to="/login">로그인</Link>
          </>
        )}
      </Sign>
      <Nav>
        <div>
          <Link to="/category/all">전체</Link>
          <Link to="/category/flower">플라워</Link>
          <Link to="/category/art">미술</Link>
          <Link to="/category/cooking">요리</Link>
          <Link to="/category/handmade">수공예</Link>
          <Link to="/category/activity">액티비티</Link>
          <Link to="/category/etc">기타</Link>
        </div>
      </Nav>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/info" component={Info} />
        <Route path="/category/:category" component={Category} />
        <Route path="/product/:product" component={Product} />
        <Route path="/reservation" component={Reservation} />
      </Switch>
    </Container>
  );
};

export default Layout;
