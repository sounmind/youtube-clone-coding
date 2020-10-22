const recorderContainer = document.getElementById("jsRecordContainer");
const recordBtn = document.getElementById("jsRecordBtn");
const videoPreview = document.getElementById("jsVideoPreview");

let streamObject;
let videoRecorder;

const handleVideoData = (event) => {
  console.log("Captured!");
  const { data: videoFile } = event;
  const link = document.createElement("a");
  link.href = URL.createObjectURL(videoFile);
  link.download = "recorded.webm"; // webm은 오픈 소스
  document.body.appendChild(link);
  link.click(); // 자동으로 클릭하게 됨
  // 버그 있음 -> 비디오에 지속시간이 없다.
};
const stopRecording = () => {
  // 옵션1: 일정 시간 단위로 잘라 저장하기
  // 옵션2: 녹화가 끝났을 때 한꺼번에 저장하기
  videoRecorder.stop();
  recordBtn.removeEventListener("click", stopRecording);
  recordBtn.addEventListener("click", getVideo);
  recordBtn.innerHTML = "Start recording";
};

const startRecording = () => {
  videoRecorder = new MediaRecorder(streamObject);
  videoRecorder.addEventListener("dataavailable", handleVideoData);
  // 3가지 조건일 때 실행된다.
  // MediaRecorder 객체에서 stop(), requestData() 메소드가 호출되거나,
  // timeslice 프로퍼티가 MediaRecorder.start() 메소드로 전달되었을 때, 매 timeslice 밀리세컨드마다 dataavailable 이벤트가 일어난다.
  videoRecorder.start();
  recordBtn.addEventListener("click", stopRecording);
};

const getVideo = async () => {
  try {
    // User가 자신의 기기에 접근하는 것을 허락하는지 대답을 기다리기 위해 await 사용
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: { width: 1280, height: 720 },
    });
    // 카메라가 여러 개라면, 어떤 카메라를 선택할지 함수를 따로 만들어야 한다.
    videoPreview.srcObject = stream; // videoPreview 엘리먼트의 소스객체에 사용자 기기 stream을 대입
    videoPreview.muted = true; // 실제 사용자의 소리가 이어폰으로 들리지 않도록
    videoPreview.play();
    recordBtn.innerHTML = "Stop recording";
    streamObject = stream;
    startRecording();
  } catch (error) {
    console.log(error);
    recordBtn.innerHTMl = "😭 Cannot Record";
  } finally {
    // 무조건 실행되는 구문
    recordBtn.removeEventListener("click", getVideo);
    // 다시 유저 기기를 가져오는 시도하지 않음
  }
};

function init() {
  recordBtn.addEventListener("click", getVideo);
}

if (recorderContainer) {
  init();
}
