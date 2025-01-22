import React, { useState } from 'react';
import UserGrid from './components/UserGrid';
import UserDetail from './components/UserDetail';

const App = () => {
  const [selectedUserId, setSelectedUserId] = useState(null);
  const isAdmin = true;

  return (
    <div>
      {selectedUserId ? (
        <UserDetail
          userId={selectedUserId}
          isAdmin={isAdmin}
        />
      ) : (
        <UserGrid
          onSelectUser={setSelectedUserId}
          isAdmin={isAdmin}
        />
      )}
    </div>
  );
};

export default App;
