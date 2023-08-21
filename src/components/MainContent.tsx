import React from 'react';

interface MainContentProps {
  title: string;
  content: string;
}

const MainContent: React.FC<MainContentProps> = ({ title, content }) => {
  return (
    <main>
      <h2>{title}</h2>
      <p>{content}</p>
    </main>
  );
};

export default MainContent;