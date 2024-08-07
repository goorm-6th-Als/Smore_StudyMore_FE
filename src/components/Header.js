import React, { useRef, useState, useEffect } from "react";
import Cookies from "js-cookie";
import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";
import "../styles/StudyCard.css";
import Modal from "./Modal";
import Login from "../pages/LoginPage/LoginModal";
import CreateStudyModal from "../pages/HomePage/CreateStudyModal";
import { useHeaderStudyName } from "./StudyNameContext";
import { useAuth } from "./AuthContext";
import NotificationComponent from "./NotificationModal";
import logoImage from "./smore-logo-ver1.png";
import notificationIcon from "./notification.png";
import EventSourcePolyfill from 'eventsource-polyfill';

const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
  z-index: 100;
`;

const HeaderContainer = styled.header`
  background-color: #fff;
  padding: 20px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
  z-index: 1000;
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1000px;
`;

const NavContainer = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  marginRight: "25px",
};

const Logo = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
`;

const LogoImage = styled.img`
  height: 40px;
  margin-right: 10px;
`;

const NavLinks = styled.nav`
  text-align: right;
  width: 100%;
  margin-bottom: 0px;

  a {
    margin: 0 10px;
    text-decoration: none;
    color: #333;
    font-weight: bold;
    font-size: 15px;
    cursor: pointer;

    &:last-child {
      margin-right: 0;
    }
  }
  .active {
    color: #009063;
  }
`;

const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 20px;
  background-color: #f3f9f7;
`;

const PageTitle = styled.h1`
  font-size: 30px;
  color: black;
  font-weight: 700;
`;

const LoginButton = styled.button`
  padding: 8px 18px;
  background-color: #009063;
  color: white;
  font-size: 15px;
  font-weight: 600 !important;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  margin-left: 10px;
`;

const NotificationButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  position: relative;
`;

const NotificationIcon = styled.img`
  width: 22px;
`;

const NotificationBadge = styled.span`
  position: absolute;
  top: -5px;
  right: -5px;
  background-color: #009063;
  border-radius: 50%;
  padding: 2px 2px;
`;

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  const location = useLocation();
  const { headerStudyName } = useHeaderStudyName();
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [notificationPosition, setNotificationPosition] = useState({
    top: 0,
    left: 0,
  });
  const notificationButtonRef = useRef(null);

  useEffect(() => {
    const accessToken = Cookies.get("accessToken");
    if (!accessToken) {
      console.log("액세스 토큰을 사용할 수 없습니다. SSE 연결을 설정할 수 없습니다.");
      return;
    }

    let eventSource;

    const connectEventSource = () => {
      eventSource = new EventSourcePolyfill(
        `${process.env.REACT_APP_AUTH_URL}/subscribe/notification?Bearer=${accessToken}`
      );

      eventSource.onopen = () => {
        console.log("SSE 연결 성공");
      };

      eventSource.addEventListener("sse", (event) => { // 'sse' 이벤트 처리
        console.log("Received sse event:", event.data);
        try {
          const parsedData = JSON.parse(event.data);
          setNotifications(prev => [...prev, parsedData.Content]); // 새로운 알림 추가
        } catch (error) {
          console.error("Failed to parse event data:", error);
        }
      });

      eventSource.onerror = (err) => {
        console.error("EventSource failed:", err);
        eventSource.close();
        setTimeout(() => {
          console.log("재연결 시도 중...");
          connectEventSource();
        }, 5000);
      };
    };

    connectEventSource();

    return () => {
      if (eventSource) {
        eventSource.close();
      }
    };
  }, []);

  const updateNotificationPosition = () => {
    if (notificationButtonRef.current) {
      const rect = notificationButtonRef.current.getBoundingClientRect();
      setNotificationPosition({ top: rect.bottom, left: rect.left - 270 });
    }
  };

  const toggleNotificationModal = () => {
    updateNotificationPosition();
    setIsNotificationOpen(!isNotificationOpen);
  };

  useEffect(() => {
    window.addEventListener("resize", updateNotificationPosition);
    return () => {
      window.removeEventListener("resize", updateNotificationPosition);
    };
  }, []);

  useEffect(() => {
    const checkLoginStatus = () => {
      const token = Cookies.get("accessToken");
      setIsLoggedIn(!!token);
    };

    checkLoginStatus();
  }, [location]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleCloseNotificationModal = () => {
    setIsNotificationOpen(false);
  };

  const renderPageTitle = () => {
    if (currentLocation.pathname.startsWith("/study")) {
      return headerStudyName || "스터디 로딩 중...";
    }
    switch (currentLocation.pathname) {
      case "/":
        return "Study More";
      case "/mystudy":
        return "내 스터디";
      case "/mypage":
        return "마이페이지";
      case "/login":
        return "로그인";
      default:
        return "";
    }
  };

  return (
    <>
      <HeaderWrapper>
        <HeaderContainer>
          <HeaderContent>
            <Logo to="/">
              <LogoImage src={logoImage} alt="Logo" />
            </Logo>
            <div style={NavContainer}>
              <NavLinks>
                <NavLink exact to="/" activeClassName="active">
                  홈
                </NavLink>
                {isLoggedIn ? (
                  <>
                    <NavLink to="/mystudy" activeClassName="active">
                      내 스터디
                    </NavLink>
                    <NavLink to="/mypage" activeClassName="active">
                      마이페이지
                    </NavLink>
                    <NotificationButton
                      ref={notificationButtonRef}
                      onClick={toggleNotificationModal}
                    >
                      <NotificationIcon
                        src={notificationIcon}
                        alt="Notifications"
                      />
                      {notifications.length > 0 && (
                        <NotificationBadge>
                          {notifications.length}
                        </NotificationBadge>
                      )}
                    </NotificationButton>
                    <CreateStudyModal />
                  </>
                ) : (
                  <LoginButton onClick={handleOpenModal}>로그인</LoginButton>
                )}
              </NavLinks>
            </div>
          </HeaderContent>
        </HeaderContainer>
        <TitleContainer>
          <PageTitle>{renderPageTitle()}</PageTitle>
        </TitleContainer>
      </HeaderWrapper>

      <Modal show={isModalOpen} handleClose={handleCloseModal} title="로그인">
        <Login />
      </Modal>

      <NotificationComponent
        show={isNotificationOpen}
        handleClose={handleCloseNotificationModal}
        position={notificationPosition}
        notifications={notifications}
      />
    </>
  );
};

export default Header;
