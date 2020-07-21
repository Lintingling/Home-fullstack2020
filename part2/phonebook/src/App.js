import React, { useState, useEffect } from "react";
import Filter from "./component/Filter";
import PersonForm from "./component/PersonForm";
import Persons from "./component/Persons";
import personService from "./services/persons";
import Notification from "./component/Notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    personService.getAll().then((response) => {
      setPersons(response.data);
    });
  }, []);

  return (
    <div>
      <h2>phonebook</h2>
      <Notification notification={notification} />
      <Filter persons={persons} />
      <h2>add a new</h2>
      <PersonForm
        persons={persons}
        setPersons={setPersons}
        setNotification={setNotification}
      />
      <h2>Numbers</h2>
      <Persons
        persons={persons}
        setPersons={setPersons}
        setNotification={setNotification}
      />
    </div>
  );
};

export default App;
