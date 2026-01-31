export function BotanicalBackground() {
  return (
    <>
      {/* Top-left botanical sketch */}
      <div
        className="fixed top-0 left-0 w-[400px] h-[400px] md:w-[600px] md:h-[600px] pointer-events-none z-[-1]"
        style={{
          backgroundImage: "url('/images/botanical-sketch-1.jpg')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top left",
          opacity: 0.12,
          filter: "grayscale(100%) contrast(120%)",
        }}
        aria-hidden="true"
      />
      
      {/* Bottom-right botanical sketch */}
      <div
        className="fixed bottom-0 right-0 w-[400px] h-[400px] md:w-[600px] md:h-[600px] pointer-events-none z-[-1]"
        style={{
          backgroundImage: "url('/images/botanical-sketch-2.jpg')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom right",
          opacity: 0.12,
          filter: "grayscale(100%) contrast(120%)",
        }}
        aria-hidden="true"
      />
    </>
  )
}
