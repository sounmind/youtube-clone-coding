export const home = (req, res) => res.render("home", { pageTitle: "Home" }); // render 함수의 첫번째 인자는 템플릿, 두번째 인자는 템플릿에 추가할 정보가 담긴 객체다.

export const search = (req, res) => {
    const {query: { term: searchingBy } } = req; // ES6 이전의 방식: const searchingBy = req.query.term;
    res.render("search", { pageTitle: "Search", searchingBy: searchingBy }); // 그냥 serachingBy만 입력해줘도 Babel이 같은 의미로 해석해준다.
} 

export const upload = (req, res) => res.render("upload", { pageTitle: "Upload" });
export const videoDetail = (req, res) => res.render("videoDetail", { pageTitle: "Video Detail" });
export const editVideo = (req, res) => res.render("editVideo", { pageTitle: "Edit Video" });
export const deleteVideo = (req, res) => res.render("deleteVideo", { pageTitle: "Delete Video" });