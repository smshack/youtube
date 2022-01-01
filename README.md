# 유튜브 프로젝트
1. 유튜브 api 키 사용
https://northern-breath-ec3.notion.site/2-4266d4b5bcc44a468363f4d2f3592aad

2. 비디오 목록 보여주기

3. 비디오 썸네일 타이틀 채널 목록 + css
https://cssmatic.com/

4. 검색 기능 구현하기

5. service 분리 
컴포넌트 안에서 네트워크 통신을 하는건 안좋다
```
유닛 테스트를 돌릴때 마다 네트워크 통신 발생
컴포넌트는 멍청하게 만들고 
네트워크 통신하는 부분은 따로 만들고 앱에다가 주입하는 식으로 사용하는게 좋음
dependency injection
```

6. config key 데이터 env 파일로 분리하기