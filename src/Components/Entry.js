
function Entry({ entry }) {
    return (
        <li className="list-group-item">
            <div>
                {entry.user_name}
            </div>
            <div>
                {entry.message}
            </div>
        </li>
    )
}

export default Entry;
