import { BrowserRouter as Router } from 'react-router-dom'

root.render(
  <React.StrictMode>
    <ToastContainer />
    <Router basename="/Sketch">
      <App />
    </Router>
  </React.StrictMode>
)
