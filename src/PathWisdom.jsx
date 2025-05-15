import { useAuth } from "./AuthContext";

export default function PathWisdom() {
  const { setLocation } = useAuth();

  const handleContinue = () => {
    setLocation("WISDOM_END");
  };

  return (
    <section>
      <h1>The Path of Wisdom</h1>
      <p>
        As you follow the blue light, you find yourself in a vast library carved
        from crystal.
      </p>
      <p>
        Ancient tomes float gently in the air, their pages turning of their own
        accord.
      </p>
      <p>
        A wise-looking owl perches on a crystal shelf, its eyes glowing with
        knowledge.
      </p>
      <p>
        "Welcome, seeker of wisdom," it hoots. "What knowledge do you seek?"
      </p>
      <button onClick={handleContinue}>Continue your exploration</button>
    </section>
  );
}
