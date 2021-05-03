import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Launches from './pages/Launches'
import styled from 'styled-components'
import background from './assets/bg.jpg'
import Crew from './pages/Crew';
import Ships from './pages/Ships';
import Navbar from './components/Navbar';
import EachShipDetail from './components/EachShipDetail'
import EachCrewDetail from './components/EachCrewDetail'
import EachLaunchDetail from './components/EachLaunchDetail.js'

const App = () => {
  // launches, ships and crew
  const [launches, setLaunches] = useState([]);
  const [ships, setShips] = useState([]);
  const [crew, setCrew] = useState([]);

  const [loading, setLoading] = useState(false);

  // pagination for launches
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  useEffect(() => {
    const fetchLaunches = async () => {
      setLoading(true);
      const res = await axios.get('https://api.spacexdata.com/v4/launches');
      setLaunches(res.data);
      setLoading(false);
    }

    const fetchShips = async () => {
      setLoading(true);
      const res = await axios.get('https://api.spacexdata.com/v4/ships');
      setShips(res.data);
      setLoading(false);
    }

    const fetchCrew = async () => {
      setLoading(true);
      const res = await axios.get('https://api.spacexdata.com/v4/crew');
      setCrew(res.data);
      setLoading(false);
    }

    fetchLaunches();
    fetchShips();
    fetchCrew();
  }, []);

  // pagination logic
  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const currentIndex = launches.slice(firstIndex, lastIndex);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <AppContainer>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={() =>
            <Launches launches={currentIndex}
              lengthOfLaunches={launches.length}
              ships={ships}
              crew={crew}
              loading={loading}
              itemsPerPage={itemsPerPage}
              paginate={paginate} />
          } />
          <Route path='/ships' exact component={() =>
            <Ships ships={ships}
              loading={loading} />
          } />
          <Route path='/crew' exact component={() =>
            <Crew crew={crew}
            launches={launches}
            loading={loading} />
          } />

          {/* Individual pages */}
          <Route path={'/ships/:id'} component={EachShipDetail} />
          <Route path='/crew/:id' component={EachCrewDetail} />
          <Route path='/launch/:id' component={EachLaunchDetail} />
        </Switch>
      </Router>
    </AppContainer>
  );
}

export default App;

export const AppContainer = styled.div`
  background-image: url(${background});
  background-repeat: no-repeat;
  background-attachment: fixed;
`