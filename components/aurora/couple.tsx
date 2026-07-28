import Image from "next/image";
import FadeIn from "../ui/fadeIn";
import FadeLeft from "../ui/fadeLeft";
import FadeRight from "../ui/fadeRight";

type Person = {
  name: string;
  father: string;
  mother: string;
  photo: string;
  instagram?: string;
};

type CoupleProps = {
  groom: Person;
  bride: Person;
};

export default function Couple({ groom, bride }: CoupleProps) {
  return (
    <section id="couple" className="relative overflow-hidden bg-[#FFFDF8] py-24">

      {/* Dekorasi */}
      <Image
        src="/decorations/leaf-top-left.png"
        alt=""
        width={220}
        height={220}
        className="absolute left-0 top-0 opacity-10 pointer-events-none select-none"
      />

      <Image
        src="/decorations/leaf-bottom-right.png"
        alt=""
        width={220}
        height={220}
        className="absolute bottom-0 right-0 rotate-180 opacity-10 pointer-events-none select-none"
      />

      <div className="relative mx-auto max-w-6xl px-6">

        {/* Title */}

        <FadeIn>
          <div className="text-center">

            <span className="text-sm tracking-[5px] uppercase text-[#B08D57]">
              Bride & Groom
            </span>

            <h2 className="mt-3 text-4xl font-serif md:text-5xl text-[#2F2F2F]">
              The Happy Couple
            </h2>

            <div className="mx-auto mt-5 h-[2px] w-20 rounded-full bg-[#B08D57]" />

          </div>
        </FadeIn>

        {/* Ayat */}

        <div className="mx-auto mt-12 max-w-3xl text-center">

          <p className="text-3xl text-[#B08D57]">
            بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم
          </p>

          <p className="mt-8 leading-8 text-gray-600 italic">
            "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan
            pasangan hidup dari jenismu sendiri agar kamu merasa tenteram
            kepadanya, dan dijadikan-Nya di antaramu rasa kasih dan sayang."
          </p>

          <p className="mt-4 font-semibold text-[#B08D57]">
            QS. Ar-Rum : 21
          </p>

        </div>

        {/* Couple */}

        <div className="mt-20 grid gap-16 md:grid-cols-2">

          {/* Groom */}

          <FadeLeft delay={0.2}>
            <div className="rounded-[40px] bg-white p-8 text-center shadow-lg transition duration-300 hover:-translate-y-2">

              <div className="mx-auto h-64 w-64 overflow-hidden rounded-full border-[6px] border-[#E8DCC8]">

                <Image
                  src={groom.photo}
                  alt={groom.name}
                  width={500}
                  height={500}
                  className="h-full w-full object-cover"
                />

              </div>

              <h3 className="mt-8 text-4xl font-serif text-[#2F2F2F]">
                {groom.name}
              </h3>

              <div className="mx-auto mt-3 h-[2px] w-14 bg-[#B08D57]" />

              <p className="mt-6 text-gray-500">
                Putra dari
              </p>

              <p className="mt-2 font-semibold">
                {groom.father}
              </p>

              <p className="text-gray-400">&</p>

              <p className="font-semibold">
                {groom.mother}
              </p>

              {groom.instagram && (
                <a
                  href={groom.instagram}
                  target="_blank"
                  className="mt-6 inline-flex rounded-full border border-[#B08D57] px-5 py-2 text-sm text-[#B08D57] transition hover:bg-[#B08D57] hover:text-white"
                >
                  Instagram
                </a>
              )}

            </div>

          </FadeLeft>

          {/* Bride */}

          <FadeRight delay={0.4}>
            <div className="rounded-[40px] bg-white p-8 text-center shadow-lg transition duration-300 hover:-translate-y-2">

              <div className="mx-auto h-64 w-64 overflow-hidden rounded-full border-[6px] border-[#E8DCC8]">

                <Image
                  src={bride.photo}
                  alt={bride.name}
                  width={500}
                  height={500}
                  className="h-full w-full object-cover"
                />

              </div>

              <h3 className="mt-8 text-4xl font-serif text-[#2F2F2F]">
                {bride.name}
              </h3>

              <div className="mx-auto mt-3 h-[2px] w-14 bg-[#B08D57]" />

              <p className="mt-6 text-gray-500">
                Putri dari
              </p>

              <p className="mt-2 font-semibold">
                {bride.father}
              </p>

              <p className="text-gray-400">&</p>

              <p className="font-semibold">
                {bride.mother}
              </p>

              {bride.instagram && (
                <a
                  href={bride.instagram}
                  target="_blank"
                  className="mt-6 inline-flex rounded-full border border-[#B08D57] px-5 py-2 text-sm text-[#B08D57] transition hover:bg-[#B08D57] hover:text-white"
                >
                  Instagram
                </a>
              )}

            </div>
          </FadeRight>

        </div>

      </div>

    </section>
  );
}