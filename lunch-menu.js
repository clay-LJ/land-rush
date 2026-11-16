// Everyday lunch choices in Korea; cuisine tags are practical groupings, not origin claims.
const LUNCH_DATA=[
  {
    "id": "lunch-001",
    "name": "김치찌개",
    "tags": [
      "한식",
      "국물"
    ],
    "special": {
      "veganCandidate": false,
      "lighterMealCandidate": false
    },
    "conditions": [],
    "mealSuggestion": ""
  },
  {
    "id": "lunch-002",
    "name": "된장찌개",
    "tags": [
      "한식",
      "국물"
    ],
    "special": {
      "veganCandidate": false,
      "lighterMealCandidate": false
    },
    "conditions": [],
    "mealSuggestion": ""
  },
  {
    "id": "lunch-003",
    "name": "순두부찌개",
    "tags": [
      "한식",
      "국물"
    ],
    "special": {
      "veganCandidate": false,
      "lighterMealCandidate": false
    },
    "conditions": [],
    "mealSuggestion": ""
  },
  {
    "id": "lunch-004",
    "name": "부대찌개",
    "tags": [
      "한식",
      "국물",
      "고기"
    ],
    "special": {
      "veganCandidate": false,
      "lighterMealCandidate": false
    },
    "conditions": [],
    "mealSuggestion": ""
  },
  {
    "id": "lunch-005",
    "name": "청국장",
    "tags": [
      "한식",
      "국물"
    ],
    "special": {
      "veganCandidate": false,
      "lighterMealCandidate": false
    },
    "conditions": [],
    "mealSuggestion": ""
  },
  {
    "id": "lunch-006",
    "name": "동태찌개",
    "tags": [
      "한식",
      "국물",
      "해산물"
    ],
    "special": {
      "veganCandidate": false,
      "lighterMealCandidate": false
    },
    "conditions": [],
    "mealSuggestion": ""
  },
  {
    "id": "lunch-007",
    "name": "순댓국",
    "tags": [
      "한식",
      "국물",
      "고기"
    ],
    "special": {
      "veganCandidate": false,
      "lighterMealCandidate": false
    },
    "conditions": [],
    "mealSuggestion": ""
  },
  {
    "id": "lunch-008",
    "name": "돼지국밥",
    "tags": [
      "한식",
      "국물",
      "고기"
    ],
    "special": {
      "veganCandidate": false,
      "lighterMealCandidate": false
    },
    "conditions": [],
    "mealSuggestion": ""
  },
  {
    "id": "lunch-009",
    "name": "콩나물국밥",
    "tags": [
      "한식",
      "국물",
      "채소"
    ],
    "special": {
      "veganCandidate": false,
      "lighterMealCandidate": false
    },
    "conditions": [],
    "mealSuggestion": ""
  },
  {
    "id": "lunch-010",
    "name": "뼈해장국",
    "tags": [
      "한식",
      "국물",
      "고기"
    ],
    "special": {
      "veganCandidate": false,
      "lighterMealCandidate": false
    },
    "conditions": [],
    "mealSuggestion": ""
  },
  {
    "id": "lunch-011",
    "name": "선지해장국",
    "tags": [
      "한식",
      "국물",
      "고기"
    ],
    "special": {
      "veganCandidate": false,
      "lighterMealCandidate": false
    },
    "conditions": [],
    "mealSuggestion": ""
  },
  {
    "id": "lunch-012",
    "name": "설렁탕",
    "tags": [
      "한식",
      "국물",
      "고기"
    ],
    "special": {
      "veganCandidate": false,
      "lighterMealCandidate": false
    },
    "conditions": [],
    "mealSuggestion": ""
  },
  {
    "id": "lunch-013",
    "name": "곰탕",
    "tags": [
      "한식",
      "국물",
      "고기"
    ],
    "special": {
      "veganCandidate": false,
      "lighterMealCandidate": false
    },
    "conditions": [],
    "mealSuggestion": ""
  },
  {
    "id": "lunch-014",
    "name": "갈비탕",
    "tags": [
      "한식",
      "국물",
      "고기"
    ],
    "special": {
      "veganCandidate": false,
      "lighterMealCandidate": false
    },
    "conditions": [],
    "mealSuggestion": ""
  },
  {
    "id": "lunch-015",
    "name": "육개장",
    "tags": [
      "한식",
      "국물",
      "고기"
    ],
    "special": {
      "veganCandidate": false,
      "lighterMealCandidate": false
    },
    "conditions": [],
    "mealSuggestion": ""
  },
  {
    "id": "lunch-016",
    "name": "삼계탕",
    "tags": [
      "한식",
      "국물",
      "고기"
    ],
    "special": {
      "veganCandidate": false,
      "lighterMealCandidate": false
    },
    "conditions": [],
    "mealSuggestion": ""
  },
  {
    "id": "lunch-017",
    "name": "추어탕",
    "tags": [
      "한식",
      "국물",
      "해산물"
    ],
    "special": {
      "veganCandidate": false,
      "lighterMealCandidate": false
    },
    "conditions": [],
    "mealSuggestion": ""
  },
  {
    "id": "lunch-018",
    "name": "백반",
    "tags": [
      "한식",
      "밥"
    ],
    "special": {
      "veganCandidate": false,
      "lighterMealCandidate": false
    },
    "conditions": [],
    "mealSuggestion": ""
  },
  {
    "id": "lunch-019",
    "name": "비빔밥",
    "tags": [
      "한식",
      "밥",
      "채소"
    ],
    "special": {
      "veganCandidate": false,
      "lighterMealCandidate": true
    },
    "conditions": [
      "가볍게 먹기 후보입니다. 밥·빵의 양, 소스와 드레싱, 토핑에 따라 달라지므로 주문 시 확인하세요."
    ],
    "mealSuggestion": ""
  },
  {
    "id": "lunch-020",
    "name": "보리밥",
    "tags": [
      "한식",
      "밥",
      "채소"
    ],
    "special": {
      "veganCandidate": false,
      "lighterMealCandidate": false
    },
    "conditions": [],
    "mealSuggestion": ""
  },
  {
    "id": "lunch-021",
    "name": "쌈밥",
    "tags": [
      "한식",
      "밥",
      "채소"
    ],
    "special": {
      "veganCandidate": false,
      "lighterMealCandidate": false
    },
    "conditions": [],
    "mealSuggestion": ""
  },
  {
    "id": "lunch-022",
    "name": "볶음밥",
    "tags": [
      "한식",
      "중식",
      "밥"
    ],
    "special": {
      "veganCandidate": false,
      "lighterMealCandidate": false
    },
    "conditions": [],
    "mealSuggestion": ""
  },
  {
    "id": "lunch-023",
    "name": "김치볶음밥",
    "tags": [
      "한식",
      "밥"
    ],
    "special": {
      "veganCandidate": false,
      "lighterMealCandidate": false
    },
    "conditions": [],
    "mealSuggestion": ""
  },
  {
    "id": "lunch-024",
    "name": "제육볶음",
    "tags": [
      "한식",
      "고기"
    ],
    "special": {
      "veganCandidate": false,
      "lighterMealCandidate": false
    },
    "conditions": [],
    "mealSuggestion": ""
  },
  {
    "id": "lunch-025",
    "name": "불고기",
    "tags": [
      "한식",
      "고기"
    ],
    "special": {
      "veganCandidate": false,
      "lighterMealCandidate": false
    },
    "conditions": [],
    "mealSuggestion": ""
  },
  {
    "id": "lunch-026",
    "name": "오징어볶음",
    "tags": [
      "한식",
      "해산물"
    ],
    "special": {
      "veganCandidate": false,
      "lighterMealCandidate": false
    },
    "conditions": [],
    "mealSuggestion": ""
  },
  {
    "id": "lunch-027",
    "name": "낙지볶음",
    "tags": [
      "한식",
      "해산물"
    ],
    "special": {
      "veganCandidate": false,
      "lighterMealCandidate": false
    },
    "conditions": [],
    "mealSuggestion": ""
  },
  {
    "id": "lunch-028",
    "name": "수육정식",
    "tags": [
      "한식",
      "고기"
    ],
    "special": {
      "veganCandidate": false,
      "lighterMealCandidate": false
    },
    "conditions": [],
    "mealSuggestion": ""
  },
  {
    "id": "lunch-029",
    "name": "생선구이",
    "tags": [
      "한식",
      "해산물"
    ],
    "special": {
      "veganCandidate": false,
      "lighterMealCandidate": false
    },
    "conditions": [],
    "mealSuggestion": ""
  },
  {
    "id": "lunch-030",
    "name": "생선조림",
    "tags": [
      "한식",
      "해산물"
    ],
    "special": {
      "veganCandidate": false,
      "lighterMealCandidate": false
    },
    "conditions": [],
    "mealSuggestion": ""
  },
  {
    "id": "lunch-031",
    "name": "냉면",
    "tags": [
      "한식",
      "면"
    ],
    "special": {
      "veganCandidate": false,
      "lighterMealCandidate": false
    },
    "conditions": [],
    "mealSuggestion": ""
  },
  {
    "id": "lunch-032",
    "name": "막국수",
    "tags": [
      "한식",
      "면"
    ],
    "special": {
      "veganCandidate": false,
      "lighterMealCandidate": false
    },
    "conditions": [],
    "mealSuggestion": ""
  },
  {
    "id": "lunch-033",
    "name": "잔치국수",
    "tags": [
      "한식",
      "면",
      "국물"
    ],
    "special": {
      "veganCandidate": false,
      "lighterMealCandidate": false
    },
    "conditions": [],
    "mealSuggestion": ""
  },
  {
    "id": "lunch-034",
    "name": "비빔국수",
    "tags": [
      "한식",
      "면"
    ],
    "special": {
      "veganCandidate": false,
      "lighterMealCandidate": false
    },
    "conditions": [],
    "mealSuggestion": ""
  },
  {
    "id": "lunch-035",
    "name": "칼국수",
    "tags": [
      "한식",
      "면",
      "국물"
    ],
    "special": {
      "veganCandidate": false,
      "lighterMealCandidate": false
    },
    "conditions": [],
    "mealSuggestion": ""
  },
  {
    "id": "lunch-036",
    "name": "콩국수",
    "tags": [
      "한식",
      "면",
      "국물"
    ],
    "special": {
      "veganCandidate": false,
      "lighterMealCandidate": false
    },
    "conditions": [],
    "mealSuggestion": ""
  },
  {
    "id": "lunch-037",
    "name": "수제비",
    "tags": [
      "한식",
      "국물"
    ],
    "special": {
      "veganCandidate": false,
      "lighterMealCandidate": false
    },
    "conditions": [],
    "mealSuggestion": ""
  },
  {
    "id": "lunch-038",
    "name": "김밥",
    "tags": [
      "분식",
      "밥",
      "간편식"
    ],
    "special": {
      "veganCandidate": false,
      "lighterMealCandidate": false
    },
    "conditions": [],
    "mealSuggestion": ""
  },
  {
    "id": "lunch-039",
    "name": "떡볶이",
    "tags": [
      "분식"
    ],
    "special": {
      "veganCandidate": false,
      "lighterMealCandidate": false
    },
    "conditions": [],
    "mealSuggestion": ""
  },
  {
    "id": "lunch-040",
    "name": "라볶이",
    "tags": [
      "분식",
      "면"
    ],
    "special": {
      "veganCandidate": false,
      "lighterMealCandidate": false
    },
    "conditions": [],
    "mealSuggestion": ""
  },
  {
    "id": "lunch-041",
    "name": "라면",
    "tags": [
      "분식",
      "면",
      "국물",
      "간편식"
    ],
    "special": {
      "veganCandidate": false,
      "lighterMealCandidate": false
    },
    "conditions": [],
    "mealSuggestion": ""
  },
  {
    "id": "lunch-042",
    "name": "쫄면",
    "tags": [
      "분식",
      "면"
    ],
    "special": {
      "veganCandidate": false,
      "lighterMealCandidate": false
    },
    "conditions": [],
    "mealSuggestion": ""
  },
  {
    "id": "lunch-043",
    "name": "만둣국",
    "tags": [
      "한식",
      "분식",
      "국물"
    ],
    "special": {
      "veganCandidate": false,
      "lighterMealCandidate": false
    },
    "conditions": [],
    "mealSuggestion": ""
  },
  {
    "id": "lunch-044",
    "name": "떡국",
    "tags": [
      "한식",
      "국물"
    ],
    "special": {
      "veganCandidate": false,
      "lighterMealCandidate": false
    },
    "conditions": [],
    "mealSuggestion": ""
  },
  {
    "id": "lunch-045",
    "name": "죽",
    "tags": [
      "한식",
      "밥",
      "간편식"
    ],
    "special": {
      "veganCandidate": false,
      "lighterMealCandidate": false
    },
    "conditions": [],
    "mealSuggestion": ""
  },
  {
    "id": "lunch-046",
    "name": "짜장면",
    "tags": [
      "중식",
      "면"
    ],
    "special": {
      "veganCandidate": false,
      "lighterMealCandidate": false
    },
    "conditions": [],
    "mealSuggestion": ""
  },
  {
    "id": "lunch-047",
    "name": "짬뽕",
    "tags": [
      "중식",
      "면",
      "국물",
      "해산물"
    ],
    "special": {
      "veganCandidate": false,
      "lighterMealCandidate": false
    },
    "conditions": [],
    "mealSuggestion": ""
  },
  {
    "id": "lunch-048",
    "name": "짬뽕밥",
    "tags": [
      "중식",
      "밥",
      "국물",
      "해산물"
    ],
    "special": {
      "veganCandidate": false,
      "lighterMealCandidate": false
    },
    "conditions": [],
    "mealSuggestion": ""
  },
  {
    "id": "lunch-049",
    "name": "마파두부밥",
    "tags": [
      "중식",
      "밥"
    ],
    "special": {
      "veganCandidate": false,
      "lighterMealCandidate": false
    },
    "conditions": [],
    "mealSuggestion": ""
  },
  {
    "id": "lunch-050",
    "name": "잡채밥",
    "tags": [
      "중식",
      "밥"
    ],
    "special": {
      "veganCandidate": false,
      "lighterMealCandidate": false
    },
    "conditions": [],
    "mealSuggestion": ""
  },
  {
    "id": "lunch-051",
    "name": "마라탕",
    "tags": [
      "중식",
      "국물"
    ],
    "special": {
      "veganCandidate": false,
      "lighterMealCandidate": false
    },
    "conditions": [],
    "mealSuggestion": ""
  },
  {
    "id": "lunch-052",
    "name": "초밥",
    "tags": [
      "일식",
      "밥",
      "해산물"
    ],
    "special": {
      "veganCandidate": false,
      "lighterMealCandidate": false
    },
    "conditions": [],
    "mealSuggestion": ""
  },
  {
    "id": "lunch-053",
    "name": "회덮밥",
    "tags": [
      "일식",
      "밥",
      "해산물",
      "채소"
    ],
    "special": {
      "veganCandidate": false,
      "lighterMealCandidate": true
    },
    "conditions": [
      "가볍게 먹기 후보입니다. 밥·빵의 양, 소스와 드레싱, 토핑에 따라 달라지므로 주문 시 확인하세요."
    ],
    "mealSuggestion": ""
  },
  {
    "id": "lunch-054",
    "name": "덮밥",
    "tags": [
      "한식",
      "일식",
      "밥"
    ],
    "special": {
      "veganCandidate": false,
      "lighterMealCandidate": false
    },
    "conditions": [],
    "mealSuggestion": ""
  },
  {
    "id": "lunch-055",
    "name": "돈가스",
    "tags": [
      "일식",
      "고기",
      "튀김"
    ],
    "special": {
      "veganCandidate": false,
      "lighterMealCandidate": false
    },
    "conditions": [],
    "mealSuggestion": ""
  },
  {
    "id": "lunch-056",
    "name": "우동",
    "tags": [
      "일식",
      "면",
      "국물"
    ],
    "special": {
      "veganCandidate": false,
      "lighterMealCandidate": false
    },
    "conditions": [],
    "mealSuggestion": ""
  },
  {
    "id": "lunch-057",
    "name": "소바",
    "tags": [
      "일식",
      "면"
    ],
    "special": {
      "veganCandidate": false,
      "lighterMealCandidate": false
    },
    "conditions": [],
    "mealSuggestion": ""
  },
  {
    "id": "lunch-058",
    "name": "라멘",
    "tags": [
      "일식",
      "면",
      "국물"
    ],
    "special": {
      "veganCandidate": false,
      "lighterMealCandidate": false
    },
    "conditions": [],
    "mealSuggestion": ""
  },
  {
    "id": "lunch-059",
    "name": "카레",
    "tags": [
      "일식",
      "밥"
    ],
    "special": {
      "veganCandidate": false,
      "lighterMealCandidate": false
    },
    "conditions": [],
    "mealSuggestion": ""
  },
  {
    "id": "lunch-060",
    "name": "파스타",
    "tags": [
      "양식",
      "면"
    ],
    "special": {
      "veganCandidate": false,
      "lighterMealCandidate": false
    },
    "conditions": [],
    "mealSuggestion": ""
  },
  {
    "id": "lunch-061",
    "name": "피자",
    "tags": [
      "양식"
    ],
    "special": {
      "veganCandidate": false,
      "lighterMealCandidate": false
    },
    "conditions": [],
    "mealSuggestion": ""
  },
  {
    "id": "lunch-062",
    "name": "함박스테이크",
    "tags": [
      "양식",
      "고기"
    ],
    "special": {
      "veganCandidate": false,
      "lighterMealCandidate": false
    },
    "conditions": [],
    "mealSuggestion": ""
  },
  {
    "id": "lunch-063",
    "name": "오므라이스",
    "tags": [
      "양식",
      "밥"
    ],
    "special": {
      "veganCandidate": false,
      "lighterMealCandidate": false
    },
    "conditions": [],
    "mealSuggestion": ""
  },
  {
    "id": "lunch-064",
    "name": "햄버거",
    "tags": [
      "양식",
      "간편식"
    ],
    "special": {
      "veganCandidate": false,
      "lighterMealCandidate": false
    },
    "conditions": [],
    "mealSuggestion": ""
  },
  {
    "id": "lunch-065",
    "name": "샌드위치",
    "tags": [
      "양식",
      "간편식"
    ],
    "special": {
      "veganCandidate": false,
      "lighterMealCandidate": true
    },
    "conditions": [
      "가볍게 먹기 후보입니다. 밥·빵의 양, 소스와 드레싱, 토핑에 따라 달라지므로 주문 시 확인하세요."
    ],
    "mealSuggestion": ""
  },
  {
    "id": "lunch-066",
    "name": "토스트",
    "tags": [
      "간편식"
    ],
    "special": {
      "veganCandidate": false,
      "lighterMealCandidate": false
    },
    "conditions": [],
    "mealSuggestion": ""
  },
  {
    "id": "lunch-067",
    "name": "샐러드",
    "tags": [
      "간편식",
      "채소"
    ],
    "special": {
      "veganCandidate": false,
      "lighterMealCandidate": true
    },
    "conditions": [
      "가볍게 먹기 후보입니다. 밥·빵의 양, 소스와 드레싱, 토핑에 따라 달라지므로 주문 시 확인하세요."
    ],
    "mealSuggestion": ""
  },
  {
    "id": "lunch-068",
    "name": "포케",
    "tags": [
      "간편식",
      "밥",
      "채소"
    ],
    "special": {
      "veganCandidate": false,
      "lighterMealCandidate": true
    },
    "conditions": [
      "가볍게 먹기 후보입니다. 밥·빵의 양, 소스와 드레싱, 토핑에 따라 달라지므로 주문 시 확인하세요."
    ],
    "mealSuggestion": ""
  },
  {
    "id": "lunch-069",
    "name": "쌀국수",
    "tags": [
      "동남아식",
      "면",
      "국물"
    ],
    "special": {
      "veganCandidate": false,
      "lighterMealCandidate": false
    },
    "conditions": [],
    "mealSuggestion": ""
  },
  {
    "id": "lunch-070",
    "name": "분짜",
    "tags": [
      "동남아식",
      "면",
      "고기"
    ],
    "special": {
      "veganCandidate": false,
      "lighterMealCandidate": false
    },
    "conditions": [],
    "mealSuggestion": ""
  },
  {
    "id": "lunch-071",
    "name": "샤브샤브",
    "tags": [
      "한식",
      "일식",
      "국물",
      "고기",
      "채소"
    ],
    "special": {
      "veganCandidate": false,
      "lighterMealCandidate": false
    },
    "conditions": [],
    "mealSuggestion": ""
  },
  {
    "id": "lunch-072",
    "name": "닭갈비",
    "tags": [
      "한식",
      "고기"
    ],
    "special": {
      "veganCandidate": false,
      "lighterMealCandidate": false
    },
    "conditions": [],
    "mealSuggestion": ""
  }
];
if(typeof module!=="undefined"&&module.exports)module.exports=LUNCH_DATA;
