import Image from "next/image";

export default function Statio() {
  return (
    <section>
      <div className="section-bg">
        <Image src="/bg-4.webp" alt="bg" width={0} height={0} sizes="100vw" />
      </div>
      <div className="section-header">
        <h1>Staion</h1>
      </div>
    </section>
  );
}
