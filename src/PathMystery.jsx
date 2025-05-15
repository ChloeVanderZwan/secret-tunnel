import { useAuth } from "./AuthContext";

export default function PathMystery() {
  const { setLocation } = useAuth();

  const handleContinue = () => {
    setLocation("MYSTERY_END");
  };

  return (
    <section>
      <h1>The Path of Mystery</h1>
      <p>The mist swirls around you as you venture deeper into the unknown.</p>
      <p>
        Shapes and shadows dance in the purple haze, forming and reforming into
        strange patterns.
      </p>
      <p>
        You hear whispers in languages both familiar and strange, speaking of
        secrets long forgotten.
      </p>
      <p>
        A figure materializes from the mist, its form constantly shifting
        between different shapes.
      </p>
      <p>
        "The mysteries of the universe await those who dare to seek them," it
        murmurs. "Are you ready to learn?"
      </p>
      <button onClick={handleContinue}>Embrace the mystery</button>
    </section>
  );
}
