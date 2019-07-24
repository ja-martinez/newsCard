import React from 'react';


class Category extends React.Component {
    render () {
        const categories = this.props.category.map(cat => {
            return <button 
                className="categoryButton"
                onClick={this.props.handleButtonSortByCategory}                
            >{cat}</button>
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