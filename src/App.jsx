
import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/CoffeeCard';
import { useState } from 'react';

function App() {

  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);
  return (
    <div className='m-20'>
      <h2 className='text-6xl my-20 text-purple-600'>
        Hot Cold Coffee: {coffees.length}
      </h2>
      <div className='grid md:grid-cols-2 gap-4'>
        {
          coffees.map(coffee => <CoffeeCard 
            key={coffee._id} 
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}
            ></CoffeeCard>)
        }
      </div>
      
    </div>
  )
}

export default App
