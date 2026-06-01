import { useState } from "react";
import { episodeList } from "./data";

export default function App() {
  const [episodes] = useState(episodeList);
  const [selectedEpisode, setSelectedEpisode] = useState();

  function EpisodeList() {
    return (
      <section className="card">
        <h2>Episode List</h2>
        <ul className="episode-list">
          {episodeList.map((episode) => (
            <li
              key={episode.id}
              onClick={() => setSelectedEpisode(episode)}
              className={selectedEpisode?.id === episode.id ? "selected" : ""}
            >
              <p>{episode.title}</p>
            </li>
          ))}
        </ul>
      </section>
    );
  }

  function EpisodeDetails() {
    if (!selectedEpisode) {
      return (
        <section className="details">
          <h2>Episode Details</h2>
          <p>Select an episode to see more details!</p>
        </section>
      );
    }
    return (
      <section className="details">
        <h2>Episode {selectedEpisode.id}</h2>
        <p>{selectedEpisode.title}</p>
        <p>{selectedEpisode.description}</p>
        <button>Watch This!</button>
      </section>
    );
  }
  return (
    <main className="info">
      <header className="header">
        <h1>Dark Echoes</h1>
      </header>
      <EpisodeList />
      <EpisodeDetails />
    </main>
  );
}
