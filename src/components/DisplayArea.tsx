interface DisplayAreaProps {
  value: string;
}

function DisplayArea({ value }: DisplayAreaProps) {
  return (
    <div
      className="bg-cyan-900 rounded-t-lg border-b-4 border-cyan-800
                  text-right p-8 text-cyan-50 text-4xl font-bold antialiased
                  selection:bg-cyan-600"
    >
      {value}
    </div>
  );
}

export default DisplayArea;
