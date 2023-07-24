import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Filter from './components/Filter';
import Cards from './components/Cards';
import Spinner from './components/Spinner';
import { filterData, apiUrl } from './data';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const App = () => {
  const [courses, setcourses] = useState(null);
  const [loading, setLoading] = useState(true);



  async function fetchData() {
    setLoading(true);
    try {
      let response = await fetch(apiUrl);
      let output = await response.json();
      setcourses(output);
      console.log("Output is ->", output);
    } catch (error) {
      toast.error("network");
    }
    setLoading(false);
  }
  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>
      <div>
        <Filter filterData={filterData}></Filter>
      </div>
      <div>
        {
          loading ? (<Spinner />) : (<Cards />)
        }
      </div>
    </div>
  );
}

export default App;
