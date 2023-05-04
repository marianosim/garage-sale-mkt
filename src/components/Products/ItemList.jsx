import React from 'react';
import Item from './Item';
import './ItemList.css';

function ItemList({ items }) {
  return (
    <>
      <div className='item-list'>
        {items.map((item, i) => {
          return <Item item={item} key={i} />
        })}
      </div>
    </>
  )
}

export default ItemList;