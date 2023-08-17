//
import { useState, useEffect } from "react";
import axios from "axios";
import Entry from "./Entry";

export default function Profile() {
  // /entries/:owner_id
  const [content, setContent] = useState(null);
  useEffect(() => {
    axios
      .get("https://wit-courses.onrender.com/entries/:owner_id")
      .then((res) => {
        const imgPosts = res.data.filter((entry) => entry.img_url);
        setContent(imgPosts);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {/* <h2>Eklediklerim</h2> */}

      {/* {content?.map((entry) => (
        <Entry item={entry} />
      ))} */}
      {content
        ? content.map((entry) => <Entry key={entry.id} item={entry} />)
        : "Loading...."}
    </div>
  );
}
