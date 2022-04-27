import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CabiIcon } from "../components/CabiIcon";
import { Container } from "../components/Container";
import { userInfo } from "./Main";
// import Menu from "../component/Menu";
// import Carousel from "../component/Carousel";
// import Location from "../component/Location";
// import LentModal from "../modal/LentModal";
// import ContentsModal from "../modal/ContentsModal";
// import EventModal from "../modal/EventModal";
// import "./lent.css";
import "./main.css";

export default function Lent() {
  return (
    <Container>
      <CabiIcon src={"./img/cabinet.ico"} />
    </Container>
  );
}
