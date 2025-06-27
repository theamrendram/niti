import { Button } from "./ui/button";

export function HeroSection() {
  return (
    <div className="min-h-screen">

      {/*Hero Content */}
      <main className="mx-auto max-w-7xl px-6 pt-16 pb-20">
        <div className="mb-16 text-center">
          <h1 className="mb-6 text-5xl leading-tight font-bold text-gray-900 md:text-6xl">
            AI-powered projects management
            <br />
            for teams
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-xl leading-relaxed text-gray-600">
            With intelligent automation, your team can align faster, prioritize
            smarter, and execute projects with clarity. Let AI handle the
            busywork so you can focus on collaboration, creativity, and
            delivering results.
          </p>
          <Button className="text rounded-full bg-gray-900 px-8 py-6 text-white hover:bg-gray-800">
            Get started for free
          </Button>
        </div>

        <div className="relative mx-auto max-w-4xl">
          <div className="relative">
            <img
              src="/todo.jpeg"
              alt="niti"
              width={800}
              height={500}
              className="h-auto w-full rounded-2xl shadow-2xl"
            />
          </div>
          {/* <div className="flex items-center justify-center mt-8 space-x-4">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 border-2 border-white"></div>
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-400 to-green-600 border-2 border-white"></div>
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-400 to-purple-600 border-2 border-white"></div>
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-400 to-pink-600 border-2 border-white"></div>
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 border-2 border-white"></div>
            </div>
            <div className="text-sm text-gray-600">
              <span className="font-semibold">Join 50,000+ designers</span>
            </div>
          </div> */}
          <div className="mt-8 flex flex-col items-center space-y-3">
            <div className="text-center text-sm text-gray-700">
              <span>
                Join <span className="font-semibold">100+</span> teams
              </span>
            </div>

            <div className="flex -space-x-3">
              <img
                className="h-8 w-8 rounded-full border-2 border-white"
                src="/p1.jpg"
                alt="user"
              />
              <img
                className="h-8 w-8 rounded-full border-2 border-white"
                src="/p2.jpg"
                alt="user"
              />
              <img
                className="h-8 w-8 rounded-full border-2 border-white"
                src="/p3.jpeg"
                alt="user"
              />
              <img
                className="h-8 w-8 rounded-full border-2 border-white"
                src="/p4.jpg"
                alt="user"
              />
              <img
                className="h-8 w-8 rounded-full border-2 border-white"
                src="/p5.jpeg"
                alt="user"
              />
              <div className="flex h-8 items-center justify-center rounded-full border-2 border-white bg-blue-100 px-3 text-xs font-semibold text-blue-600">
                99+
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default HeroSection;
