import "./App.css";
import { RadioGroup } from "./Radio";
import { useState } from "react";

function App() {
  const [selected, setSelected] = useState("");
  return (
      <div className="App">
        <h2>How did you hear about Little Lemon?</h2>
        <RadioGroup onChange={setSelected} selected={selected}
            options={[
                { value: "social_media", content: "Social Media" },
                { value: "friends", content: 'Friends' },
                { value: "advertising", content: 'Advertising' },
                { value: "other", content: 'Other' }
            ]}
        />
        <button disabled={!selected}>Submit</button>
      </div>
  );
}

export default App;
