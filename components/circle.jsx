export default function ZigZagCircle() {
  return (
    <div className="w-32 h-32 text-purple-500">
      <svg viewBox="0 0 100 100" className="w-full h-full">

        {Array.from({ length: 24 }).map((_, i) => (
          <path
            key={i}
            d="M50 5 L52 12 L50 10 L48 12 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            transform={`rotate(${i * 15} 50 50)`}
          />
        ))}

      </svg>
    </div>
  );
}