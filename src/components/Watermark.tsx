export function Watermark() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden flex justify-between px-10 py-20 opacity-5">
      <div className="font-serif text-white text-9xl" style={{ writingMode: 'vertical-rl' }}>開発者</div>
      <div className="font-serif text-white text-9xl" style={{ writingMode: 'vertical-rl' }}>データ</div>
      <div className="font-serif text-white text-9xl" style={{ writingMode: 'vertical-rl' }}>武士</div>
    </div>
  );
}
