import Entry from '../Components/Entry';
import useAxiosGet from '../Hooks/useAxiosGet';

function Entries() {
    const entries = useAxiosGet('chat');

    let content = '';
    if (entries.loading) {
        content = <h4>Ielādējas ...</h4>
    } else if (entries.data.length === 0) {
        content = <h4>Nav atrasts neviens ieraksts</h4>
    } else {
        content = (
            <ul className="list-group">
                {entries.data.map((entry) => <Entry key={entry._id} entry={entry} />)}
            </ul>
        )
    }
    return (
        <div>
            {content}
        </div>
    )
}

export default Entries;
