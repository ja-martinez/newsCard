import React from 'react';


class Categories extends React.Component {
    render () {

        const categories = this.props.categories.map((category, index) => {
            return <button 
                className={'section-nav-links ' + (category === this.props.category ? ' nav-selected' : '')}
                key={index}
                id={index}
                value={category}
                onClick={(e) => this.props.changeCategory(e.target.value)}>{category}
                </button>
        })

        return (
            <nav className="section-nav links">
                {categories}
            </nav>
        )
    }
}

export default Categories;