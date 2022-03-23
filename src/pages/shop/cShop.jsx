import React from "react";
import CollectionsOverview from "../../components/collections-overview/cCollectionsOverview";
import { Routes, Route } from "react-router-dom";
import CollectionPage from "../collection/cCollection";

const ShopPage = () => (
  <div className="shop-page">
    <Routes>
      <Route path="/" element={<CollectionsOverview />} />
      <Route path=":collectionId" element={<CollectionPage />} />
    </Routes>
  </div>
);
export default ShopPage;
