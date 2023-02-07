import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setScores } from "../../reducers/gameSlice";

import app from "../firebase/FirebaseConfig";
import { getFirestore, collection, getDocs } from "firebase/firestore";
const db = getFirestore(app);

// Component that fetches scores from database and puts them in ascending order
const GetScores = () => {
  const dispatch = useDispatch();

  const compare = (a, b) => {
    if (a.score < b.score) {
      return -1;
    }
    if (a.score > b.score) {
      return 1;
    }
    return 0;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Check if there is internet connection
        if (navigator.onLine) {
          const querySnapshot = await getDocs(collection(db, "scores"));
          let docData = [];
          querySnapshot.forEach((doc) => {
            docData.push(doc.data());
          });
          docData.sort(compare);
          dispatch(setScores(docData));
        } else {
          throw new Error("No internet connection");
        }
      } catch (e) {
        alert(e);
      }
    };
    fetchData();
  }, []);

  return null;
};

export default GetScores;
