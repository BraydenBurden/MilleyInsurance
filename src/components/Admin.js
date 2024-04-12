import React, { useEffect, useState } from 'react';
import Navbar from './NavBar';
import axios from 'axios';

const AdminPage = () => {
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalQuotes, setTotalQuotes] = useState(0);
  const [problems, setProblems] = useState([]);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetchAdminData();
  }, []);

  const fetchAdminData = async () => {
    const users = await axios.get('/getUsers');
    const problems = await axios.get('/getProblems');
    const questions = await axios.get('/getQuestions');
    const carQuotes = await axios.get('/getCarQuotes');
    const homeQuotes = await axios.get('/getHomeQuotes');

    setTotalUsers(users.data.length);
    setTotalQuotes(homeQuotes.data.length + carQuotes.data.length);
    setProblems(problems.data);
    setQuestions(questions.data);
  };

  return (
    <><Navbar /><div style={{ marginTop: "5rem" }}>
          <h1>Admin Dashboard</h1>
          <div className='numberStats'>
            <div>Total Users: {totalUsers}</div>
            <div>Total Quotes: {totalQuotes}</div>
          </div>
          
          <div className='feedback'>
            <div className='problems'>
              <h2>Problems:</h2>
                <ul style={{ listStyle: "none" }}>
                  {problems.map((item) => (
                      <li key={item.id}>
                      <p><strong>{item.user}</strong></p>
                      <p>{item.message}</p>
                  </li>
                  ))}
                </ul>
            </div>
            <div className='questions'>
                <h2>Questions:</h2>
                  <ul style={{ listStyle: "none" }}>
                    {questions.map((item) => (
                        <li key={item.id}>
                            <p><strong>{item.user}</strong></p>
                            <p>{item.message}</p>
                        </li>
                    ))}
                </ul>
            </div>
          </div>
      </div></>
  );
};

export default AdminPage;
