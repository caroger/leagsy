import React from "react";
import EditorCard from "./EditorCard";

const EditorPicks = ({ products }) => {
  return (
    <div className="EditorPicks">
      <div className="gridContainer">
        <div className="text1">
          <h1>Editor's Picks</h1>
          <h2>Promo's Day Gifts</h2>
          <h3>Shop these unique finds</h3>
        </div>
        <EditorCard product={products[Object.keys(products)[0]]} />
        <EditorCard product={products[Object.keys(products)[1]]} />
        <EditorCard product={products[Object.keys(products)[2]]} />
        <EditorCard product={products[Object.keys(products)[3]]} />
        <EditorCard product={products[Object.keys(products)[4]]} />
        <EditorCard product={products[Object.keys(products)[5]]} />
        <div className="text2">
          This Promo’s Day feels different, and his gift should, too. Whether
          you’re celebrating yourself, gifting the challenger players your life,
          or remembering all that League meant to you, here’s to finding truly
          one-of-a-kind
        </div>
      </div>
    </div>
  );
};

export default EditorPicks;
