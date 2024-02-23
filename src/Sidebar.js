import React from 'react'
import './App.css'


const Sidebar = ( { sections } ) => {
  return (
    <div className='Sidebar'>
      <h4 className="font-link">Our Menu</h4>
      <ul className='SidebarList'>
        {sections.map((section) => {
          return (
            <li 
              key={section.id}
              className='row'
              onClick={() => window.location.pathname = section.id}
            >
              <div>
                {section.label}
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Sidebar