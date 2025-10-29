import { useState } from 'react';
import {planets, Classification} from './components/Data';
import Card from './components/Card';
import ClassificationCard from './components/ClassificationCard';
import './index';

function App(){
    const [selected,setSelected] = useState('inner');

    function handleSelected(selectedOption){
        setSelected(selectedOption);
    }
    return(
        <div className='app-container'>
            <div className='planet-header'>
                <h1>Planets in the Solar System</h1>
            </div>
            <div className='card-display'>
                {planets.map((item)=><Card key={item.title} {...item}/> )}
            </div>
            <div className='classification-container'>
                <ul>
                    <li className={selected==='inner'?'li-active':''} onClick={()=>handleSelected('inner')}>Inner Planets</li>
                    <li className={selected==='outer'?'li-active':''} onClick={()=>handleSelected('outer')}>Outer Planets</li>
                    <li className={selected==='dwarf'?'li-active':''} onClick={()=>handleSelected('dwarf')}>Dwarf Planets</li>
                </ul>
                <div className='classification-card-container'>
                <ClassificationCard{...Classification[selected]}/>
                </div>
            </div>

        </div>
    );
}

export default App;