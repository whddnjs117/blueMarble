/**
 * 
 */

function Map() {
	
	let MapData = [
		null,
		{type : "money" , title : "사회복지"},
		{type : "city" , title : "부에노스"},
		{type : "chance", title : "황금열쇠"},
		{type : "city" , title : "상파울루"},
		{type : "city" , title : "시드니"},
		{type : "island" , title : "부산"},
		{type : "city" , title : "하와이"},
		{type : "city" , title : "리스본"},
		{type : "island" , title : "엘리자베스"},
		{type : "city" , title : "마드리드"},
		{type : "space" , title : "우주여행"},
		{type : "city" , title : "도쿄"},
		{type : "island" , title : "컬럼비아호"},
		{type : "city" , title : "파리"},
		{type : "city" , title : "로마"},
		{type : "chance" , title : "황금열쇠"},
		{type : "city" , title : "런던"},
		{type : "city" , title : "뉴욕"},
		{type : "pay" , title : "기부"},
		{type : "island" , title : "서울"},
		{type : "home" , title : "출발지"},
		{type : "city" , title : "타이베이"},
		{type : "chance" , title : "황금열쇠"},
		{type : "city" , title : "베이징"},
		{type : "city" , title : "마닐라"},
		{type : "island" , title : "제주"},
		{type : "city" , title : "싱가포르"},
		{type : "chance" , title : "황금열쇠"},
		{type : "city" , title : "카이로"},
		{type : "city" , title : "이스탄불"},
		{type : "desert_island" , title : "무인도"},
		{type : "city" , title : "아테네"},
		{type : "chance" , title : "황금열쇠"},
		{type : "city" , title : "코펜하겐"},
		{type : "city" , title : "스톡홀름"},
		{type : "island" , title : "여객기"},
		{type : "city" , title : "베른"},
		{type : "city" , title : "베를린"},
		{type : "city" , title : "오타와"}
	];
	this.MapValue = function(index){
		return MapData[index];
	}
	
}