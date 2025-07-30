import { useEffect, useState } from "react";

function ProgressBar({ value = 60, color = 'green' }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(value), 300);
    return () => clearTimeout(timer);
  }, [value]);

  return (
    <div style={{ border: '1px solid #ccc', width: 300, height: 20, borderRadius: 10 }}>
      <div
        style={{
          height: '100%',
          width: `${progress}%`,
          backgroundColor: color,
          borderRadius: 10,
          transition: 'width 0.5s ease-in-out',
        }}
      />
    </div>
  );
}
 export default ProgressBar;