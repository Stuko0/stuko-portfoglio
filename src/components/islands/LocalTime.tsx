import { useEffect, useState } from 'preact/hooks';

interface Props {
  location?: string;
}

export default function LocalTime({ location = 'Wonderland' }: Props) {
  const [time, setTime] = useState('--:--');

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          hour12: true,
        })
      );
    };
    update();
    const id = setInterval(update, 30_000);
    return () => clearInterval(id);
  }, []);

  return (
    <div class="text-body-1 infor">
      {location} · {time}
    </div>
  );
}
