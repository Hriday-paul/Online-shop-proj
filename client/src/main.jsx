import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Rout/Rout.jsx'
import Authonicate from './ContextHandler/Authonicate/Authonicate.jsx'
import FilterContext from './ContextHandler/FilterContext/FilterContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authonicate>
      <FilterContext>
        <RouterProvider router={router} />
      </FilterContext>
    </Authonicate>
  </React.StrictMode>,
)
