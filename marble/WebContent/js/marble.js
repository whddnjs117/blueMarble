/**
 * 
 */



//플레이어의 각각의 위치를저장하기위한객체
let player1 = {
		beforePoint : 21, //이동하기전값
		afterPoint : 21, //이동한후의 값
		beforeId : "#p21", //보드값
		afterId : "#p21",
		playerImg : "player1.png", //이미지이름
		player : "player1", //html 클래스값
		money : 3000000,
		playTurn : 0 // 더블을 3턴하면 무인도로이동
}
let player2 = {
		beforePoint : 21,
		afterPoint : 21,
		beforeId : "#p21",
		afterId : "#p21",
		playerImg : "player2.png",
		player : "player2",
		money : 3000000,
		playTurn : 0
}

let player3 = {
		beforePoint : 21,
		afterPoint : 21,
		beforeId : "#p21",
		afterId : "#p21",
		playerImg : "player3.png",
		player : "player3",
		money : 3000000,
		playTurn : 0
}

let player4 = {
		beforePoint : 21,
		afterPoint : 21,
		beforeId : "#p21",
		afterId : "#p21",
		playerImg : "player4.png",
		player : "player4",
		money : 3000000,
		playTurn : 0
}
let playCount = 1; //플레이어의 순서값
let playTurn = 0; //무인도에 갇혀있을때 턴횟수를제한
let player = {}; //버튼눌럿을때 나오는 플레이어를 저장할 객체
let playerMembers = 0; //사람수를 선택할수있는 플레이어
//------------------------------------------------------------------------------맵 데이터
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
//--------------------------------------------------------------맵데이터 끝
window.addEventListener("load",function() {
	$("#onedice").hide();
	$("#twodice").hide();
	$("#play").hide();
	let play = document.querySelector("#play");
	play.addEventListener("click",function() { //---------------------------------주사위를 버튼을 누를경우반응
		if(playCount==1) {
			player = player1;
		}else if(playCount==2){
			player = player2;
		}else if(playCount==3){
			player = player3;
		}else if(playCount==4){
			player = player4;
		}
		if(playCount<playerMembers){
			playCount+=1;
		}else{
			playCount=1;
		}
		let dice3 = Math.floor((Math.random() * 6) + 1);
		let dice1 = 1;
		$("#onedice").attr("src","/marble/dice/dice"+dice1+".jpg")
		let dice4 = Math.floor((Math.random() * 6) + 1);
		let dice2 = 1;
		$("#twodice").attr("src","/marble/dice/dice"+dice2+".jpg")
		$("#onedice").show();
		$("#twodice").show();
		let ran = dice1 + dice2;
		document.querySelector("#dice").value = ran;
		
		if (player.beforePoint + ran < 41) {
			player.afterPoint = player.beforePoint + ran;
		} else {
			player.afterPoint = player.beforePoint + ran - 40
		}
		document.querySelector("#point").value = player.afterPoint;
		// 말을 이동시킵니다.
		console.log("플레어이 after 포인트"+player.afterPoint)
		console.log("플레어이 before 포인트"+player.beforePoint)
		if(MapData[player.beforePoint].title == "무인도"){
			console.log("현재 섬은 무인도이다.")
			if(dice1 == dice2){
				playCount -= 1;
				player.playTurn = 3;
			} else {
				console.log("무인도 탈출실패!!");
				Desert_isalnd();
				return;
			}
			
		}
		if(dice1==dice2){ // 더블이발생할경우 함수를 호출
			Double();
			console.log("더블이 발생했음.");
		} else{
			player.playTurn = 0;
		}
		MovePlayer();
//		player.afterId = "#p" + player.afterPoint;
//		player.beforeId = "#p" + player.beforePoint;
//		console.log("현재 이동하는말은 :"+player.player);
//		console.log("이동한 칸수는 : "+ran);
//		$("."+player.player).remove();
//		$(player.afterId).append("<input type='image' src='/marble/image/"+player.playerImg+"' class='player "+player.player+"'>");
//		player.beforePoint = player.afterPoint;
		
	});
	
	//----------------------게임을 플레이할 수를 선택
	$(".playerMembers").click(function(){ //사람수를 선택하는 
		playerMembers = $(this).attr("value"); //버튼을 클릭한 값을 저장
		alert(playerMembers+"명 플레이시작!!"); //몇명을 선택했는지 알림창 띄우기
		$("#title").hide();
		$(".playerMembers").hide(); // 버튼클릭하는것을 숨기기
		$("#play").show();
		console.log("선택하신 플레이어의 수는 :"+playerMembers);
		if(playerMembers==2){
			$(".player3").remove();
			$(".player4").remove();
		} else if(playerMembers==3){
			$(".player4").remove();
		} else{
			return;
		}
	});
	//----------------------더블반응
	function Double(){ //더블발생할때 호출에 응할 함수
		playCount -=1;
		player.playTurn +=1;
		if(player.playTurn==3){
			alert("더블을 3번하셧으므로 무인도로 이동합니다.");
			player.afterPoint = 31;
			console.log("더블이 3번 발생해서 무인도로갈 값을 저장")
			playCount +=1;
			player.playTurn = 0;
		}
	};
	function Desert_isalnd() {
		playCount +=1;
		player.playTurn +=1;
		if(player.playTurn==3){
			playCount-=1;
			player.playTurn = 0;
		}
	}
	function MovePlayer() {
		player.afterId = "#p" + player.afterPoint;
		player.beforeId = "#p" + player.beforePoint;
		console.log("현재 이동하는말은 :"+player.player);
		$("."+player.player).remove();
		$(player.afterId).append("<input type='image' src='/marble/image/"+player.playerImg+"' class='player "+player.player+"'>");
		player.beforePoint = player.afterPoint;
	}
});