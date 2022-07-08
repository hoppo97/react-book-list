import React from 'react'
import { Books } from '../components/Books';
import { Header } from '../components/Header/Header';
import { SearchArea } from '../components/SearchArea';

 const Home = () => {
  return (
    <div>
      <Header />
      <SearchArea />
      <Books />
    </div>
  )
}

export default Home;
