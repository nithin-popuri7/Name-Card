import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const StudentCard = ({ name, registrationNumber, photo }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <Card>
      <Photo src={photo} alt="Student Photo" />
      <Info>
        <Name>{name}</Name>
        <RegNumber>{registrationNumber}</RegNumber>
        {isVisible && <AdditionalContent>I'm Nithin from 4th Year Artificial Intelligence and Machine Learning.</AdditionalContent>}
        <ToggleButton onClick={toggleVisibility}>
          {isVisible ? 'Hide Details' : 'Show Details'}
        </ToggleButton>
      </Info>
    </Card>
  );
};

export default StudentCard;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 300px;
  margin: 20px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const Photo = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 10%;
  margin-bottom: 20px;
`;

const Info = styled.div`
  text-align: center;
`;

const Name = styled.h2`
  font-size: 1.5em;
  margin: 0;
`;

const RegNumber = styled.p`
  color: #555;
  margin: 5px 0;
`;

const AdditionalContent = styled.div`
  margin-top: 10px;
  color: #333;
  font-size: 0.9em;
  transition: opacity 0.3s ease;
`;

const ToggleButton = styled.button`
  margin-top: 10px;
  padding: 10px 20px;
  font-size: 1em;
  color: white;
  background-color: #000000;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;
