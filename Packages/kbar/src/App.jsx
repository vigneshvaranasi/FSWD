import React, { useState } from 'react';
import {
  KBarProvider,
  KBarPortal,
  KBarPositioner,
  KBarAnimator,
  KBarSearch,
  KBarResults,
  useMatches
} from 'kbar';

function App() {

  const words = ["apple", "banana", "cherry", "date", "fig", "grape", "kiwi", "lemon", "mango", "orange", "pear", "quince", "raspberry", "strawberry", "tangerine", "watermelon"];

  function SearchResults() {
    const { results } = useMatches();
    return (
      <KBarResults
        items={results}
        onRender={({ item, active }) => (
          <div
            style={{
              padding: '12px',
              background: active ? '#f5f5f5' : '#fff',
              cursor: 'pointer',
            }}
          >
            {item.name}
          </div>
        )}
      />
    );
  }

  const [selected, setSelected] = useState(null);

  const actions = words.map((word) => ({
    id: word,
    name: word,
    keywords: word,
    perform: () => setSelected(word),
  }));

  return (
    <>
      <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        <h1>Word Search</h1>
        <p>Press Cmd+K (or Ctrl+K) to search for a word.</p>
        {selected && (
          <p>The Selected Word is: <strong>{selected}</strong></p>
        )}
      </div>
      <KBarProvider actions={actions}>
        <KBarPortal>
          <KBarPositioner
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              zIndex: 10000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '16px',
            }}
          >
            <KBarAnimator
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "8px",
                boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.3)",
                maxWidth: "600px",
                width: "100%",
                padding: "16px",
                boxSizing: "border-box",
                height:"auto",
              }}
            >
              <KBarSearch
                style={{
                  padding: "12px",
                  fontSize: "18px",
                  width: "100%",
                  border: "1px solid #ddd",
                  borderRadius: "4px",
                  outline: "none",
                  boxSizing: "border-box",
                }}
              />
              <div style={{
                paddingBottom: '20px',
              }}>
                <SearchResults />
              </div>
            </KBarAnimator>
          </KBarPositioner>
        </KBarPortal>
      </KBarProvider>
    </>
  );
}

export default App;
