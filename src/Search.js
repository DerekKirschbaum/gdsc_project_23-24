import React from 'react';


const Search = () => {
    return (
        <div className='Search'>
            <h3>Search Page</h3>
            <p>This is where users can search for a college and filter for relevant listings</p>
            <form className='SearchForm'>
                <div className='Field'>
                    <label for="location">Location</label>
                    <select name="locations" id="location" onChange={displayMap}>
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
                <div>
                    <button className='SubmitSearch' onClick={displayMap}>Submit</button>
                </div>
            </form>
            <div className='Map' id='map'>
                {/* Default option for selection */}
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3256.0391111229765!2d-120.665074488386!3d35.30500965043493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80ecf1b4054c3551%3A0x98b3b48a29d99103!2sCalifornia%20Polytechnic%20State%20University!5e0!3m2!1sen!2sus!4v1704758297839!5m2!1sen!2sus" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>

        </div>
    );
}

const displayMap = () => {
    let location = document.getElementById('location').value;
    let link;
    switch (location) {
        case 'Cal Poly SLO':
            link = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3256.0391111229765!2d-120.665074488386!3d35.30500965043493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80ecf1b4054c3551%3A0x98b3b48a29d99103!2sCalifornia%20Polytechnic%20State%20University!5e0!3m2!1sen!2sus!4v1704758297839!5m2!1sen!2sus";
            break;
        case 'San Luis Obispo':
            break;
        case 'Grover Beach':
            break;
        case 'UCSB':
            link = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13165.553873823337!2d-119.8468037!3d34.4168864!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e93f67f3314b37%3A0x4e956b7e5cb6cec2!2sUniversity%20of%20California%2C%20Santa%20Barbara!5e0!3m2!1sen!2sus!4v1704756987025!5m2!1sen!2sus";
            break;
        case 'Santa Barbara':
            break;
        case 'Goleta':
            break;
        case 'Isla Vista':
            break;
    }
    document.getElementById('map').innerHTML = <iframe src={link} width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>;
}

export default Search;
