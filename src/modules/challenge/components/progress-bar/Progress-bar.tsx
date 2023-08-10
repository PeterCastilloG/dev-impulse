import ProgressBar from "@ramonak/react-progress-bar";

export default function Progress({
  current,
  max,
  state,
  color
}: {
  current: number;
  max: number;
  state: boolean,
  color: string
}) {

  return (
    <ProgressBar
      completed={Number(current.toFixed(0))}
      maxCompleted={Number(max.toFixed(0))}
      borderRadius="0"
      customLabel=" "
      height="5px"
      bgColor={color}
      baseBgColor="#2D2E5F"
    />
  );
}
