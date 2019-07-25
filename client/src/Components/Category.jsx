import React from 'react';


class Category extends React.Component {
    render () {
        const categories = this.props.categories.map((cat, index) => {
            return <button 
                className="section-nav-links"
                key={index}
                id={index}
                value={cat}
                onClick={this.props.handleButtonSortByCategory}>{cat}</button>


        })

        return (
            <nav className="section-nav links">
                {categories}
            </nav>
        )
    }
}

export default Category;