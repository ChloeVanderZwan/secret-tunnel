import { useAuth } from "./AuthContext";

import Entrance from "./Entrance";
import Tablet from "./Tablet";
import Tunnel from "./Tunnel";
import Journey from "./Journey";
import PathWisdom from "./PathWisdom";
import PathCourage from "./PathCourage";
import PathMystery from "./PathMystery";

export default function App() {
  const { location } = useAuth();

  if (location === "GATE") return <Entrance />;
  if (location === "TABLET") return <Tablet />;
  if (location === "TUNNEL") return <Tunnel />;
  if (location === "PATH_WISDOM" || location === "WISDOM_END")
    return <PathWisdom />;
  if (location === "PATH_COURAGE" || location === "COURAGE_END")
    return <PathCourage />;
  if (location === "PATH_MYSTERY" || location === "MYSTERY_END")
    return <PathMystery />;
  return <Journey />;
}
