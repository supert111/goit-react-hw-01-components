import PropTypes from 'prop-types';
import styles from './friendList.module.css';

const FriendList = ({friends}) => {
    return (
        <>
            <ul className={styles.friend_list}>
                {friends.map(friend => 
                    <li className={styles.item} key={friend.id}>
                        <span className={
                            friend.isOnline ? styles.isOnline : styles.isOfline}>                                
                        </span>

                        <img className={styles.avatar} 
                            src={friend.avatar} 
                            alt={friend.name}
                            width="48"
                        />
                        <p className={styles.name}>{friend.name}</p>
                    </li>
                )}
            </ul>
        </>
    );
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            id: PropTypes.number.isRequired,
        })
    )
}

export default FriendList;