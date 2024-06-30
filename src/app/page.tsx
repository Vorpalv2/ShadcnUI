import { auth } from "@/auth";
import AccordionComponent from "@/components/Accordion";
import CarouselComponent from "@/components/Carousel";
import { SignIn } from "@/components/SignIn";
import { SignOut } from "@/components/Signout";

export default async function Home() {
  const session = await auth();

  return (
    <main className="p-10 m-10">
      <section className="flex gap-10">
        <div className="left w-1/2 text-black">
          <CarouselComponent />
        </div>
        <div className="right w-1/2 p-5">
          <div className="grid grid-cols-1">
            <div className="m-10">
              <AccordionComponent />
            </div>
            <div className="m-10 flex gap-2 align-middle items-center">
              {!session?.user ? (
                <div>
                  <span>Lets Begin by Signing In -</span>
                  <SignIn />
                </div>
              ) : (
                <div className="m-10 flex gap-2 align-middle items-center">
                  <span>You are already Signed In</span>
                  <SignOut />
                </div>
              )}
            </div>
            <div className="m-10 bg-green-400">3</div>
            <div className="m-10 bg-purple-600">4</div>
          </div>
        </div>
      </section>
    </main>
  );
}
