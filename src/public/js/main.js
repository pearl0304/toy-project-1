document.addEventListener('DOMContentLoaded', function () {
  clock();
  setInterval(clock, 1000);

  document.getElementById('statButton').addEventListener('click', function () {
    Swal.fire({
      title: '금일 근무를 시작하시겠습니까?',
      icon: 'question',
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        //TODO :: 출근 QR 코드 출력하기
        //TODO :: 출근 QR 처리하기
        Swal.fire({
          title: '업무를 시작합니다. 오늘 하루도 힘내세요 :)',
          icon: 'success'
        });
      }
    });
  });

  document.getElementById('endButton').addEventListener('click', function () {
    Swal.fire({
      title: '업무를 종료하시겠습니까?',
      icon: 'question',
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        //TODO :: 퇴근 QR 코드 출력하기
        //TODO :: 퇴근 QR 코드 처리하기
        Swal.fire({
          title: '업무를 종료합니다. 고생하셨습니다. :)',
          icon: 'success'
        })
      }
    });
  });


});

function formatDateString(date) {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  return `${year}년 ${month}월 ${day}일`;
}

function clock() {
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  hours = hours < 10 ? `0${hours}` : hours;
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  seconds = seconds < 10 ? `0${seconds}` : seconds;

  let timeString = `${hours}:${minutes}:${seconds}`;
  let today = formatDateString(now);

  document.getElementById('clock').textContent = timeString;
  document.getElementById('today').textContent = today;
}

