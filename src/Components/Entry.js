import moment from 'moment';

function Entry({ entry }) {
    const timeStamp = entry.createdAt;
    const time = moment(timeStamp).format('LLL');
    return (
        <li className="list-group-item">
            <div className="bg-light">
                {entry.user_name}    |
                <span className="px-3">{time}</span>
            </div>
            <div>
                {entry.message}
            </div>
        </li>
    )
}

export default Entry;
