import Image from "next/image";

export default function Gateway() {
  return (
    <section>
      <div className="section-bg">
        <Image src="/bg-3.webp" alt="bg" width={0} height={0} sizes="100vw" />
      </div>
      <div className="section-header">
        <h1>Gateway</h1>
      </div>
    </section>
  );
}
