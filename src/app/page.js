import Image from "next/image";
//common components jo hai wo layout.js me import karna hai
//section specific components jo hai wo page.js me import karna hai
import Bannersection from "./components/Home-components/Bannersection";
import Latestcourses from "./components/Home-components/Latestcourses";

export default function Home() {
  return (
    <>
      <Bannersection />
      <Latestcourses />
    </>
  );
}
