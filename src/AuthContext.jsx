import { createContext, useContext, useState, useEffect } from "react";

const API = "https://fsa-jwt-practice.herokuapp.com";

const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
  // Initialize state from session storage
  const [token, setToken] = useState(() => {
    return sessionStorage.getItem("token") || null;
  });
  const [location, setLocation] = useState(() => {
    // If we have a token, start at TABLET, otherwise at GATE
    return sessionStorage.getItem("token") ? "TABLET" : "GATE";
  });
  const [error, setError] = useState(null);

  // Update session storage when token changes
  useEffect(() => {
    if (token) {
      sessionStorage.setItem("token", token);
    } else {
      sessionStorage.removeItem("token");
    }
  }, [token]);

  // Verify token on initial load
  useEffect(() => {
    const verifyToken = async () => {
      const storedToken = sessionStorage.getItem("token");
      if (storedToken) {
        try {
          const response = await fetch(`${API}/authenticate`, {
            method: "GET",
            headers: {
              Authorization: `Bearer ${storedToken}`
            }
          });

          if (response.ok) {
            setToken(storedToken);
            setLocation("TUNNEL");
          } else {
            // If token is invalid, clear it
            sessionStorage.removeItem("token");
            setToken(null);
            setLocation("GATE");
            setError("Your session has expired. Please sign in again.");
          }
        } catch (err) {
          console.error("Token verification failed:", err);
          sessionStorage.removeItem("token");
          setToken(null);
          setLocation("GATE");
          setError("Failed to verify your session. Please sign in again.");
        }
      }
    };

    verifyToken();
  }, []); // Run only on initial mount

  const signup = async (username) => {
    try {
      const response = await fetch(`${API}/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ username })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to sign up");
      }

      setToken(data.token);
      setLocation("TABLET");
      setError(null);
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  const authenticate = async () => {
    if (!token) {
      const error = new Error("You must sign in first before authenticating");
      setError(error.message);
      setLocation("GATE");
      throw error;
    }

    try {
      const response = await fetch(`${API}/authenticate`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      if (!response.ok) {
        setToken(null);
        setLocation("GATE");
        throw new Error("Authentication failed. Please sign in again.");
      }

      setLocation("TUNNEL");
      setError(null);
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  const value = { location, token, error, signup, authenticate };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw Error("useAuth must be used within an AuthProvider");
  return context;
}
