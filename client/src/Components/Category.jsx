import React from 'react';


class Category extends React.Component {
    render () {
        const categories = this.props.categories.map((cat, index) => {
            return <button 
                className="categoryButton"
                key={index}
                id={index}
                value={cat}
                onClick={this.props.handleButtonSortByCategory}>{cat}</button>
        })

        return (
            <div>
                <div className="categoryContainer">
                    {categories}
                </div>
            </div>
        )
    }
}

export default Category;