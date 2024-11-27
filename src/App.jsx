import data from './data';
import {useState} from 'react'
import List from './List'
const App = () => {
  const [people,setPeople]=useState(data);
  return <main>
    <section className='container'>
       <h2>{people.length} birthdays today</h2>
       <List people={people}/>
       <button className='btn btn-block' onClick={()=>setPeople([])}> Clear all</button>
    </section>
  </main>;
};
export default App;
