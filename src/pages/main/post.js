import {
  addDoc,
  collection,
  query,
  where,
  getDocs,
  deleteDoc,
  doc
} from "firebase/firestore";
import {auth, db} from "../../config/firebase";
import {useAuthState} from "react-firebase-hooks/auth";
import * as icon from "react-feather";
import {useEffect, useState} from "react";

export const Post = (props) => {
  const {post} = props;
  const [user] = useAuthState(auth);

  const [likesCount, setLikesCount] = useState([]);

  const likesReference = collection(db, "likes");

  const likesDoc = query(likesReference, where("postId", "==", post.id));

  const getLikes = async () => {
    const data = await getDocs(likesDoc);
    setLikesCount(data.docs.map((doc) => ({userId: doc.data().userId, likeId: doc.id})));
  };

  const addLike = async () => {
    try {
      const newDoc = await addDoc(likesReference, {
        userId: user?.uid,
        postId: post.id,
      });
      setLikesCount((prev) => [...prev, {userId: user?.uid, likeId: newDoc.id}]);
    } catch (error) {
      console.log(error);
    }
  };

  const removeLike = async () => {
    try {
      const likeToRemoveQuery = query(
        likesReference,
        where("postId", "==", post.id),
        where("userId", "==", user?.uid)
      );

      const likeToRemoveData = await getDocs(likeToRemoveQuery);
      const likeId = likeToRemoveData.docs[0].id;
      const likeToRemove = doc(db, "likes", likeId
      );
      await deleteDoc(likeToRemove);
      setLikesCount((prev) => prev?.filter((like) => like.likeId !== likeId));
    } catch (error) {
      console.log(error);
    }
  };

  const checkUserLike = likesCount?.find(
    (likesCount) => likesCount.userId === user?.uid
  );

  useEffect(() => {
    getLikes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div className="title">
        <h1> {post.title} </h1>
      </div>

      <div className="description">
        <p> {post.description} </p>
      </div>

      <footer>
        <p> @RoselineMo_ </p>
        {/* instead of {post.username} */}
        <button onClick={ checkUserLike? removeLike : addLike } className="like">
          {checkUserLike ? <icon.Heart fill="black" /> : <icon.Heart />}
        </button>
        {likesCount.length ? <span> {likesCount?.length} </span> : " "}
      </footer>
    </div>
  );
};
