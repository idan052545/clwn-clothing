import React from "react";
//import CollectionItem from "../../components/collection-item/cCollection-item";
import { useParams } from "react-router-dom";

import { selectCollection } from "../../redux/shop/shop.selectors";
import { useSelector } from "react-redux";

import "./sCollection.scss";

const CollectionPage = () => {
  const { collectionId } = useParams();
  const collection = useSelector(selectCollection(collectionId));
  return (
    <div className="collection">
      <h2>Collection PAGE!!!!!!!!</h2>
    </div>
  );
};

export default CollectionPage;
