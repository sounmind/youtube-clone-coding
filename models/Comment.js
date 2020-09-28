import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
    text: {
        type: String,
        required: "Text is required"
    },
    createAt: {
        type: Date,
        default: Date.now
    },
    
    // 비디오 댓글 연결 첫번째 방법
    // video: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Video"
    // }
})

const model = mongoose.model("Comment", CommentSchema);
export default model;