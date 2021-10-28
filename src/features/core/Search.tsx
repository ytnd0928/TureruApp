import React, { useState, useEffect } from "react";
import { TextField, ListItem, ListItemText } from "@material-ui/core/";
import Post from "../post/Post";
import { PROPS_POST } from "../types";


interface Props {
  text: string;
}



const postTitles: string[] = [
  
];

const ListItems: React.FC<Props> = (props) => (
  <ListItem alignItems="center" divider>
    <ListItemText primary={props.text} />
  </ListItem>
);

const SearchTextField: React.FC = () => {
  const [keyword, setKeyword] = useState("");
  const [showLists, setShowLists] = useState(false);
  const [filteredpostTitles, setFilteredpostTitles] = useState(postTitles);

  useEffect(() => {
    if (keyword === "") {
      setFilteredpostTitles(postTitles);
      return;
    }

    const searchKeywords = keyword
      .trim()
      .toLowerCase()
      .match(/[^\s]+/g);

    //入力されたキーワードが空白のみの場合
    if (searchKeywords === null) {
      setFilteredpostTitles(postTitles);
      return;
    }

    const result = postTitles.filter((postTitle) =>
      searchKeywords.every((kw) => postTitle.toLowerCase().indexOf(kw) !== -1)
    );

    setFilteredpostTitles(result.length ? result : ["NOT FOUND"]);
  }, [keyword]);

  return (
    <>
      <TextField
        id="field"
        color="secondary"
        variant="outlined"
        label="(例) 千葉県　アジ"
        onChange={(e) => setKeyword(e.target.value)}
        onClick={() => setShowLists(true)}
      />
      {showLists &&
        filteredpostTitles.map((v, i) => <ListItems key={i} text={v} />)}
    </>
  );
};

export default SearchTextField;