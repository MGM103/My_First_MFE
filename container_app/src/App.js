import React, {Suspense} from 'react';
import './App.css';

const ExampleApp = React.lazy(() => import("remote/App"));

function App() {
  return (
    <div className="App">
      <h1>Container App</h1>
      <Suspense fallback={"Loading..."}>
        <ExampleApp />
      </Suspense>
    </div>
  );
}

export default App;
