import React from 'react';
import CollectionItem from '../collection-item/collection-item.component';
import {Link} from 'react-router-dom';
import './collection-preview.styles.scss'

const CollectionPreview = ({title, items, match}) => (
  <div className= 'collection-preview'>
    <Link className= 'title' to= {`/shop/${title.toLowerCase()}`}>{title}</Link>
    <div className= 'preview'>
      {
        items
        .filter((item, index) => index < 4)
        .map( item => (
          <CollectionItem key= {item.id} item= {item} />
        ))
      }
    </div>
  </div>
)

export default CollectionPreview;