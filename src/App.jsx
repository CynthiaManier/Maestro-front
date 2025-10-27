import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx';
import Description from './components/Description/Description'
import PreviewList from './components/PreviewList/PreviewList.jsx'
import ProjectForm from './components/ProjectForm/ProjectForm.jsx';
import ClientCard from "./components/ClientList/Clientcard/ClientCard.jsx";
import ClientInline from "./components/ClientList/ClientInline/ClientInline.jsx";
import ClientList from "./components/ClientList/ClientList.jsx"; 

import "./index.css";

function App() {

  return (
    <div className='App'>


        
        <Header />
        <main>
      <Description />
    <ProjectForm />
          <PreviewList />
          <ClientCard />
          <ClientInline />
          <ClientList />  
        </main>
        <Footer />
          
          
    </div>
  );

}

export default App;
