// Step 1: Import React
import React, { useState } from 'react';

// Step 2: Create the Tabs component
function Tabs() {
  // Step 3: Tab data with label and content
  const tabs = [
    { label: 'Home', content: 'Welcome to the homepage!' },
    { label: 'Profile', content: 'This is your profile.' },
    { label: 'Settings', content: 'Update your preferences.' },
  ];

  // Step 4: useState to store active tab index
  const [ active,setActive ] = useState(0);
  
  // Step 5: Render tab buttons and content
  return (
    <div>
      <div>
        {tabs.map((item,i)=>(
            <button key={i} onClick={()=>setActive(i)}>{item.label}</button>
        ))}
      </div>
      <div>
        {tabs[active].content}
      </div>
    </div>
  );
}

export default Tabs;