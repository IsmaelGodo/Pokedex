import React from "react";

const Lab = () => {
  return (
    <article className="create-container">
      <form>
        <input type="text"placeholder="ID"></input>
        <input type="text"placeholder="Name"></input>
        <input type="text"placeholder="Type 1"></input>
        <input type="text"placeholder="Type 2"></input>
        
        <input type="text"placeholder="Weight"></input>
        <input type="text"placeholder="Height"></input>
        <input type="file"placeholder="Image"></input>
        <button type="submit" className="button">Create</button>
      </form>
    </article>
  )
};

export default Lab;
