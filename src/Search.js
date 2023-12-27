import React from 'react';
const Search = () =>{
  return (
    <div>
      <h3>Search Page</h3>
      <p>Should allow users to search for a college and then display relevant listings</p>
      <form>
        <label for="collegeName">College:</label> <br/>
        <input type="text" id="fname" name="fname" /><br/>
      </form>
    </div>
  );
}
export default Search;
