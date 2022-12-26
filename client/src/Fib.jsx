import React, { useEffect } from 'react';
import axios from 'axios';

export default function Fib() {
  const [state, setState] = React.useState({
    seenIndexes: [],
    values: {},
    index: '',
  });

  const fetchValues = async () => {
    const response = await axios.get('/api/values/current');
    setState((prev) => ({
      ...prev,
      values: response.data,
    }));
  };

  const fetchIndexes = async () => {
    const response = await axios.get('/api/values/all');
    setState((prev) => ({
      ...prev,
      seenIndexes: response.data,
    }));
  };

  useEffect(() => {
    fetchIndexes();
    fetchValues();
  }, []);

  const renderSeenIndexes = () => {
    return state.seenIndexes.map(({ number }) => number).join(', ');
  };

  const renderValues = () => {
    const entries = [];

    for (let key in state.values) {
      entries.push(
        <div key={key}>
          For index {key} I calculated {state.values[key]}
        </div>
      );
    }

    return entries;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    await axios.post('/api/values', {
      index: state.index,
    });

    setState((prev) => ({
      ...prev,
      index: '',
    }));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Enter your index:</label>
        <input
          value={state.index}
          onChange={(e) =>
            setState((prev) => ({ ...prev, index: e.target.value }))
          }
        />
        <button type="submit">Submit</button>
      </form>
      <h3>Indexes I have seen</h3>
      {renderSeenIndexes()}

      <h3>Calculated values:</h3>
      {renderValues()}
    </div>
  );
}
