import React from 'react';
import axios from 'axios';
import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";

const Resource = () => {
    const [students, setStudents] = useState([]);
    const [cookies, setCookie] = useCookies(['token']);

    useEffect(() => {
        axios.get('http://localhost:3000/students', {
            headers: {
                'Authorization': `token ${cookies.token}`
              }
          })
          .then(response => {
            setStudents(response.data);
          })
          .catch(error => {
            console.error('Error retrieving users:', error);
          });
      }, []);

    return(
        <>
            <h3>Resource page</h3>
            <ul>
                {students.map(st => (
                    <li key={st.Id}>{st.Name}</li>
                ))}
            </ul>
        </>
    )
}

export default Resource;