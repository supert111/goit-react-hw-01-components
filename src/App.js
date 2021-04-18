import Profile from './components/Social-profile/Profile';
import Statistics from './components/SectionStatistics/Statistics';

import user from './components/Social-profile/user.json';
import statisticalData from './components/SectionStatistics/statistical-data.json';


const App = () => (
    <> 
        <Profile 
            name={user.name}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            stats={user.stats}
        />
        <Statistics title="Upload stats" stats={statisticalData} />;
    </>

);

export default App;