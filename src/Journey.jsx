import { useAuth } from "./AuthContext";

/** The final destination after passing through the tunnel */
export default function Journey() {
  const { setLocation } = useAuth();

  const handlePathChoice = (path) => {
    setLocation(`PATH_${path}`);
  };

  return (
    <section style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
      <h1>The Journey Continues</h1>
      <p>
        As you walk deeper into the tunnel, the air grows cooler and the walls
        begin to sparkle with crystalline formations.
      </p>
      <p>
        The path ahead splits into three directions, each leading to a different
        adventure.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          marginTop: "30px"
        }}>
        <div
          style={{
            padding: "20px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            backgroundColor: "#f0f8ff"
          }}>
          <h2>The Path of Wisdom</h2>
          <p>
            A gentle blue light emanates from this path, and you can hear the
            sound of flowing water.
          </p>
          <button
            onClick={() => handlePathChoice("WISDOM")}
            style={{
              padding: "10px 20px",
              backgroundColor: "#4a90e2",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              width: "100%",
              marginTop: "10px"
            }}>
            Take the Path of Wisdom
          </button>
        </div>

        <div
          style={{
            padding: "20px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            backgroundColor: "#fff5f0"
          }}>
          <h2>The Path of Courage</h2>
          <p>
            This path glows with a warm orange light, and you feel a gentle heat
            radiating from within.
          </p>
          <button
            onClick={() => handlePathChoice("COURAGE")}
            style={{
              padding: "10px 20px",
              backgroundColor: "#e24a4a",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              width: "100%",
              marginTop: "10px"
            }}>
            Take the Path of Courage
          </button>
        </div>

        <div
          style={{
            padding: "20px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            backgroundColor: "#f8f0ff"
          }}>
          <h2>The Path of Mystery</h2>
          <p>
            A swirling mist of purple and silver dances along this path, its
            destination hidden from view.
          </p>
          <button
            onClick={() => handlePathChoice("MYSTERY")}
            style={{
              padding: "10px 20px",
              backgroundColor: "#9b4ae2",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              width: "100%",
              marginTop: "10px"
            }}>
            Take the Path of Mystery
          </button>
        </div>
      </div>
    </section>
  );
}
