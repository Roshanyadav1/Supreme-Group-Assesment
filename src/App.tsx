// common layout containe headerand footer
import Layout from "./layout"

// import landing page or home page
import Home from "./pages/home"

function App() {
  return (
    <div>
      <Layout>
        <Home />
      </Layout>
    </div>
  )
}

export default App