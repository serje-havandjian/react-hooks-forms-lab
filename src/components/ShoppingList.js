import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {

  //HANDLING FILTER
  const [filterItems, setFilterItems] = useState("")
  function onSearchChange(e){
    setFilterItems(e.target.value)
  }
  console.log(filterItems)
  // END OF HANDLING FILTER


  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All"){
      return true
    } else{
      return item.category
    }
  });

  const displayFilteredItems = items.filter((item)=>{
    if (filterItems === ""){
      return true
      }else{
        return item.name.includes(filterItems)
      }
  })
  
  console.log(displayFilteredItems)



  return (
    <div className="ShoppingList">
      <ItemForm />
      <Filter filterItems={filterItems} setFilterItems={setFilterItems} onCategoryChange={handleCategoryChange} onSearchChange={onSearchChange} />
        <ul className="Items">
          {itemsToDisplay.map((item) => (
            <Item key={item.id} name={item.name} category={item.category} />
          ))}
        </ul>
    </div>
  );
}

export default ShoppingList;
