import Header from './components/Header/Header';
import Edit from './components/Edit/Edit';
import Users from './components/Users/Users';
import BasicModal from './components/Modal/Modal';
import './styles/index.css';
import './styles/normalize.css';
import './styles/variables.css';

const App = () => {
  return (
    <div>
      <BasicModal />
      <Header />
      <Users />
      <Edit />
    </div>
  );
};

export default App;
