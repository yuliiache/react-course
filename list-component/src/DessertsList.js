function DessertsList(props) {
    let lessCalorieDesserts = props.data

        .filter(item => item.calories < 500)
        .sort((a, b) => {
            return a.calories - b.calories;
        })
        .map((dessert) => {
            return (
                <li>
                    {dessert.name} - {dessert.calories} cal
                </li>
            );
        });
    return <ul>{lessCalorieDesserts}</ul>;
}

export default DessertsList
