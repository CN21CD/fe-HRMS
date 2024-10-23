import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Layout from './components/Layout';
import './App.css';

function App() {
  // const nav = useNavigate();

  // useEffect(() => {
  //   const checkLoginStatus = async () => {
  //     try {
  //       const token = await localStorage.getItem('authToken');
  //       if (token === null) {
  //         nav('/login');
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   checkLoginStatus();
  // }, []);

  return <Layout />;
}

export default App;
