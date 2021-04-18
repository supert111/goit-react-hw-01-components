import Profile from './components/Social-profile/Profile';
import Statistics from './components/SectionStatistics/Statistics';
import FriendList from './components/FriendList/FriendList';

import user from './components/Social-profile/user.json';
import statisticalData from './components/SectionStatistics/statistical-data.json';
import friends from './components/FriendList/friends.json';


const App = () => (
    <> 
        <Profile 
            name={user.name}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            stats={user.stats}
        />
        <Statistics title="Upload stats" stats={statisticalData} сolor={colorX}/>
        <FriendList friends={friends} />
    </>

);

export default App;

const colorX = {
    backgroundColor: `rgb(${(Math.random() * (255 - 1) + 1)}, ${(Math.random() * (255 - 1) + 1)}, ${(Math.random() * (255 - 1) + 1)})`
}
console.log(typeof(friends))