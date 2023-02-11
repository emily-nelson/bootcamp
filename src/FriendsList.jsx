

function FriendsList(props) {
    return (
        <>
            <ul>
                <h1>Active Friends</h1>
                {props.activeFriendsList.map((name) => (
                    <li key={name}>
                        <span>{name}</span>
                        <button onClick={() => props.onDeactivateFriend(name)}>Deactivate</button>
                        <button onClick={() => props.onRemoveFriend(name)}>Remove</button>
                    </li>
                ))}
            </ul>

            <ul>
                <h1>Inactive Friends</h1>
                {props.inactiveFriendsList.map((name) => (
                    <li key={name}>
                        <span>{name}</span>
                        <button onClick={() => props.onActivateFriend(name)}>Activate</button>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default FriendsList