import React from 'react';
import CardCutterMX10 from './CardCutterMX10';
import NavLeft from './NavLeft';
import RelatedProducts from './RelatedProducts';

export default function Content() {
  return (
    <main>
      <div className="row">
        <div className="col-md-4 p-0">
          <NavLeft />
        </div>
        <div id="content" className="col-md">
          <CardCutterMX10 />
          <RelatedProducts />
        </div>
      </div>
    </main>
  );
}
