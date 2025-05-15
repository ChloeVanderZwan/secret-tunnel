import { useAuth } from "./AuthContext";

export default function PathCourage() {
  const { setLocation } = useAuth();

  const handleContinue = () => {
    setLocation("COURAGE_END");
  };

  return (
    <section>
      <h1>The Path of Courage</h1>
      <p>The heat intensifies as you walk deeper into the orange glow.</p>
      <p>
        You find yourself in a chamber of molten crystal, where a mighty dragon
        slumbers.
      </p>
      <p>
        Its scales shimmer with the colors of fire, and its breath creates
        patterns of light in the air.
      </p>
      <p>The dragon opens one eye, regarding you with ancient wisdom.</p>
      <p>
        "Only the brave dare approach the heart of flame," it rumbles. "What
        brings you here?"
      </p>
      <button onClick={handleContinue}>Face the challenge</button>
    </section>
  );
}
