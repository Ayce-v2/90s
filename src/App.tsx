import React from 'react';
import {SeasonsAndFg} from './seasons-and-fg';
import { TitlesWon } from './championships';
import { HonorableMentions } from './honorable-mentions';
import { TheGoat } from './the-goat';



function App() {
  return <> <div className='div1'>
    <h1>The Official Page of the 1990's Basketball Icons</h1> 
    <h4>By: Andrew Menendez</h4>

    <p>This webpage is dedicated to the statistics of the most iconic professional basketball players in the 1990's. 
        At the top of the list we have Michael Jordan, along with other household names such as Larry Bird,
        Shaquille O'Neal, and Hakeem Olajuwon. 
    </p>
    </div>
    <div className='div2'>
    <SeasonsAndFg player='Michael Jordan' seasons={15} fieldGoal={49.7}></SeasonsAndFg>
    <SeasonsAndFg player="Larry Bird" seasons={13} fieldGoal={49.6}></SeasonsAndFg>
    <SeasonsAndFg player="Shaquille O'Neal" seasons={19} fieldGoal={58.2}></SeasonsAndFg>
    </div>
    <div className='div3'>
    <TitlesWon name="Michael Jordan" titles={6}></TitlesWon>
    <TitlesWon name="Larry Bird" titles={3}></TitlesWon>
    <TitlesWon name="Shaquille O'Neal" titles={4}></TitlesWon>
    </div>
    <div className='div4'>
    <HonorableMentions></HonorableMentions>
    </div>
    <div className='div5'>
    <TheGoat fullName='Michael Jordan' rings={6}></TheGoat>
    
    
    
    </div>
    </>
  

}

export default App;
