import Image from "next/image";

export default async function Home() {
  await new Promise((resolve)=>setTimeout(resolve, 2000))
  // throw new Error('not found')
  return (
    <div>
      Home
    </div>
  );
}
 