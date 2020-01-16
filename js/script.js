const button = document.querySelector(".button");

function onclick(){
    alert('내가 쉽게풀어줄거라고 생각했어?');
    alert('그러게 왜눌렀어');
    alert('이건내가 직접 운영하는 서버야');
    alert('그러니 널풀어주긴 싫거든');
    alert('운동이나 해');
    alert('운동시작');
    let i = 1;
    while (i<=100){
    alert(`${i} 번 운동했어`);
    i+=1;
    }
    alert('수고했어');
    alert('자 그럼 이제 이걸 어떻게 할지는 너의 판단에 달린 거야');
    alert('그럼 수ㄱ5');
    location.replace('http://blocked.or.kr/');
    alert('참고로 컴퓨터일때 엔터키 누르고 신경안쓰면 큰일난다?ㅋ');
}

button.addEventListener('click',onclick);
