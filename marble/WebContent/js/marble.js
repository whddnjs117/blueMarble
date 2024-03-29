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
		money : 300,
		playTurn : 0, // 더블을 3턴하면 무인도로이동
		nowPoint : 21
}
let player2 = {
		beforePoint : 21,
		afterPoint : 21,
		beforeId : "#p21",
		afterId : "#p21",
		playerImg : "player2.png",
		player : "player2",
		money : 300,
		playTurn : 0,
		nowPoint : 21
}

let player3 = {
		beforePoint : 21,
		afterPoint : 21,
		beforeId : "#p21",
		afterId : "#p21",
		playerImg : "player3.png",
		player : "player3",
		money : 300,
		playTurn : 0,
		nowPoint : 21
}

let player4 = {
		beforePoint : 21,
		afterPoint : 21,
		beforeId : "#p21",
		afterId : "#p21",
		playerImg : "player4.png",
		player : "player4",
		money : 300,
		playTurn : 0,
		nowPoint : 21
}
let playCount = 1; //플레이어의 순서값
let playTurn = 0; //무인도에 갇혀있을때 턴횟수를제한
let player = {}; //버튼눌럿을때 나오는 플레이어를 저장할 객체
let playerMembers = 0; //사람수를 선택할수있는 플레이어
//------------------------------------------------------------------------------맵 데이터
let MapData = [
	{type : null , title : null}, //인덱스가 0인것은 존재하면 안되므로 null로 처리한다.
	{type : "money" , title : "사회복지"},
	{type : "city" , title : "부에노스", owner : null, landPrice:22,house1Price:15},
	{type : "chance", title : "황금열쇠"},
	{type : "city" , title : "상파울루", owner : null, landPrice:24,house1Price:15},
	{type : "city" , title : "시드니", owner : null, landPrice:24,house1Price:15},
	{type : "island" , title : "부산", owner : null, landPrice:50},
	{type : "city" , title : "하와이", owner : null , landPrice:26,house1Price:15},
	{type : "city" , title : "리스본", owner : null, landPrice:26,house1Price:15},
	{type : "island" , title : "엘리자베스", owner : null, landPrice:30},
	{type : "city" , title : "마드리드", owner : null, landPrice:28,house1Price:15},
	{type : "space" , title : "우주여행"},
	{type : "city" , title : "도쿄", owner : null, landPrice:30,house1Price:20},
	{type : "island" , title : "컬럼비아호", owner : null, landPrice:45},
	{type : "city" , title : "파리", owner : null, landPrice:32,house1Price:20},
	{type : "city" , title : "로마", owner : null, landPrice:32,house1Price:20},
	{type : "chance" , title : "황금열쇠"},
	{type : "city" , title : "런던", owner : null, landPrice:35,house1Price:20},
	{type : "city" , title : "뉴욕", owner : null, landPrice:35,house1Price:20},
	{type : "pay" , title : "기부"},
	{type : "island" , title : "서울", owner : null, landPrice:100},
	{type : "home" , title : "출발지"},
	{type : "city" , title : "타이베이", owner : null, landPrice:5,house1Price:5},
	{type : "chance" , title : "황금열쇠"},
	{type : "city" , title : "베이징", owner : null, landPrice:8,house1Price:5},
	{type : "city" , title : "마닐라", owner : null, landPrice:8,house1Price:5},
	{type : "island" , title : "제주", owner : null, landPrice:2},
	{type : "city" , title : "싱가포르", owner : null, landPrice:10,house1Price:5},
	{type : "chance" , title : "황금열쇠"},
	{type : "city" , title : "카이로", owner : null, landPrice:10,house1Price:5},
	{type : "city" , title : "이스탄불", owner : null, landPrice:12,house1Price:5},
	{type : "desert_island" , title : "무인도"},
	{type : "city" , title : "아테네", owner : null, landPrice:14,house1Price:10},
	{type : "chance" , title : "황금열쇠"},
	{type : "city" , title : "코펜하겐", owner : null, landPrice:16,house1Price:10},
	{type : "city" , title : "스톡홀름", owner : null, landPrice:16,house1Price:10},
	{type : "island" , title : "여객기", owner : null, landPrice:20},
	{type : "city" , title : "베른", owner : null, landPrice:18,house1Price:10},
	{type : "chance" , title : "황금열쇠"},
	{type : "city" , title : "베를린", owner : null, landPrice:18,house1Price:10},
	{type : "city" , title : "오타와", owner : null, landPrice:20,house1Price:10}
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
		let dice1 = Math.floor((Math.random() * 3) + 1);
//		let dice1 = 2;
		$("#onedice").attr("src","/marble/dice/dice"+dice1+".jpg")
		let dice2 = Math.floor((Math.random() * 3) + 1);
//		let dice2 = 2;
		$("#twodice").attr("src","/marble/dice/dice"+dice2+".jpg")
		$("#onedice").show();
		$("#twodice").show();
		let ran = dice1 + dice2;
		document.querySelector("#dice1").value = dice1;
		document.querySelector("#dice2").value = dice2;
		
		if (player.beforePoint + ran < 41) {
			player.afterPoint = player.beforePoint + ran;
		} else {
			player.afterPoint = player.beforePoint + ran - 40
		}
		document.querySelector("#point").value = player.afterPoint;
		// 말을 이동시킵니다.
		console.log("플레어이 after 포인트"+player.afterPoint)
		console.log("플레어이 before 포인트"+player.beforePoint)
		if(MapData[player.nowPoint].title == "무인도"){
			console.log("현재 섬은 무인도이다.")
			if(DesertIsalnd(dice1,dice2)){
				return;
			}else if(player.playTurn==2){
				alert("다음턴에 무인도를 나가실수 있습니다.");
				player.nowPoint = 0;
				return;
			}else{
				player.playTurn += 1;
				alert("무인도탈출 실패 현재턴 :"+player.playTurn);
				return;
			}
		}
		if(dice1==dice2){ // 더블이발생할경우 함수를 호출
			Double();
			console.log("더블이 발생했음.");
		} else{
			player.playTurn = 0;
		}
		MovePlayer(); //말이동
		
		
		if(MapData[player.afterPoint].type == "city"){ //말을 이동시키고 나서 도착한 위치가 도시일경우
			$("#landModal-footer").empty();
			console.log("도시도착함")
			console.log(MapData[player.afterPoint].title);
			InsertLandInfo(player.nowPoint); //알림창에 값 채우도록반응
//			$("#landConfirm").modal({backdrop: 'static'}); //창 반응하게하기
			
			// 턴넘기는 버튼을 추가
			$("#landModal-footer").append("<button type='button' class='btn btn-block btn-danger' data-dismiss='modal' style='font-style: italic;'>아무것도 안할래요.(내 차례 넘기기) </button>");
		}
		
		
//		player.afterId = "#p" + player.afterPoint; 함수화
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
			console.log("더블이 3번 발생해서 무인도로갈 값을 저장하고 무인도로 이동")
			playCount +=1;
			player.playTurn = 0;
		}
	};
	function DesertIsalnd(a,b) { //현재위치하고있는 장소가 무인도일 경우 발생하는 함수
		if(a==b){ //주사위가 같은값을 가질경우
			alert("주사위 값이 같아 무인도를 탈출하셧습니다.");
			playCount -= 1; //더블나와서 탈출할경우 플레이어가 한번더 돌리기위해
			player.playTurn = 0; // 플레이의 턴을 초기화시켜준다.
			player.nowPoint = 0; // 플레이의 현재위치포인트값을 초기화
			return true;
		}
	}
	function MovePlayer() { //말이동하는 함수
		player.afterId = "#p" + player.afterPoint;
		player.beforeId = "#p" + player.beforePoint;
		console.log("현재 이동하는말은 :"+player.player);
		$("."+player.player).remove();
		$(player.afterId).append("<input type='image' src='/marble/image/"+player.playerImg+"' class='player "+player.player+"'>");
		player.beforePoint = player.afterPoint;
		player.nowPoint = player.beforePoint;
	}
	
	function InsertLandInfo(nowPoint) { // 모달 알림창에 값 채우기
		
		// 글자 비우기
		$("#landName").empty();
		$("#landPrice").empty();
		$("#house1Price").empty();
		$("#house2Price").empty();
		$("#buildingPrice").empty();
		$("#hotelPrice").empty();
		$("#remainMoney").empty();
		$("#landModal-footer").empty();
		
		//글자 채우기
		$("#landName").text(MapData[nowPoint].title);
		$("#landPrice").text(MapData[nowPoint].landPrice);
		$("#house1Price").text(MapData[nowPoint].house1Price);
		$("#remainMoney").text(player.money);
	}
});