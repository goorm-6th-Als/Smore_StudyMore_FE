# 🍪 스모어 (Study-more!)
- Kakao x goorm 기업 연계 프로젝트 1조 알쓰조 <br>
- [배포 URL](http://ec2-43-202-238-3.ap-northeast-2.compute.amazonaws.com:3000)

<img width="600" alt="smore-poster-ver2" src="https://github.com/user-attachments/assets/f64e34f8-0997-41ec-9658-931b1346a2c6">

<br>

## 💡 프로젝트 개요
- <b>스터디 모집 및 참여 플랫폼</b>
- 구름톤 트레이닝 풀스택 과정 파이널 프로젝트
- 프론트엔드(2명), 백엔드(4명)

## 🎮 주요 기능
1. 카카오 로그인 기능
2. 스터디 생성 및 모집 기능
3. 출석하기 기능 
4. 캘린더 기능
5. 스터디 문제은행 기능
6. 목표 설정 기능
7. 스터디원 관리 기능
8. 웹 알림 기능

<br>
</div>

## <img src="https://github.com/user-attachments/assets/a6d0c6cc-d4a0-406c-834e-d8721a313806" alt="image" width="30"/> BackEnd 레포지토리
<a href="https://github.com/goorm-6th-Als/Smore_StudyMore_BE"> Smore_StudyMore_BE

</div>

<br>

##  🛠 아키텍처
![image](https://github.com/user-attachments/assets/f911955e-4735-441f-a52a-7327e648c85a)


## 📚 기술 스택
### BackEnd
|   **구분**   | **요소** |
| :----: | :----: |
| Language & Library|<img src="https://img.shields.io/badge/java-007396?style=flat-square&logo=openjdk&logoColor=white"/> <img src="https://img.shields.io/badge/springsecurity-6DB33F?style=flat-square&logo=springsecurity&logoColor=white"/> <img src="https://img.shields.io/badge/STOMP-6DB33F?style=flat-square&logo=stomp&logoColor=white"/> <img src="https://img.shields.io/badge/WebSocket-000000?style=flat-square&logo=websocket&logoColor=white"/> <img src="https://img.shields.io/badge/jwt-007396?style=flat-square&logo=jwt&logoColor=white"/> <img src="https://img.shields.io/badge/jpa-007396?style=flat-square&logo=jwt&logoColor=white"/>|
| build | <img src="https://img.shields.io/badge/Gradle-02303A?style=flat-square&logo=Gradle&logoColor=white"/>|
| DATABASE | <img src="https://img.shields.io/badge/MySQL-4479A1?style=flat-square&logo=MySQL&logoColor=white"/> <img width="58" src="https://img.shields.io/badge/rails-%23CC0000.svg?style=for-the-badge&logo=ruby-on-rails&logoColor=white"/> |
| Framework |  <img src="https://img.shields.io/badge/Spring-6DB33F?style=flat-square&logo=Spring&logoColor=white"/> <img src="https://img.shields.io/badge/springboot-6DB33F?style=flat-square&logo=springboot&logoColor=white"/>|
| AWS |  <img src="https://img.shields.io/badge/ec2-FF9900?style=flat-square&logo=amazonec2&logoColor=black"/> <img src="https://img.shields.io/badge/S3-FF9900?style=flat-square&logo=Amazon S3&logoColor=black"/> <img src="https://img.shields.io/badge/ROUTE 53-FF9900?style=flat-square&logo=amazonroute53&logoColor=black"/>|
| Http | <img src="https://img.shields.io/badge/Apache Tomcat-F8DC75?style=flat-square&logo=apachetomcat&logoColor=black"/> |
| TEST | <img src="https://img.shields.io/badge/Postman-FF6C37?style=flat-square&logo=Postman&logoColor=white"/> |
| etc | <img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=GitHub&logoColor=white"/> <img src="https://img.shields.io/badge/Jira-0052CC?style=flat-square&logo=jira&logoColor=white"/> <img src="https://img.shields.io/badge/IntelliJIDEA-000000?style=flat-square&logo=intellij-idea&logoColor=white"/> <img src="https://img.shields.io/badge/Notion-000000?style=flat-square&logo=notion&logoColor=white"/> <img src="https://img.shields.io/badge/Discord-000000?style=flat-square&logo=discord&logoColor=#5865F2"/> <img src="https://img.shields.io/badge/Figma-000000?style=flat-square&logo=figma&logoColor=#F24E1E"/>|

    

### FrontEnd
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black"/> <img src="https://img.shields.io/badge/react-20232a?style=flat-square&logo=react&logoColor=61DAFB"/> <img src="https://img.shields.io/badge/axios-5A29E4?style=flat-square&logo=axios&logoColor=white"/> <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white"/> <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white"/> <img src="https://img.shields.io/badge/Bootstrapap-7952B3?style=flat-square&logo=bootstrap&logoColor=white"/> <img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=GitHub&logoColor=white"/> 

## 3. 프로젝트 구조

<details> <summary> ⛏ ERD </summary>

    ![image](https://github.com/user-attachments/assets/624f2789-866c-4dc7-b970-162488845c97)
</details>

<details><summary>📂 파일 구조</summary>
    
```

├─build
│  ├─classes
│  │  └─java
│  │      └─main
│  │          └─com
│  │              └─als
│  │                  └─SMore
│  │                      ├─domain
│  │                      │  ├─entity
│  │                      │  └─repository
│  │                      ├─global
│  │                      │  └─json
│  │                      ├─log
│  │                      │  └─timeTrace
│  │                      ├─notification
│  │                      │  ├─controller
│  │                      │  ├─dto
│  │                      │  ├─repository
│  │                      │  └─service
│  │                      ├─study
│  │                      │  ├─attendance
│  │                      │  │  ├─controller
│  │                      │  │  ├─DTO
│  │                      │  │  │  ├─request
│  │                      │  │  │  └─response
│  │                      │  │  ├─service
│  │                      │  │  │  └─impl
│  │                      │  │  └─validator
│  │                      │  ├─calendar
│  │                      │  │  ├─controller
│  │                      │  │  ├─dto
│  │                      │  │  │  ├─request
│  │                      │  │  │  └─response
│  │                      │  │  ├─service
│  │                      │  │  │  └─impl
│  │                      │  │  └─validator
│  │                      │  ├─chatting
│  │                      │  │  ├─config
│  │                      │  │  ├─controller
│  │                      │  │  ├─DTO
│  │                      │  │  └─service
│  │                      │  ├─dashboard
│  │                      │  │  ├─controller
│  │                      │  │  ├─DTO
│  │                      │  │  ├─mapper
│  │                      │  │  └─service
│  │                      │  ├─enter
│  │                      │  │  ├─controller
│  │                      │  │  ├─DTO
│  │                      │  │  ├─mapper
│  │                      │  │  └─service
│  │                      │  ├─management
│  │                      │  │  ├─controller
│  │                      │  │  ├─DTO
│  │                      │  │  ├─mapper
│  │                      │  │  └─service
│  │                      │  ├─notice
│  │                      │  │  ├─controller
│  │                      │  │  ├─DTO
│  │                      │  │  ├─service
│  │                      │  │  └─validator
│  │                      │  ├─problem
│  │                      │  │  ├─controller
│  │                      │  │  ├─DTO
│  │                      │  │  │  ├─request
│  │                      │  │  │  │  ├─problem
│  │                      │  │  │  │  └─problemBank
│  │                      │  │  │  └─response
│  │                      │  │  │      ├─problem
│  │                      │  │  │      └─problemBank
│  │                      │  │  ├─service
│  │                      │  │  │  └─impl
│  │                      │  │  │      ├─problem
│  │                      │  │  │      └─problemBank
│  │                      │  │  └─validator
│  │                      │  ├─studyCRUD
│  │                      │  │  ├─controller
│  │                      │  │  ├─DTO
│  │                      │  │  ├─mapper
│  │                      │  │  ├─service
│  │                      │  │  └─utils
│  │                      │  └─todo
│  │                      │      ├─controller
│  │                      │      ├─DTO
│  │                      │      ├─mapper
│  │                      │      └─service
│  │                      └─user
│  │                          ├─login
│  │                          │  ├─config
│  │                          │  ├─controller
│  │                          │  ├─dto
│  │                          │  │  └─response
│  │                          │  ├─service
│  │                          │  └─util
│  │                          │      └─aop
│  │                          │          ├─annotation
│  │                          │          └─dto
│  │                          ├─mypage
│  │                          │  ├─config
│  │                          │  ├─controller
│  │                          │  ├─dto
│  │                          │  │  ├─request
│  │                          │  │  └─response
│  │                          │  └─service
│  │                          └─mystudy
│  │                              ├─controller
│  │                              ├─dto
│  │                              │  ├─request
│  │                              │  └─response
│  │                              └─service

 ```

</details>

<br>

## 팀원 구성

<div align="center">

|   **이름**   | **포지션** | **구분** | **Github** |   **이름**   | **포지션** | **구분** | **Github** |   **이름**   | **포지션** | **구분** |       **Github** |
| ---- | ---- | ---- | ------ | ---- | ---- | ---- | ------ | ---- | ---- | ---- | ------ |
| <div align="center"><img src="https://avatars.githubusercontent.com/u/96505736?v=4" width="50" height="50"/><br><b>김현빈</b></div> | <div align="center"><b>BE</b></div> | <div align="center"><b>팀장</b></div> | <div align="center"><b>[링크](https://github.com/khv9786)</b></div> | <div align="center"><img src="https://avatars.githubusercontent.com/u/108870712?v=4" width="50" height="50"/><br><b>강준수</b></div> | <div align="center"><b>BE</b></div> | <div align="center"><b>팀원</b></div> | <div align="center"><b>[링크](https://github.com/Kangjunesu)</b></div> | <div align="center"><img src="https://avatars.githubusercontent.com/u/104208670?v=4" width="50" height="50"/><br><b>이수지</b></div> | <div align="center"><b>FE</b></div> | <div align="center"><b>팀원</b></div> | <div align="center"><b>[링크](https://github.com/ssssuji)</b></div> |
| <div align="center"><img src="https://avatars.githubusercontent.com/u/75283640?v=4" width="50" height="50"/><br><b>박진수</b></div> | <div align="center"><b>BE</b></div> | <div align="center"><b>팀원</b></div> | <div align="center"><b>[링크](https://github.com/qkrwlstn1)</b></div> | <div align="center"><img src="https://avatars.githubusercontent.com/u/53739820?v=4" width="50" height="50"/><br><b>남수연</b></div> | <div align="center"><b>BE</b></div> | <div align="center"><b>팀원</b></div> | <div align="center"><b>[링크](https://github.com/namtndus)</b></div> | <div align="center"><img src="https://avatars.githubusercontent.com/u/109202222?v=4" width="50" height="50"/><br><b>서다영</b></div> | <div align="center"><b>FE</b></div> | <div align="center"><b>팀원</b></div> | <div align="center"><b>[링크](https://github.com/savedinstancestate)</b></div> |
</div>


## 4. 역할 분담
### BackEnd
![image](https://github.com/user-attachments/assets/7804068f-b445-493f-91e7-2cb7abe87ed9)
### FrontEnd
![image](https://github.com/user-attachments/assets/da995bc7-b7c3-40fb-bd58-2934769162fe)

