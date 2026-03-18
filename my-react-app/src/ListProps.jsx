import PropTypes from 'prop-types';

function ListProps(props) {

    const category = props.category
    const itemList = props.items;

    itemList.sort((a, b) => a.name.localeCompare(b.name));

    const listItems = itemList.map(item => <li key={item.id}>
                                            {item.name}: &nbsp;
                                            <b>{item.calories}</b>
                                        </li>);

    return(
        <>
            <h3 className="list-category">{category}</h3>
            <ol className="list-items">{listItems}</ol>
        </>
    );
}

ListProps.defaultProps = {
    category: "Category",
    items: [],
}
ListProps.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number,
                                            name: PropTypes.string,
                                            calories: PropTypes.number})),
}
export default ListProps;