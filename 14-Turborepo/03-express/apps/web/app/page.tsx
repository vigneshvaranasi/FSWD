import { username,BACKEND_URL } from "@repo/common/config";

export default function Home() {
  return (
    <div>
      <h1>Hello {username} </h1>
      <a href={BACKEND_URL}>Go to Backend</a>
    </div>
  );
}
