//* Base */
import Header from './components/Header/Header';
import Edit from './components/Edit/Edit';
import Users from './components/Users/Users';
/* Styles */
import './styles/index.css';
import './styles/normalize.css';
import './styles/variables.css';
/* hook */
import { useState } from 'react';

const App = () => {
  const [isEditVisible, setIsEditVisible] = useState(false);

  const showEdit = () => setIsEditVisible(true);
  const showUsers = () => setIsEditVisible(false);

  return (
    <div>
      <Header onEditClick={showEdit} onUsersClick={showUsers} />
      {isEditVisible ? <Edit /> : <Users />}
    </div>
  );
};

export default App;
