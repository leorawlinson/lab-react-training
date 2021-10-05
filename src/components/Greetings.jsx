import React from 'react';
const greetingStyle = {
  borderStyle: 'solid',
  fontSize: '20px',
  paddingLeft: '10px',
  margin: '5px',
};

function greetingDecider(language) {
  switch (language) {
    case 'en':
      return 'Hello';
    case 'de':
      return 'Hallo';
    case 'fr':
      return 'Bonjour';
    case 'es':
      return 'Hola';
    default:
      return 'Hello';
  }
}

function Greetings({ lang, children }) {
  return (
    <div>
      <p style={greetingStyle}>
        {greetingDecider(lang)} {children}
      </p>
    </div>
  );
}

export default Greetings;
