

function FriendsList(props) {
    return (
        <ul>
            {props.list.map((name) => (
                <li key={name}>
                    <span>{name}</span>
                    <button onClick={() => props.onRemoveFriend(name)}>Remove</button>
                </li>
            ))}
        </ul>
    )
}

export default FriendsList