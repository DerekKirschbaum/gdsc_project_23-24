import React from 'react';

const Search = () => {
    return (
        <div className='Search'>
            <h3>Search Page</h3>
            <p>This is where users can search for a college and filter for relevant listings</p>
            <form className='SearchForm'>
                <div className='Field'>
                    <label for="location">Location</label>
                    <select name="locations" id="location">
                        <option value="select" disabled>Select college and city</option>
                        <optgroup label="Cal Poly San Luis Obispo">
                            <option value="any">Cal Poly SLO</option>
                            <option value="san-luis-obispo">San Luis Obispo</option>
                            <option value="grover-beach">Grover Beach</option>
                        </optgroup>
                        <optgroup label="UC Santa Barbara">
                            <option value="any">UCSB</option>
                            <option value="santa-barbara">Santa Barbara</option>
                            <option value="goleta">Goleta</option>
                            <option value="isla-vista">Isla Vista</option>
                        </optgroup>
                    </select>
                </div>
                <div className='Field'>
                    <label for="bedroom">Bedrooms</label>
                    <select name="bedrooms" id="bedroom">
                        <option value="any">Any</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                </div>
                <div className='Field'>
                    <label for="bathroom">Bathrooms</label>
                    <select name="bathrooms" id="bathroom">
                        <option value="any">Any</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                </div>
                <div className='Field'>
                    <label for="min-price">Min Price</label>
                    <select name="minimum-price" id="min-price">
                        <option value="any">No Min</option>
                        <option value="500">$500</option>
                        <option value="1000">$1000</option>
                        <option value="1500">$1500</option>
                        <option value="2000">$2000</option>
                    </select>
                </div>
                <div className='Field'>
                    <label for="max-price">Max Price</label>
                    <select name="maximum-price" id="max-price">
                        <option value="any">No Max</option>
                        <option value="500">$500</option>
                        <option value="1000">$1000</option>
                        <option value="1500">$1500</option>
                        <option value="2000">$2000</option>
                    </select>
                </div>
                <div className='Field'>
                    <button className='ToggleFilters'>More Filters</button>
                </div>
            </form>
        </div>
    );
}
export default Search;
