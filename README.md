# LAND RUSH v1.0
브라우저에서 실행하는 땅따먹기 순위 게임입니다. 서버·계정·DB가 필요 없습니다.

## 실행
index.html을 열거나 이 폴더의 정적 파일을 GitHub Pages 루트에 올리세요. 별도 제공되는 단일 파일은 land-rush-v1.0.html입니다.

## 기능
- 2~500명, 같은 이름 합산, 1인 시작 땅1~100칸
- 고정300×180 지도, 무작위 연결 초기영토
- 점령전과 선택 가능한 공중폭격
- 1/2/4/8/10배속, 일시정지, 효과음/볼륨
- 참가자 추적, TOP10, 동시탈락 미니게임, 최종순위CSV
- 반응형 표시, 전체화면과 복귀
- 실제 광고/분석/외부 결제 연결 없음

## 배포
GitHub 저장소 루트에 index.html, style.css 및 JavaScript파일들을 올리고 Settings > Pages에서 main브랜치/(root)를 선택하세요. .nojekyll 포함.

## 테스트
node test.cjs
node test-labels.cjs
node test-standings.cjs
node test-commentary.cjs
node test-sound.cjs

첫 공개 버전 v1.0입니다. 기본 예시는 일반 참가자명이며 폭격 상세 설명은 경기규칙에서 확인할 수 있습니다. 모바일 실기기는 별도 검증이 필요합니다.
