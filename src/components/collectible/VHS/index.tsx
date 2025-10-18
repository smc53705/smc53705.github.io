interface VHSProps {
  numberOfTapes: number;
}

export function VHS(props: VHSProps) {
  return (
    <div>
      This is the VHS component. This VHS has {props.numberOfTapes} tapes
    </div>
  );
}
