import React from 'react';
import {sum} from './Calc';
import {dkarde} from './Calc';
import {subkarde} from './Calc';
import {prd} from './Calc';

function App(){
return <>
    <ul>
      <li>The Sum of Two Numbers is {sum(50, 5)}</li>
      <li>The Product of Two numbers is {prd(12,5)}</li>
      <li>The Subtraction of Two numbers is {subkarde(20,5)}</li>
      <li>The Division of Two Numbers is {dkarde(20,3).toFixed(2)}</li> 
    </ul>
  </>
}

export default App;