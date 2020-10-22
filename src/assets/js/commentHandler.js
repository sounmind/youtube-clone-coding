import axios from "axios";

const addCommentFrom = document.getElementById("jsAddComment");
const commentList = document.getElementById("jsCommentList");
const commentNumber = document.getElementById("jsCommentNumber");
const deleteCommentBtn = document.querySelectorAll("#jsDeleteComment");

const increaseNumber = () => {
  commentNumber.innerHTML = parseInt(commentNumber.innerHTML, 10) + 1;
};

const decreaseNumber = () => {
  commentNumber.innerHTML = parseInt(commentNumber.innerHTML, 10) - 1;
};

const addComment = (comment) => {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerHTML = comment;
  li.appendChild(span);
  commentList.prepend(li); // 가장 최신 것이 위로 오도록 추가
  increaseNumber();
};

const deleteComment = async (event) => {
  const commentId = event.target.parentNode.className;
  const response = await axios({
    url: `/api/${commentId}/comment/delete`,
    method: "POST",
  });
  if (response.status === 200) {
    decreaseNumber();
    console.log(event.target.parentNode.className);
    const commentElement = event.target.parentNode;
    commentElement.parentNode.removeChild(commentElement); // 화면에서 댓글 제거
  }
};

const sendComment = async (comment) => {
  const videoId = window.location.href.split("/videos/")[1];
  const response = await axios({
    url: `/api/${videoId}/comment`,
    method: "POST",
    data: {
      comment,
    },
  });
  console.log(response);
  /* 아래와 같이 출력된다.
  ...
  ...
  config:
    adapter: ƒ xhrAdapter(config)
    data: "{"comment":"asdasd"}"
  ...
  ...
  */
  if (response.status === 200) {
    addComment(comment);
  }
};

const handleSubmit = (event) => {
  event.preventDefault();
  const commentInput = addCommentFrom.querySelector("input");
  const comment = commentInput.value;
  sendComment(comment);
  commentInput.value = "";
};

const handleDelete = (event) => {
  deleteComment(event);
};

function init() {
  addCommentFrom.addEventListener("submit", handleSubmit);
  deleteCommentBtn.forEach((btn) =>
    btn.addEventListener("click", handleDelete)
  );
}

if (addCommentFrom) {
  // 전체 페이지에서 자바스크립트 파일이 실행되기 때문에 이렇게 조건을 달아놓는다.
  init();
}
