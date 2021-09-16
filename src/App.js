import logo from './logo.svg';
import Profile from './profile/profile'
//import './App.css';

let personalData= {
  name : "Mahjoub",
  prof: "ing",
  bio: "Copyright (C) Microsoft Corporation. Tous droits réservés.",
  img :logo
}

function App() {
  return (
    <Profile data={personalData} />
  );
}

export default App;
