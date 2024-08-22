import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center gap-2 p-12 bg-[#000000] underline">
      <p className="text-white"><Link href={"/impress"}>Impress</Link></p>
      <p className="text-white"><Link href={"/data-privacy"}>Data Privacy</Link></p>
      <p className="text-white">© All rights reserved</p>
      <p className="text-white">RAYMOND BERTRAM</p>
    </footer>
  );
}
