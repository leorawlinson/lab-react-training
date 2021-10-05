import React from 'react';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';
import Rating from './components/Rating';
import './App.css';

function App() {
  return (
    <div className="App">
      <IdCard
        lastname="Tom"
        firstname="Tim"
        gender="Male"
        height={183}
        birth={new Date('1995-01-01').toDateString()}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />
      <IdCard
        lastname="Delores"
        firstname="Obrien"
        gender="Female"
        height={172}
        birth={new Date('1988-05-11').toDateString()}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>
      <Random min={6} max={100} />
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />
      <CreditCard
        type="Visa"
        number="0123456789018845"
        expirationMonth={3}
        expirationYear={2021}
        bank="BNP"
        owner="Maxence Bouret"
        bgColor="#11aa99"
        color="white"
      />
      <CreditCard
        type="Master Card"
        number="0123456789010995"
        expirationMonth={3}
        expirationYear={2021}
        bank="N26"
        owner="Maxence Bouret"
        bgColor="#eeeeee"
        color="#222222"
      />
      <CreditCard
        type="Visa"
        number="0123456789016984"
        expirationMonth={12}
        expirationYear={2019}
        bank="Name of the Bank"
        owner="Firstname Lastname"
        bgColor="#ddbb55"
        color="white"
      />
      <Rating children="0">0</Rating>
      <Rating children="1.49">1.49</Rating>
      <Rating children="1.5">1.5</Rating>
      <Rating children="3">3</Rating>
      <Rating children="4">4</Rating>
      <Rating children="5">5</Rating>
    </div>
  );
}

export default App;
