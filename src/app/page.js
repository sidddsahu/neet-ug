import HomeScreen from "@/components/Home/HomeScreen";
import SpecialDecks from "@/components/Home/SpecialDecks";
// import Home  from "@/components/Home/HomeFirst";

import Image from "next/image";
import HomeThird from "@/components/Home/HomeFirst";

export default function Home() {
  return (
<>
 <HomeScreen />
 <SpecialDecks />
 <HomeThird/>
</>


  );
}
