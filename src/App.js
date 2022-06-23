import './App.css';
import { Header,MainContainer,CreateContainer } from './component'
import { Route, Routes } from 'react-router-dom'
import {AnimatePresence} from 'framer-motion'
import { getAllFoodItems } from './utils/firebaseFunction';
import { useEffect } from 'react';
import { useStateValue } from './context/StateProvider';
import { actionType } from './context/reducer';

function App() {

  const [{foodItems},dispatch]=useStateValue()

  const fetchData=async()=>{
    await getAllFoodItems().then(data=>{
      dispatch({
        type:actionType.SET_FOOD_ITEMS,
        foodItems:data,
      })
      console.log(data)
    })
  }

  useEffect(()=>{
    fetchData();
  },[])

  return (
<AnimatePresence exitBeforeEnter>
    <div className="w-screen h-auto flex flex-col bg-primary">
      <Header />
      <main className='mt-14 md:mt-20 px-4 md:px-16 py-4 w-full'>
      <Routes>
        <Route path='/*' element={<MainContainer/>}/>
        <Route path='/createItem' element={<CreateContainer/>}/>
      </Routes>
      </main>
    </div>
    </AnimatePresence>

  );
}

export default App;
