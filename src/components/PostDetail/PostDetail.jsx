import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const PostDetail = () => {
    const navigate = useNavigate()
    const { postId } = useParams()
    const post = useLoaderData();
    const { id, title, body } = post;

    console.log(postId);
    const handleGoBack = () => {
        navigate(-1)
    }
    return (
        <div>
            <h2>Post detail: {id}</h2>
            <p>Title: {title}</p>
            <p>{body}</p>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default PostDetail;