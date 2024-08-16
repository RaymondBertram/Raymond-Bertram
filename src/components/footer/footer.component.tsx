import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-row items-center justify-center gap-4 p-12 bg-[#000000] underline">
      <p className="text-white"><Link href={"/impress"}>Impress</Link></p>
      <p className="text-white"><Link href={"/data-privacy"}>Data Privacy</Link></p>
    </footer>
  );
}
