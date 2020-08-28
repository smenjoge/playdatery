import React from 'react';


function SearchForm(props) {

    return (
        <div>
            <div>
                <div>
                    <input name='search'
                        placeholder='Search'
                        type='text'
                        onChange={props.handleInputChange}></input>
                    <br />
                    <button
                        className='btn btn-link'
                        onClick={props.handleSearchChild}
                        type='submit'
                    >   Search
            </button>
                </div>
            </div>
        </div>
    )
}

export default SearchForm;