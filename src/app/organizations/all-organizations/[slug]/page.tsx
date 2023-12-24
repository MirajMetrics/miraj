import Link from "next/link";
import Organization from "../../page";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Page({ params }: { params: { slug: string } }) {
  let additionalContent = null;
  let additionalContentSecond = null;

  // Logika tambahan berdasarkan slug
  if (params.slug === "umum") {
    additionalContent = (
      <div className="flex">
        {/* Tambahkan elemen atau komponen tambahan di sini */}
        <div className="flex gap-2">
          <Button>Sqan Code</Button>
          <Button>Camera</Button>
        </div>
      </div>
    );
  } else if (params.slug === "panitia" || "jamaah") {
    additionalContentSecond = <div>Ini buat keduanya</div>;
  }
  return (
    <Organization>
      <div className="h-screen">
        <Link
          href="/organizations/all-organizations"
          className="flex items-center"
        >
          <ArrowLeft className="w-5 h-5 mr-2" /> Kembali
        </Link>
        <div className="mt-5 flex items-center justify-between">
          <span className="text-3xl font-normal">{params.slug}</span>
          {/* Tampilkan konten tambahan berdasarkan slug */}
          {additionalContent}
        </div>
        {additionalContentSecond}
      </div>
    </Organization>
  );
}
