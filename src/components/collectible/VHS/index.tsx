interface VHSProps {
  count: number;
}

export function VHS({count}: VHSProps) {
  return (
    <div>
      This is the VHS component. This VHS has {count} tapes
    </div>
  );
}
